const reservationDao = require("../dao/reservationDao");

// Service for creating a new reservation
const createReservationService = async (reservationData) => {
    return await reservationDao.createReservation(reservationData);
};

// Service for retrieving a reservation by its ID
const getReservationByIdService = async (id) => {
    return await reservationDao.getReservationById(id);
};

// Service for updating a reservation by its ID
const updateReservationByIdService = async (id, reservationData) => {
    return await reservationDao.updateReservationById(id, reservationData);
};

// Service for deleting a reservation by its ID
const deleteReservationByIdService = async (id) => {
    return await reservationDao.deleteReservationById(id);
};

// Service for retrieving reservations by commuter ID
const getReservationsByCommuterIdService = async (commuterId) => {
    return await reservationDao.getReservationsByCommuterId(commuterId);
};

// Service for retrieving reservations by route ID
const getReservationsByRouteIdService = async (routeId) => {
    return await reservationDao.getReservationsByRouteId(routeId);
};

module.exports = {
    createReservationService,
    getReservationByIdService,
    updateReservationByIdService,
    deleteReservationByIdService,
    getReservationsByCommuterIdService,
    getReservationsByRouteIdService,
};
