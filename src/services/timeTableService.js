const timeTableDao = require("../dao/timeTableDao");

// Service to get timetables by Bus ID
const getTimetablesByBusId = async (busId) => {
    try {
        return await timeTableDao.getByBusId(busId);
    } catch (error) {
        console.error('Error in getTimetablesByBusId service:', error);
        throw new Error('An error occurred while retrieving timetables.');
    }
};

// Service to add a timetable for a bus
const AddTimeForBus = async ({ arrivalTime, departureTime, busId, locationId }) => {
    try {
        return await timeTableDao.createTimeTable(arrivalTime, departureTime, busId, locationId);
    } catch (error) {
        console.error('Error in AddTimeForBus service:', error);
        throw new Error('An error occurred while creating the timetable.');
    }
};

module.exports = {
    getTimetablesByBusId,
    AddTimeForBus,
};
