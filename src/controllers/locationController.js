const locationService = require('../services/locationService');

const create = async (req, res) => {
    try {
        const result = await locationService.create(req.body);
        return res.status(result.success ? 201 : 400).json(result);
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'An unexpected error occurred.',
            error: error.message,
        });
    }
};

const getLocationByRouteNo = async (req, res) => {
    try {
        const { routeNo } = req.params;
        const result = await locationService.getByRouteNo(routeNo);
        return res.status(result.success ? 200 : 400).json(result);
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'An unexpected error occurred.',
            error: error.message,
        });
    }
};

const getLocationByLocationName = async (req, res) => {
    try {
        const { name } = req.params;
        const result = await locationService.getByName(name);
        return res.status(result.success ? 200 : 400).json(result);
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
    getLocationByRouteNo,
    getLocationByLocationName,
};