const seatService = require("../services/seatService");

// Controller for creating a seat for a bus
const createSeatForBus = async (req, res) => {
    const { number, isAvailable, isBookingInProgress, isWindowSeat, busId } = req.body;

    if (!number || isAvailable === undefined || isBookingInProgress === undefined || isWindowSeat === undefined || !busId) {
        return res.status(400).json({
            success: false,
            message: 'Please provide all required fields: number, isAvailable, isBookingInProgress, isWindowSeat, busId',
        });
    }

    try {
        const result = await seatService.createSeatForBus({ number, isAvailable, isBookingInProgress, isWindowSeat, busId });
        const statusCode = result.success ? 201 : 500;
        return res.status(statusCode).json(result);
    } catch (error) {
        console.error('Error in createSeatForBusController:', error);
        return res.status(500).json({
            success: false,
            message: 'An error occurred while creating the seat.',
        });
    }
};

// Controller for retrieving a seat by its number
const getSeatByNumberController = async (req, res) => {
    const { number } = req.params;
    const { busRegNumber } = req.query;

    try {
        const result = await seatService.getSeatByNumber(number, busRegNumber);
        const statusCode = result.success ? 200 : 404;
        return res.status(statusCode).json(result);
    } catch (error) {
        console.error('Error in getSeatByNumberController:', error);
        return res.status(500).json({
            success: false,
            message: `An error occurred: ${error.message}`,
        });
    }
};

// Controller for retrieving seats by Bus ID with optional filters
const getSeatsByBusIdController = async (req, res) => {
    const { busId } = req.params;
    const { isAvailable, isBookingInProgress, isWindowSeat } = req.query;

    try {
        const filters = {
            isAvailable: isAvailable === undefined ? null : isAvailable === "true",
            isBookingInProgress: isBookingInProgress === undefined ? null : isBookingInProgress === "true",
            isWindowSeat: isWindowSeat === undefined ? null : isWindowSeat === "true",
        };

        const result = await seatService.getSeatsByBusId(busId, filters);
        const statusCode = result.success ? 200 : 404;
        return res.status(statusCode).json(result);
    } catch (error) {
        console.error('Error in getSeatsByBusIdController:', error);
        return res.status(500).json({
            success: false,
            message: `An error occurred: ${error.message}`,
        });
    }
};

// Controller for retrieving all seats by Bus ID
const getAllSeatsByBusIdController = async (req, res) => {
    const { busId } = req.params;

    try {
        const result = await seatService.getAllSeatsByBusId(busId);
        const statusCode = result.success ? 200 : 404;
        return res.status(statusCode).json(result);
    } catch (error) {
        console.error('Error in getAllSeatsByBusIdController:', error);
        return res.status(500).json({
            success: false,
            message: `An error occurred: ${error.message}`,
        });
    }
};

module.exports = {
    createSeatForBus,
    getSeatByNumberController,
    getSeatsByBusIdController,
    getAllSeatsByBusIdController,
};