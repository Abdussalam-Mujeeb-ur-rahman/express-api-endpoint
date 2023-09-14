require("dotenv").config();
const mongoose = require("mongoose");

const dbconnection = () => {
  mongoose.connect(process.env.MONGO_URL);

  mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB");
  });

  mongoose.connection.on('error', () => {
    console.log("Error connecting to MongoDB");
  });

  mongoose.connection.on('end', () => {
    console.log("Disconnected from MongoDB");
  })
};

module.exports = {
  dbconnection
}