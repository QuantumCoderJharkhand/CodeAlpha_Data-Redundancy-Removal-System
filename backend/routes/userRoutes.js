const express = require("express");

const router = express.Router();

const {
    addUser,
    getUsers,
    deleteUser,
    getStats
} = require("../controllers/userController");

const validateUser = require("../middleware/validator");

// Statistics
router.get("/stats", getStats);

// Get All Users
router.get("/", getUsers);

// Add User
router.post("/", validateUser, addUser);

// Delete User
router.delete("/:id", deleteUser);

module.exports = router;