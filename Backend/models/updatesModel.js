const mongoose = require("mongoose");


const updateSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please enter the title of the update"],
        maxLength: [100, "Title cannot exceed 100 characters"]
    },
    content: {
        type: String,
        required: [true, "Please enter the content of the update"]
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Updates = mongoose.model("Updates", updateSchema);

module.exports = Updates;
