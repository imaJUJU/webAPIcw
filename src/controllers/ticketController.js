const ticketService = require("../services/ticketService");

// Controller for retrieving a ticket by its ID
const getTicketByTicketId = async (req, res) => {
    const { id } = req.params;

    try {
        const result = await ticketService.getTicketById(id);
        const statusCode = result.success ? 200 : 404;
        return res.status(statusCode).json(result);
    } catch (error) {
        console.error('Error in getTicketByTicketId:', error);
        return res.status(500).json({
            success: false,
            message: `An error occurred: ${error.message}`,
        });
    }
};

// Controller for retrieving tickets by reservation ID
const getTicketsByTicketReservationId = async (req, res) => {
    const { reservationId } = req.params;

    try {
        const result = await ticketService.getTicketsByReservationId(reservationId);
        const statusCode = result.success ? 200 : 404;
        return res.status(statusCode).json(result);
    } catch (error) {
        console.error('Error in getTicketsByTicketReservationId:', error);
        return res.status(500).json({
            success: false,
            message: `An error occurred: ${error.message}`,
        });
    }
};

module.exports = {
    getTicketByTicketId,
    getTicketsByTicketReservationId,
};
