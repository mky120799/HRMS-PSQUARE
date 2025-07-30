const express = require("express");
const router = express.Router();
const upload = require("../middleware/uploadMiddleware");
const {
  getCandidates,
  createCandidate,
  deleteCandidate,
  updateCandidate,
} = require("../controllers/candidateController");

// GET all candidates
router.get("/", getCandidates);

// POST a new candidate with resume
router.post("/", upload.single("resume"), createCandidate);

// DELETE a candidate
router.delete("/:id", deleteCandidate);

// PATCH (partial update) a candidate
router.patch("/:id", updateCandidate);

// Upload resume separately if needed
router.post("/upload", upload.single("resume"), (req, res) => {
  res.status(200).json({ filePath: req.file.path });
});

module.exports = router;
