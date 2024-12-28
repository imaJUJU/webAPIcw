const express = require("express");
const RouteConfiguration = require("./src/configuration/route-configuration");
const dotenv = require("dotenv").config();
const dbConnect = require("./src/configuration/db-configuration");

dbConnect();

const app = express();

app.use(express.json());

getRoutes(app);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Swagger API Documentation is available at ${process.env.NODE_ENV === 'development' ? 'http://localhost':'https://ntcseatreservation.onrender.com'}:${process.env.NODE_ENV === 'development' ? PORT : ''}/api-docs`);
});

function getRoutes(app){
    let routeConfiguration = new RouteConfiguration;
    routeConfiguration.configRoutes(app);
}

