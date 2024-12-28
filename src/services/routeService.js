const routeDao = require('../dao/routeDao');

const createRouteService = async (routeData) => {
    return await routeDao.createRoute(routeData);
};

const getRouteByIdService = async (routeId) => {
    return await routeDao.getRouteById(routeId);
};

const getAllRoutesService = async () => {
    return await routeDao.getAllRoutes();
};

const updateRouteService = async (routeId, routeData) => {
    return await routeDao.updateRoute(routeId, routeData);
};

const deleteRouteService = async (routeId) => {
    return await routeDao.deleteRoute(routeId);
};

const getRouteByNumberService = async (routeNumber) => {
    return await routeDao.getRouteByNumber(routeNumber);
};

module.exports = {
    createRouteService,
    getRouteByIdService,
    getAllRoutesService,
    updateRouteService,
    deleteRouteService,
    getRouteByNumberService,
};