// Required modules
const permitService = require("../services/permitService");

// Controller to handle permit-related operations

// Create a new permit
const createPermit = async (req, res) => {
    try {
        const permitData = req.body;
        const result = await permitService.createPermit(permitData);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({
            success: false,
            message: `Error creating permit: ${error.message}`,
        });
    }
};

// Get all permits
const getAllPermits = async (req, res) => {
    try {
        const result = await permitService.getAllPermits();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({
            success: false,
            message: `Error fetching permits: ${error.message}`,
        });
    }
};

// Get a permit by ID
const getPermitById = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await permitService.getPermitById(id);
        if (result.success) {
            res.status(200).json(result);
        } else {
            res.status(404).json(result);
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: `Error fetching permit: ${error.message}`,
        });
    }
};

// Update a permit by ID
const updatePermitById = async (req, res) => {
    try {
        const { id } = req.params;
        const permitData = req.body;
        const result = await permitService.updatePermitById(id, permitData);
        if (result.success) {
            res.status(200).json(result);
        } else {
            res.status(400).json(result);
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: `Error updating permit: ${error.message}`,
        });
    }
};

// Delete a permit by ID
const deletePermitById = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await permitService.deletePermitById(id);
        if (result.success) {
            res.status(200).json(result);
        } else {
            res.status(404).json(result);
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: `Error deleting permit: ${error.message}`,
        });
    }
};

// Get a permit by NTC Permit Number
const getPermitByNTCPermitNo = async (req, res) => {
    try {
        const { ntcPermitNo } = req.params;
        const result = await permitService.getPermitByNTCPermitNo(ntcPermitNo);
        if (result.success) {
            res.status(200).json(result);
        } else {
            res.status(404).json(result);
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: `Error fetching permit: ${error.message}`,
        });
    }
};

// Get permits by bus number
const getPermitByBusNumber = async (req, res) => {
    try {
        const { busNo } = req.params;
        const result = await permitService.getPermitByBusNumber(busNo);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({
            success: false,
            message: `Error fetching permits: ${error.message}`,
        });
    }
};

// Get permits by service type
const getPermitsByServiceType = async (req, res) => {
    try {
        const { serviceType } = req.params;
        const result = await permitService.getPermitsByServiceType(serviceType);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({
            success: false,
            message: `Error fetching permits: ${error.message}`,
        });
    }
};

// Get permits by validity status
const getPermitsByValidity = async (req, res) => {
    try {
        const { isValid } = req.params;
        const result = await permitService.getPermitsByValidity(isValid);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({
            success: false,
            message: `Error fetching permits: ${error.message}`,
        });
    }
};

// Get permits by bus operator ID
const getPermitsByBusOperatorId = async (req, res) => {
    try {
        const { busOperatorId } = req.params;
        const result = await permitService.getPermitsByBusOperatorId(busOperatorId);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({
            success: false,
            message: `Error fetching permits: ${error.message}`,
        });
    }
};

// Get permits by route ID
const getPermitsByRouteId = async (req, res) => {
    try {
        const { routeId } = req.params;
        const result = await permitService.getPermitsByRouteId(routeId);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({
            success: false,
            message: `Error fetching permits: ${error.message}`,
        });
    }
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