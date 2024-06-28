
const express = require("express");

const router = express.Router();

const {
   getCollageByCode,getCollageByName,getCollageData,getCollages,deleteCollageData,addnewCollege
} = require("../controllers/collageController");

const { isAuthenticatedAdmin,isAuthenticatedUser } = require("../middleware/auth");

router.route("/getAllColleges").get(getCollages);
router.route("/getCollageData/:collegeId").get(getCollageData);
router.route("/getCollageDataByCode").get(getCollageByCode);
router.route("/getCollageDataByName").get(getCollageByName);

router.route("/addCollege").post(addnewCollege);
router.route("/deletecollage/:collegeId").delete(deleteCollageData);

// router.route("/updatecollage/:id").put(updateCollageData);

module.exports = router;
