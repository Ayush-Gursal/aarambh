const ImportantLink = require("../models/dateModel");

// Controller to create a new important link
exports.createImportantDate = async (req, res) => {
  try {
    const { activity, startDate, endDate } = req.body;
    const newLink = await ImportantLink.create({
      activity,
      startDate,
      endDate,
    });
    res.status(201).json({
      success: true,
      data: newLink,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

// Controller to update an existing important link
exports.updateImportantDate = async (req, res) => {
  try {
    const { id } = req.params;
    const { activity, startDate, endDate } = req.body;
    const updatedLink = await ImportantLink.findByIdAndUpdate(
      id,
      { activity, startDate, endDate },
      { new: true }
    );
    if (!updatedLink) {
      return res.status(404).json({
        success: false,
        message: "Important link not found",
      });
    }
    res.status(200).json({
      success: true,
      data: updatedLink,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

// Controller to delete an important link
exports.deleteImportantDate = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedLink = await ImportantLink.findByIdAndDelete(id);
    if (!deletedLink) {
      return res.status(404).json({
        success: false,
        message: "Important link not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Important link deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};


exports.getAllImportantDates = async (req, res) => {
  try {
    const dates = await ImportantLink.find();
    res.status(200).json({
      success: true,
       dates:dates,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

