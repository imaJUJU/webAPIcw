const routeAvailabilityDao = require('../dao/routeAvailabilityDao');

//Service to fetch all route availabilities with optional filtering
const fetchAllRouteAvailabilities = async (isAvailable) => {
    try {
        return await routeAvailabilityDao.getAllRouteAvailabilities(isAvailable);
    } catch (error) {
        throw new Error('Error fetching route availabilities: ' + error.message);
    }
};

module.exports = {
    fetchAllRouteAvailabilities,
};