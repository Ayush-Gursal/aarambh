const express = require("express");
const router = express.Router();
const {
  createImportantDate,
  updateImportantDate,
  deleteImportantDate,
  getAllImportantDates, // Corrected function name
} = require("../controllers/importantDateController");

router.get("/", getAllImportantDates); // Corrected function name

router.post("/", createImportantDate);

router.patch("/:id", updateImportantDate);

router.delete("/:id", deleteImportantDate);

module.exports = router;
