const RouteAvailability = require('../models/routeAvailabilityModel'); // Import the RouteAvailability model
const Route = require('../models/routeModel'); // Import the RouteAvailability model

//Retrieve all route availabilities.
//If ⁠ isAvailable ⁠ is null, it returns all records.
//Otherwise, filters records based on the ⁠ isAvailable ⁠ value.
const getAllRouteAvailabilities = async (isAvailable) => {
    try {

        // Fetch data from the database
        const routeAvailabilities = isAvailable == null ?
         await RouteAvailability.find().populate('route') :
         isAvailable == true ?
            await RouteAvailability.find({ isAvailable: true }).populate('route') :
            await RouteAvailability.find({ isAvailable: false }).populate('route')

        return {
            success: true,
            message: 'All route availabilities retrieved successfully',
            data: routeAvailabilities,
        };
    } catch (error) {
        console.log(error.message);
        return {
            success: false,
            message: 'Cannot send all route availabilities!',
            data: null,
        };
    }
};

module.exports = {
    getAllRouteAvailabilities,
};