const Updates = require("../models/updatesModel");
const User = require("../models/userModels"); // Assuming you have a User model for non-admin users

const asyncHandler = require("express-async-handler");
const sendEmail = require("../utils/sendEmail"); // Assuming you have a function to send emails



//ADD the updates 
const addUpdate = asyncHandler(async (req, res, next) => {
  try {
    const { title, content } = req.body;
    const newUpdate = new Updates({
      title,
      content,
    });
    await newUpdate.save();
    // Find all non-admin users
    // const nonAdminUsers = await User.find({ is_admin: false });
    // // Prepare email message
    // const message = `!! Notification !!:\n\nTitle: ${title}\n\nFor more details, please visit our website.\n`;
    // // Send email to each non-admin user
    // nonAdminUsers.forEach(async (user) => {
    //   try {
    //     await sendEmail({
    //       email: user.email,
    //       subject: "New Update Added",
    //       message,
    //     });
    //   } catch (error) {
    //     console.error(`Error sending email to ${user.email}: ${error.message}`);
    //   }
    // });
    res
      .status(201)
      .json({ message: "Update added successfully", update: newUpdate });
      console.log("one update added sucessfully")
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
});


//Delete the Updates 
const deleteUpdate = asyncHandler(async (req, res, next) => {
  try {
    const { id } = req.params;
    const update = await Updates.findByIdAndDelete(id);
    if (!update) {
      return res.status(404).json({ error: "Update not found" });
    }
    res.json({ message: "Update deleted successfully" });
    console.log("one update deleted sucessfully")
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
});


// Get all updates
const getUpdates = asyncHandler(async (req, res, next) => {
    try {
      const updates = await Updates.find();
      if (!updates || updates.length === 0) {
        return res.status(404).json({ error: "No updates found" });
      }
      res.status(200).json({ success: true, updates });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server Error" });
    }
  });

const latestUpdate=asyncHandler(async(req,res,next)=>{
  try {
    const latestUpdate = await Updates.findOne({}, {}, { sort: { createdAt: -1 } });
    if (!latestUpdate) {
      return res.status(404).json({ error: "No updates found" });
    }
    res.json({ update: latestUpdate });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
});
module.exports = { addUpdate, deleteUpdate ,getUpdates,latestUpdate };
