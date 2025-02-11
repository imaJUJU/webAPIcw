const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        if(process.env.CONNECTION_STRING){
            const connect = await mongoose.connect(process.env.CONNECTION_STRING);
            console.log(`Connected to MongoDB ${connect.connection.host} ${connect.connection.name}`);
        }
    } catch (error) {
        console.log(error);
        process.exit(true);
    }
}

module.exports = dbConnection;