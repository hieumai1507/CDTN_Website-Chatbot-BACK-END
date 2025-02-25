const User = require("../../models/User");
const Address = require("../../models/Address");

const getAllUsersAccount = async (req, res) => {
  try {
    const AllUsersAccount = await User.find({}, "-password");
    res.json({ success: true, data: AllUsersAccount });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Some error occurred!",
    });
  }
};

// detail user account
const getUserAccountDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id, "-password");
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found!",
      });
    }
    const addressList = await Address.find({ userId: id });
    res.json({
      success: true,
      data: {
        user: user,
        addresses: addressList,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Some error occurred!",
    });
  }
};
const deleteUserAccount = async (req, res) => {
  try {
    const { id } = req.params;
    const userAccountToDelete = await User.findById(id);
    if (!userAccountToDelete) {
      return res.status(404).json({
        success: false,
        message: "User not found!",
      });
    }
    await User.findByIdAndDelete(id);
    res.json({
      success: true,
      message: "User deleted successfully!",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Some error occurred!",
    });
  }
};
const updateUserAccount = async (req, res) => {
  try {
    const { id } = req.params;
    const { role, typeAdmin } = req.body;
    const userAccountToUpdate = await User.findById(id);
    if (!userAccountToUpdate) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    if (!role && !typeAdmin) {
      return res.status(400).json({
        success: false,
        message: "No update data provided",
      });
    }

    if (role) {
      userAccountToUpdate.role = role;
      if (role === "admin") {
        if (!typeAdmin) {
          return res.status(400).json({
            success: false,
            message: "TypeAdmin is required when role is admin!",
          });
        }
        if (!["staff", "manager"].includes(typeAdmin)) {
          return res.status(400).json({
            success: false,
            message: "Type Admin must be staff or manager!",
          });
        }
      }
      if (role === "user") {
        userAccountToUpdate.typeAdmin = "none";
      }
    }
    if (typeAdmin) {
      userAccountToUpdate.typeAdmin = typeAdmin;
    }
    await userAccountToUpdate.save();
    res.json({ success: true, message: "User updated successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Some error occurred!",
    });
  }
};
module.exports = {
  getAllUsersAccount,
  getUserAccountDetails,
  deleteUserAccount,
  updateUserAccount,
};
