const routeService = require('../services/routeService');

// Controller for creating a new route
const create = async (req, res) => {
    try {
        const routeData = req.body;
        const result = await routeService.createRouteService(routeData);
        return res.status(result.success ? 201 : 400).json(result);
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "An unexpected error occurred while creating the route.",
            error: error.message,
        });
    }
};

// Controller for retrieving a route by its ID
const getById = async (req, res) => {
    try {
        const routeId = req.params.id;
        const result = await routeService.getRouteByIdService(routeId);
        return res.status(result.success ? 200 : 404).json(result);
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "An unexpected error occurred while retrieving the route.",
            error: error.message,
        });
    }
};

// Controller for retrieving all routes
const getAll = async (req, res) => {
    try {
        const result = await routeService.getAllRoutesService();
        return res.status(result.success ? 200 : 400).json(result);
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "An unexpected error occurred while retrieving routes.",
            error: error.message,
        });
    }
};

// Controller for updating a route by its ID
const update = async (req, res) => {
    try {
        const routeId = req.params.id;
        const routeData = req.body;
        const result = await routeService.updateRouteService(routeId, routeData);
        return res.status(result.success ? 200 : 404).json(result);
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "An unexpected error occurred while updating the route.",
            error: error.message,
        });
    }
};

// Controller for deleting a route by its ID
const deleteById = async (req, res) => {
    try {
        const routeId = req.params.id;
        const result = await routeService.deleteRouteService(routeId);
        return res.status(result.success ? 200 : 404).json(result);
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "An unexpected error occurred while deleting the route.",
            error: error.message,
        });
    }
};

// Controller for retrieving a route by its route number
const getByNumber = async (req, res) => {
    try {
        const routeNumber = req.params.routeNumber;
        const result = await routeService.getRouteByNumberService(routeNumber);
        return res.status(result.success ? 200 : 404).json(result);
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "An unexpected error occurred while retrieving the route.",
            error: error.message,
        });
    }
};

module.exports = {
    create,
    getById,
    getAll,
    update,
    deleteById,
    getByNumber,
};