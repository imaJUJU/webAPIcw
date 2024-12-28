const seatDao = require("../dao/seatDao");

// Service to create a seat for a bus
const createSeatForBus = async ({ number, isAvailable, isBookingInProgress, isWindowSeat, busId }) => {
    try {
        const result = await seatDao.createSeat(number, isAvailable, isBookingInProgress, isWindowSeat, busId);
        return result;
    } catch (error) {
        console.error('Error in createSeatForBus service:', error);
        throw new Error('An error occurred while creating the seat.');
    }
};

// Service to get a seat by its number
const getSeatByNumber = async (number, busRegNumber) => {
    try {
        return await seatDao.getByNumber(number, busRegNumber);
    } catch (error) {
        console.error('Error in getSeatByNumber service:', error);
        throw new Error('An error occurred while retrieving the seat.');
    }
};

// Service to get seats by Bus ID with filters
const getSeatsByBusId = async (busId, filters) => {
    try {
        const { isAvailable, isBookingInProgress, isWindowSeat } = filters;
        return await seatDao.getSeatsByBusId(busId, isAvailable, isBookingInProgress, isWindowSeat);
    } catch (error) {
        console.error('Error in getSeatsByBusId service:', error);
        throw new Error('An error occurred while retrieving seats.');
    }
};

// Service to get all seats by Bus ID
const getAllSeatsByBusId = async (busId) => {
    try {
        return await seatDao.getAllSeatsByBusId(busId);
    } catch (error) {
        console.error('Error in getAllSeatsByBusId service:', error);
        throw new Error('An error occurred while retrieving all seats.');
    }
};

module.exports = {
    createSeatForBus,
    getSeatByNumber,
    getSeatsByBusId,
    getAllSeatsByBusId,
};
