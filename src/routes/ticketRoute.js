const express = require("express");
const {
    getTicketByTicketId,
    getTicketsByTicketReservationId
} = require("../controllers/ticketController");

const auth = require("../middleware/auth-middleware");
const router = express.Router();
router.use(auth);

/**
 * @swagger
 * /ntc/v1/tickets/{id}:
 *   get:
 *     summary: Get ticket by ID
 *     tags: [Ticket]
 *     description: Retrieve ticket details using its unique ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           description: The ticket ID
 *     responses:
 *       200:
 *         description: Ticket details retrieved successfully
 *       404:
 *         description: Ticket not found
 */
router.get("/:id", getTicketByTicketId);

/**
 * @swagger
 * /ntc/v1/tickets/reservation/{reservationId}:
 *   get:
 *     summary: Get tickets by reservation ID
 *     tags: [Ticket]
 *     description: Retrieve all tickets associated with a specific reservation ID.
 *     parameters:
 *       - in: path
 *         name: reservationId
 *         required: true
 *         schema:
 *           type: string
 *           description: The reservation ID
 *     responses:
 *       200:
 *         description: Tickets retrieved successfully
 *       404:
 *         description: No tickets found for the reservation
 */
router.get("/reservation/:reservationId", getTicketsByTicketReservationId);

module.exports = router;