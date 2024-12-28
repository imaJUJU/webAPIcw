const commuterDao = require('../dao/commuterDao');

const commuterService = {
    async create(data) {
        return await commuterDao.createCommuter(data);
    },

    async getAll() {
        return await commuterDao.getAllCommuters();
    },

    async getById(id) {
        return await commuterDao.getCommuterById(id);
    },

    async updateById(id, data) {
        return await commuterDao.updateCommuterById(id, data);
    },

    async deleteById(id) {
        return await commuterDao.deleteCommuterById(id);
    },

    async getByProvince(province) {
        return await commuterDao.getCommutersByProvince(province);
    },

    async getByCity(city) {
        return await commuterDao.getCommutersByCity(city);
    },

    async getByPhoneNumberOrEmail(credential) {
        return await commuterDao.getCommuterByPhoneNumberOrEmail(credential);
    },
};

module.exports = commuterService;