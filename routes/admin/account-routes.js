const express = require("express");

const {
  getAllUsersAccount,
  getUserAccountDetails,
  deleteUserAccount,
  updateUserAccount,
} = require("../../controllers/admin/account-controller");

const router = express.Router();
router.get("/all-user-account", getAllUsersAccount);
router.get("/user-account-detail/:id", getUserAccountDetails);
router.put("/update-user-account/:id", updateUserAccount);
router.delete("/delete-user-account/:id", deleteUserAccount);

module.exports = router;
