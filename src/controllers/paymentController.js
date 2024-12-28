const paymentService = require("../services/paymentService");

const createPayment = async (req, res) => {
    try {
        const result = await paymentService.createPayment(req.body);
        return res.status(201).json({
            success: true,
            message: "Payment created successfully.",
            data: result,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: `An error occurred: ${error.message}`,
        });
    }
};

const deletePaymentsByCommuterId = async (req, res) => {
    try {
        const result = await paymentService.deletePaymentsByCommuterId(req.params.commuterId);

        if (result.deletedCount > 0) {
            return res.status(200).json({
                success: true,
                message: `${result.deletedCount} payment(s) deleted successfully.`,
            });
        } else {
            return res.status(404).json({
                success: false,
                message: "No payments found for the given commuter ID.",
            });
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: `An error occurred: ${error.message}`,
        });
    }
};

const getPaymentsByReservationId = async (req, res) => {
    try {
        const payments = await paymentService.getPaymentsByReservationId(req.params.reservationId);

        if (payments.length > 0) {
            return res.status(200).json({
                success: true,
                data: payments,
            });
        } else {
            return res.status(404).json({
                success: false,
                message: "No payments found for the given reservation ID.",
            });
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: `An error occurred: ${error.message}`,
        });
    }
};

const getPaymentsByCommuterId = async (req, res) => {
    try {
        const payments = await paymentService.getPaymentsByCommuterId(req.params.commuterId);

        if (payments.length > 0) {
            return res.status(200).json({
                success: true,
                data: payments,
            });
        } else {
            return res.status(404).json({
                success: false,
                message: "No payments found for the given commuter ID.",
            });
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: `An error occurred: ${error.message}`,
        });
    }
};

const addReservationId = async (req, res) => {
    try {
        const result = await paymentService.addReservationId(req.params.paymentId, req.body.reservationId);

        if (!result) {
            return res.status(404).json({
                success: false,
                message: "Payment not found for the given payment ID.",
            });
        }

        return res.status(200).json({
            success: true,
            message: "Reservation ID added to the payment successfully.",
            data: result,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: `An error occurred: ${error.message}`,
        });
    }
};

module.exports = {
    createPayment,
    deletePaymentsByCommuterId,
    getPaymentsByReservationId,
    getPaymentsByCommuterId,
    addReservationId,
};