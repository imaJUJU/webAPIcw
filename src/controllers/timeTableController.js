const timeTableService = require("../services/timeTableService");

// Controller to handle GET request for timetables by Bus ID
const getTimetablesByBusId = async (req, res) => {
    const { busId } = req.params;

    try {
        const result = await timeTableService.getTimetablesByBusId(busId);

        if (result.success) {
            return res.status(200).json({
                success: true,
                message: result.message,
                data: result.data,
            });
        } else {
            return res.status(404).json({
                success: false,
                message: result.message,
            });
        }
    } catch (error) {
        console.error('Error in getTimetablesByBusId:', error);
        return res.status(500).json({
            success: false,
            message: `An error occurred: ${error.message}`,
        });
    }
};

// Controller to add a timetable for a bus
const AddTimeForBus = async (req, res) => {
    const { arrivalTime, departureTime, busId, locationId } = req.body;

    if (!arrivalTime || !departureTime || !busId || !locationId) {
        return res.status(400).json({
            success: false,
            message: 'Please provide all required fields: arrivalTime, departureTime, busId, locationId',
        });
    }

    try {
        const result = await timeTableService.AddTimeForBus({ arrivalTime, departureTime, busId, locationId });

        if (result.success) {
            return res.status(201).json({
                success: true,
                message: result.message,
                data: result.data,
            });
        } else {
            return res.status(500).json({
                success: false,
                message: result.message,
                data: result.data,
            });
        }
    } catch (error) {
        console.error('Error in AddTimeForBus:', error);
        return res.status(500).json({
            success: false,
            message: 'An error occurred while creating the TimeTable.',
            data: null,
        });
    }
};

module.exports = {
    getTimetablesByBusId,
    AddTimeForBus,
};