const userDao = require('../dao/userDao');

const registerUser = async ({ phonenumber, username, password, role }) => {
    return await userDao.registerUser({ phonenumber, username, password, role });
};

const loginUser = async ({ credential, password }) => {
    return await  userDao.loginUser({ credential, password });
};

const verifyByPhoneNumber = async (phonenumber) => {
    return await  userDao.verifyByPhoneNumber(phonenumber);
};

const forgotPassword = async (phonenumber) => {
    return await  userDao.forgotPassword(phonenumber);
};

const resetPassword = async ({ token, newPassword }) => {
    return await  userDao.resetPassword({ token, newPassword });
};

const updateUser = async ({ id, updates }) => {
    return await  userDao.updateUser({ id, updates });
};

const deleteUser = async (id) => {
    return await  userDao.deleteUser(id);
};

module.exports = {
    registerUser,
    loginUser,
    verifyByPhoneNumber,
    forgotPassword,
    resetPassword,
    updateUser,
    deleteUser
};
