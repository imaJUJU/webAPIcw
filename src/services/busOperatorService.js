const {
    createBusOperator,
    getAllBusOperators,
    getBusOperatorById,
    updateBusOperatorById,
    deleteBusOperatorById,
    getBusOperatorByPhoneNumber,
    getBusOperatorByUserId,
} = require('../dao/busOperatorDao'); // Adjust path as needed

const busOperatorService = {
    async create(data) {
        return await createBusOperator(data);
    },

    async getAll() {
        return await getAllBusOperators();
    },

    async getById(id) {
        return await getBusOperatorById(id);
    },

    async updateById(id, data) {
        return await updateBusOperatorById(id, data);
    },

    async deleteById(id) {
        return await deleteBusOperatorById(id);
    },

    async getByPhoneNumber(phoneNumber) {
        return await getBusOperatorByPhoneNumber(phoneNumber);
    },

    async getByUserId(userId) {
        return await getBusOperatorByUserId(userId);
    },
};

module.exports = busOperatorService;