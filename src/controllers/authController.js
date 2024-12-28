const authService = require('../services/authService');

const register = async (req, res) => {
    try {
        const { phonenumber, username, password, role } = req.body;
        const result = await authService.registerUser({ phonenumber, username, password, role });
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const login = async (req, res) => {
    try {
        const { credential, password } = req.body;
        const result = await authService.loginUser({ credential, password });
        res.status(result.success ? 200 : 401).json(result);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const verify = async (req, res) => {
    try {
        const { phonenumber } = req.body;
        const result = await authService.verifyByPhoneNumber(phonenumber);
        res.status(result.success ? 200 : 404).json(result);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const forgot = async (req, res) => {
    try {
        const { phonenumber } = req.body;
        const result = await authService.forgotPassword(phonenumber);
        res.status(result.success ? 200 : 404).json(result);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const reset = async (req, res) => {
    try {
        const { token, newPassword } = req.body;
        const result = await authService.resetPassword({ token, newPassword });
        res.status(result.success ? 200 : 400).json(result);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const update = async (req, res) => {
    try {
        const { id } = req.params;
        const { updates } = req.body;
        const result = await authService.updateUser({ id, updates });
        res.status(result.success ? 200 : 404).json(result);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const remove = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await authService.deleteUser(id);
        res.status(result.success ? 200 : 404).json(result);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = {
    register,
    login,
    verify,
    forgot,
    reset,
    update,
    remove
};