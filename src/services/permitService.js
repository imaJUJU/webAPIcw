const permitDao = require("../dao/permitDao");

// Service to create a new permit
const createPermit = async (permitData) => {
    return await permitDao.createPermit(permitData);
};

// Service to get all permits
const getAllPermits = async () => {
    return await permitDao.getAllPermits();
};

// Service to get a permit by ID
const getPermitById = async (id) => {
    return await permitDao.getPermitById(id);
};

// Service to update a permit by ID
const updatePermitById = async (id, permitData) => {
    return await permitDao.updatePermitById(id, permitData);
};

// Service to delete a permit by ID
const deletePermitById = async (id) => {
    return await permitDao.deletePermitById(id);
};

// Service to get a permit by NTC Permit Number
const getPermitByNTCPermitNo = async (ntcPermitNo) => {
    return await permitDao.getPermitByNTCPermitNo(ntcPermitNo);
};

// Service to get permits by bus number
const getPermitByBusNumber = async (busNo) => {
    return await permitDao.getPermitByBusNumber(busNo);
};

// Service to get permits by service type
const getPermitsByServiceType = async (serviceType) => {
    return await permitDao.getPermitsByServiceType(serviceType);
};

// Service to get permits by validity status
const getPermitsByValidity = async (isValid) => {
    return await permitDao.getPermitsByValidity(isValid);
};

// Service to get permits by bus operator ID
const getPermitsByBusOperatorId = async (busOperatorId) => {
    return await permitDao.getPermitsByBusOperatorId(busOperatorId);
};

// Service to get permits by route ID
const getPermitsByRouteId = async (routeId) => {
    return await permitDao.getPermitsByRouteId(routeId);
};

module.exports = {
    createPermit,
    getAllPermits,
    getPermitById,
    updatePermitById,
    deletePermitById,
    getPermitByNTCPermitNo,
    getPermitByBusNumber,
    getPermitsByServiceType,
    getPermitsByValidity,
    getPermitsByBusOperatorId,
    getPermitsByRouteId,
};
