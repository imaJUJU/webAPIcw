const commuterService = require('../services/commuterService');

const create = async (req, res) => {
    try {
        const result = await commuterService.create(req.body);
        return res.status(result.success ? 201 : 400).json(result);
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'An unexpected error occurred.',
            error: error.message,
        });
    }
};

const getAll = async (req, res) => {
    try {
        const result = await commuterService.getAll();
        return res.status(result.success ? 200 : 400).json(result);
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'An unexpected error occurred.',
            error: error.message,
        });
    }
};

const getById = async (req, res) => {
    try {
        const result = await commuterService.getById(req.params.id);
        return res.status(result.success ? 200 : 404).json(result);
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'An unexpected error occurred.',
            error: error.message,
        });
    }
};

const updateById = async (req, res) => {
    try {
        const result = await commuterService.updateById(req.params.id, req.body);
        return res.status(result.success ? 200 : 404).json(result);
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'An unexpected error occurred.',
            error: error.message,
        });
    }
};

const deleteById = async (req, res) => {
    try {
        const result = await commuterService.deleteById(req.params.id);
        return res.status(result.success ? 200 : 404).json(result);
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'An unexpected error occurred.',
            error: error.message,
        });
    }
};

const getByProvince = async (req, res) => {
    try {
        const result = await commuterService.getByProvince(req.query.province);
        return res.status(result.success ? 200 : 404).json(result);
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'An unexpected error occurred.',
            error: error.message,
        });
    }
};

const getByCity = async (req, res) => {
    try {
        const result = await commuterService.getByCity(req.query.city);
        return res.status(result.success ? 200 : 404).json(result);
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'An unexpected error occurred.',
            error: error.message,
        });
    }
};

const getByPhoneNumberOrEmail = async (req, res) => {
    try {
        const result = await commuterService.getByPhoneNumberOrEmail(req.query.credential);
        return res.status(result.success ? 200 : 404).json(result);
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'An unexpected error occurred.',
            error: error.message,
        });
    }
};

module.exports = {
    create,
    getAll,
    getById,
    updateById,
    deleteById,
    getByProvince,
    getByCity,
    getByPhoneNumberOrEmail,
};