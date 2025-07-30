const mongoose = require("mongoose");

const candidateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: String,
  phone: String,
  position: String,
  status: {
    type: String,
    enum: ["New", "Selected", "Rejected"],
    default: "New",
  },
  experience: Number,

  //Adds resume field
  resume: {
    type: String, // This will store the Cloudinary URL
  },
});

const Candidate = mongoose.model("Candidate", candidateSchema);

module.exports = Candidate;
