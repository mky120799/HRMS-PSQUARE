const mongoose = require("mongoose");
require('dotenv').config();
const connectDB = async () => {
  try {
    console.log("👉👉",process.env.MONGO_URI)
    await mongoose.connect(process.env.MONGO_URI, {
 
});
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection failed", err);
    process.exit(1);
  }
};

module.exports = connectDB;
