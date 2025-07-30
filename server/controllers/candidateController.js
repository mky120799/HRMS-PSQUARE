const Candidate = require("../models/Candidate");

// GET all candidates
exports.getCandidates = async (req, res) => {
  try {
    const candidates = await Candidate.find();
    res.json(candidates);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// POST a new candidate
exports.createCandidate = async (req, res) => {
  try {
    const { name, email, phone, position, status, experience } = req.body;

    const resumeUrl = req.file ? req.file.path : null;

    const candidate = new Candidate({
      name,
      email,
      phone,
      position,
      status,
      experience,
      resume: resumeUrl, // Assuming resume is a field in your Candidate model
    });

    await candidate.save();
    res.status(201).json(candidate);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error creating candidate" });
  }
};

// DELETE a candidate
exports.deleteCandidate = async (req, res) => {
  try {
    const deleted = await Candidate.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Not found" });
    res.json({ message: "Candidate deleted" });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// UPDATE a candidate
exports.updateCandidate = async (req, res) => {
  try {
    const updatedCandidate = await Candidate.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedCandidate) {
      return res.status(404).json({ error: "Candidate not found" });
    }
    res.json(updatedCandidate);
  } catch (err) {
    res.status(400).json({ error: "Invalid update data" });
  }
};
