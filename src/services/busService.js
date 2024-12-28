const busDao = require('../dao/busDao');

const createBusService = async (busData) => {
    return await busDao.createBus(busData);
};

const getAllBusesService = async () => {
    return await busDao.getAllBuses();
};

const getBusByIdService = async (id) => {
    return await busDao.getBusById(id);
};

const updateBusByIdService = async (id, updates) => {
    return await busDao.updateBusById(id, updates);
};

const deleteBusByIdService = async (id) => {
    return await busDao.deleteBusById(id);
};

const getByBusNumberService = async (busRegNumber) => {
    return await busDao.getByBusNumber(busRegNumber);
};

const getByAvailabilityService = async (isAvailable) => {
    return await busDao.getByAvailability(isAvailable);
};

const getByCTBorPrivateService = async (isCTBorPrivate) => {
    return await busDao.getByCTBorPrivate(isCTBorPrivate);
};

const getByValidateService = async (isValidated) => {
    return await busDao.getByValidate(isValidated);
};

const getByBusOperatorIdService = async (busOperatorId) => {
    return await busDao.getByBusOperatorId(busOperatorId);
};

const getByRouteIdService = async (routeId) => {
    return await busDao.getByRouteId(routeId);
};

module.exports = {
    createBus: createBusService,
    getAllBuses: getAllBusesService,
    getBusById: getBusByIdService,
    updateBusById: updateBusByIdService,
    deleteBusById: deleteBusByIdService,
    getByBusNumber: getByBusNumberService,
    getByAvailability: getByAvailabilityService,
    getByCTBorPrivate: getByCTBorPrivateService,
    getByValidate: getByValidateService,
    getByBusOperatorId: getByBusOperatorIdService,
    getByRouteId: getByRouteIdService,
};
