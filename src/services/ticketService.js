const ticketDao = require("../dao/ticketDao");

// Service to get a ticket by ID
const getTicketById = async (id) => {
    try {
        return await ticketDao.getTicketById(id);
    } catch (error) {
        console.error('Error in getTicketById service:', error);
        throw new Error('An error occurred while retrieving the ticket.');
    }
};

// Service to get tickets by reservation ID
const getTicketsByReservationId = async (reservationId) => {
    try {
        return await ticketDao.getTicketsByReservationId(reservationId);
    } catch (error) {
        console.error('Error in getTicketsByReservationId service:', error);
        throw new Error('An error occurred while retrieving tickets.');
    }
};

module.exports = {
    getTicketById,
    getTicketsByReservationId,
};