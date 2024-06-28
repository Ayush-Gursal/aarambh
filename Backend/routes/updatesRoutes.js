const express = require("express");

const router = express.Router();

const {
    addUpdate,
    deleteUpdate,
    getUpdates,
    latestUpdate
  } = require("../controllers/updatesController");
  
  const { isAuthenticatedAdmin } = require("../middleware/auth");


// Updates Routes

router.route("/addupdates").post(addUpdate);
router.route("/deleteupdate/:id").delete(deleteUpdate);
router.route("/getallupdates").get(getUpdates);
router.route("/getlatestupdate").get(latestUpdate);
module.exports = router;