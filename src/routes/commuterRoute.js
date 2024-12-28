const express = require("express");
const {
    create,
    getAll,
    getById,
    updateById,
    deleteById,
    getByProvince,
    getByCity,
    getByPhoneNumberOrEmail,
} = require("../controllers/commuterController");

const router = express.Router();

/**
 * @swagger
 * /ntc/v1/commuter/create:
 *   post:
 *     summary: Create a new commuter
 *     tags: [Commuter]
 *     description: Create a new commuter with the provided data.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               addressNo:
 *                 type: string
 *               addressFirstLine:
 *                 type: string
 *               addressSecondLine:
 *                 type: string
 *               city:
 *                 type: string
 *               province:
 *                 type: string
 *               user:
 *                 type: string
 *     responses:
 *       201:
 *         description: Commuter created successfully
 *       400:
 *         description: Bad request, invalid input
 */
router.post('/create', create);

/**
 * @swagger
 * /ntc/v1/commuter:
 *   get:
 *     summary: Get all commuters
 *     tags: [Commuter]
 *     description: Retrieve a list of all commuters.
 *     responses:
 *       200:
 *         description: Successfully retrieved commuters
 *       500:
 *         description: Failed to retrieve commuters
 */
router.get('/', getAll);

/**
 * @swagger
 * /ntc/v1/commuter/{id}:
 *   get:
 *     summary: Get a commuter by ID
 *     tags: [Commuter]
 *     description: Retrieve a commuter's details by their ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the commuter
 *     responses:
 *       200:
 *         description: Successfully retrieved commuter
 *       404:
 *         description: Commuter not found
 */
router.get('/:id', getById);

/**
 * @swagger
 * /ntc/v1/commuter/{id}:
 *   put:
 *     summary: Update a commuter by ID
 *     tags: [Commuter]
 *     description: Update a commuter's information by their ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the commuter
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               addressNo:
 *                 type: string
 *               addressFirstLine:
 *                 type: string
 *               addressSecondLine:
 *                 type: string
 *               city:
 *                 type: string
 *               province:
 *                 type: string
 *     responses:
 *       200:
 *         description: Successfully updated commuter
 *       404:
 *         description: Commuter not found
 */
router.put('/:id', updateById);

/**
 * @swagger
 * /ntc/v1/commuter/{id}:
 *   delete:
 *     summary: Delete a commuter by ID
 *     tags: [Commuter]
 *     description: Delete a commuter from the database by their ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the commuter
 *     responses:
 *       200:
 *         description: Successfully deleted commuter
 *       404:
 *         description: Commuter not found
 */
router.delete('/:id', deleteById);

/**
 * @swagger
 * /ntc/v1/commuter/province/{province}:
 *   get:
 *     summary: Get commuters by province
 *     tags: [Commuter]
 *     description: Retrieve a list of commuters in a specific province.
 *     parameters:
 *       - in: path
 *         name: province
 *         schema:
 *           type: string
 *         required: true
 *         description: The province to filter by
 *     responses:
 *       200:
 *         description: Successfully retrieved commuters by province
 */
router.get('/province/:province', getByProvince);

/**
 * @swagger
 * /ntc/v1/commuter/city/{city}:
 *   get:
 *     summary: Get commuters by city
 *     tags: [Commuter]
 *     description: Retrieve a list of commuters in a specific city.
 *     parameters:
 *       - in: path
 *         name: city
 *         schema:
 *           type: string
 *         required: true
 *         description: The city to filter by
 *     responses:
 *       200:
 *         description: Successfully retrieved commuters by city
 */
router.get('/city/:city', getByCity);

/**
 * @swagger
 * /ntc/v1/commuter/credential/{credential}:
 *   get:
 *     summary: Get commuter by phone number or email
 *     tags: [Commuter]
 *     description: Retrieve a commuter's details by their phone number or email.
 *     parameters:
 *       - in: path
 *         name: credential
 *         schema:
 *           type: string
 *         required: true
 *         description: The phone number or email to search for
 *     responses:
 *       200:
 *         description: Successfully retrieved commuter
 *       404:
 *         description: Commuter not found
 */
router.get('/credential/:credential', getByPhoneNumberOrEmail);

module.exports = router;