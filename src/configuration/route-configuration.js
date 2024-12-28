const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./swagger-configuration');

const authRoutes = require("../routes/authRoute");
const commuterRoutes = require("../routes/commuterRoute");
const busOperatorRoutes = require("../routes/busOperatorRoute");
const routeRoutes = require("../routes/routeRoute");
const locationRoutes = require("../routes/locationRoute");
const routeAvailabilityRoutes = require('../routes/routeAvailabilityRoute');
const busRoutes = require('../routes/busRoute');
const permitRoutes = require('../routes/permitRoute');
const timeTableRoutes = require('../routes/timeTableRoute');
const seatRoutes = require('../routes/seatRoute');
const reservationRoutes = require('../routes/reservationRoute');
const paymentRoutes = require('../routes/paymentRoute');
const ticketRoutes = require('../routes/ticketRoute');

class RouteConfiguration{
    configRoutes(app){
        // Swagger documentation route
        app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
        
        // Routes
        app.use("/ntc/v1/auth", authRoutes);
        app.use("/ntc/v1/commuter", commuterRoutes);
        app.use("/ntc/v1/bus-operators", busOperatorRoutes);
        app.use("/ntc/v1/routes", routeRoutes);
        app.use("/ntc/v1/locations", locationRoutes);
        app.use("/ntc/v1/routes-availability", routeAvailabilityRoutes);
        app.use("/ntc/v1/buses", busRoutes);
        app.use("/ntc/v1/permits", permitRoutes);
        app.use("/ntc/v1/time-table", timeTableRoutes);
        app.use("/ntc/v1/seat", seatRoutes);
        app.use("/ntc/v1/reservations", reservationRoutes);
        app.use("/ntc/v1/payment", paymentRoutes);
        app.use("/ntc/v1/tickets", ticketRoutes);
    }
}

module.exports = RouteConfiguration;
