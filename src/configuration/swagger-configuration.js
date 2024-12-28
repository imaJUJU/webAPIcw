const swaggerJsDoc = require('swagger-jsdoc');
const path = require('path');

const isLocal = process.env.NODE_ENV !== 'production'; // Detect environment
const PORT = process.env.PORT || 8080;

// Swagger configuration
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Bus Seat Reservation System of NTC API Documentation',
            version: '1.0.0',
            description: 'API documentation for Bus Reservation System',
        },
        servers: isLocal
            ? [
                  {
                      url: `http://localhost:${PORT}`, // Localhost server
                  },
              ]
            : [
                  {
                      url: 'https://ntcseatresapp-1234.herokuapp.com/', // Hosted server
                  },
              ],
        components: {
            securitySchemes: {
                BearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                },
            },
        },
        security: [
            {
                BearerAuth: [],
            },
        ],
    },
    apis: [path.join(__dirname, '../routes/*.js')],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = swaggerDocs;