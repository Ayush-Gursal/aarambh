const mongoose = require("mongoose");

const importantDateSchema = new mongoose.Schema({
  activity: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
});

const ImportantDate= mongoose.model("ImportantLink", importantDateSchema);

module.exports = ImportantDate;
