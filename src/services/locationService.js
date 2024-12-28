const locationDao = require('../dao/locationDao');

const locationService = {
    async create(data) {
        return await locationDao.createLocation(data);
    },

    async getByRouteNo(routeNo) {
        return await locationDao.getLocationsByRouteNumber(routeNo);
    },

    async getByName(name) {
        return await locationDao.getLocationsByName(name);
    },
};

module.exports = locationService;