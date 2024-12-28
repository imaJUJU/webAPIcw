const Payment = require("../models/paymentModel");
const twilio = require("twilio");
const Ticket = require("../models/ticketModel");
const Seat = require("../models/seatModel");
const Bus = require("../models/busModel");
const TimeTable = require("../models/timeTable");
const Route = require("../models/routeModel");
const Reservation = require("../models/reservationModel");
const Commuter = require("../models/commuterModel");
const User = require("../models/userModel");

const paymentService = {
    async createPayment(data) {
        const { paidDateTime, reservationId, amountForOneSeat, commuter } = data;

        const commuterDoc = await Commuter.findById(commuter).populate("user");
        if (!commuterDoc) throw new Error("Commuter not found.");

        const currentReservation = await Reservation.findById(reservationId);
        const numberOfSeats = currentReservation.listOfSeats.length;
        const totalAmount = amountForOneSeat * numberOfSeats;

        const userDoc = await User.findById(commuterDoc.user);
        if (!userDoc) throw new Error("User associated with commuter not found.");

        const phoneNumber = userDoc.phonenumber;

        const payment = new Payment({
            paidDateTime,
            reservationId,
            amountForOneSeat,
            numberOfSeats,
            totalAmount,
            commuter,
        });

        const result = await payment.save();

        if (result && reservationId) {
            const seatIds = currentReservation.listOfSeats;

            const tickets = [];
            for (const seatId of seatIds) {
                const seat = await Seat.findById(seatId);
                const bus = await Bus.findOne({ _id: seat.bus });
                const timeTable = await TimeTable.findOne({ bus: bus._id });
                const route = await Route.findOne({ _id: bus.route });

                const ticket = new Ticket({
                    price: amountForOneSeat,
                    seat: seat._id,
                    bus: bus._id,
                    timeTable: timeTable,
                    route: route._id,
                    reservation: reservationId,
                });

                tickets.push(ticket);
            }

            await Ticket.insertMany(tickets);

            const accountSid = process.env.TWILIO_S_ID;
            const authToken = process.env.TWILIO_AUTH_TOKEN;
            const client = require("twilio")(accountSid, authToken);

            await client.messages.create({
                body: `Your payment is complete! Number of seats: ${numberOfSeats} and Price for one seat: ${amountForOneSeat} | Total: Rs. ${totalAmount}`,
                messagingServiceSid: "MGb3d9b9603dce87f7d71879846d0edbb2",
                to: phoneNumber,
            });
        }

        return { payment: result, phoneNumber };
    },

    async deletePaymentsByCommuterId(commuterId) {
        const result = await Payment.deleteMany({ commuter: commuterId });

        if (result) {
            const accountSid = process.env.TWILIO_S_ID;
            const authToken = process.env.TWILIO_AUTH_TOKEN;
            const client = twilio(accountSid, authToken);

            await client.messages.create({
                body: "Your reservation is canceled!",
                from: "+1234567890",
                to: "+94770251175", // Example phone number
            });
        }

        return result;
    },

    async getPaymentsByReservationId(reservationId) {
        return await Payment.find({ reservationId }).populate("reservationId");
    },

    async getPaymentsByCommuterId(commuterId) {
        return await Payment.find({ commuter: commuterId }).populate("commuter");
    },

    async addReservationId(paymentId, reservationId) {
        const updatedPayment = await Payment.findByIdAndUpdate(
            paymentId,
            { reservationId },
            { new: true, runValidators: true }
        );

        if (updatedPayment) {
            const accountSid = process.env.TWILIO_S_ID;
            const authToken = process.env.TWILIO_AUTH_TOKEN;
            const client = twilio(accountSid, authToken);

            await client.messages.create({
                body: `Your reservation is complete! Amount for one seat: ${updatedPayment.amountForOneSeat} x Number of seats: ${updatedPayment.numberOfSeats} = Total amount: ${updatedPayment.totalAmount}`,
                from: "+1234567890",
                to: "+94770251175", // Example phone number
            });
        }

        return updatedPayment;
    },
};

module.exports = paymentService;