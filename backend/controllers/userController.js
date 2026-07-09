const User = require("../models/User");

// ==============================
// Add User
// ==============================

const addUser = async (req, res) => {
    try {

        let { name, email, phone } = req.body;

        // Normalize Input
        name = name.trim();
        email = email.trim().toLowerCase();
        phone = phone.trim();

        // Check existing users
        const users = await User.find();

        for (const user of users) {

            // Exact Duplicate
            if (
                user.name.toLowerCase() === name.toLowerCase() &&
                user.email === email &&
                user.phone === phone
            ) {
                return res.status(409).json({
                    success: false,
                    status: "Duplicate",
                    confidence: 100,
                    message: "Duplicate record detected. Record was not added."
                });
            }
        }

        // Default values
        let status = "Unique";
        let confidence = 100;

        // False Positive Detection
        for (const user of users) {

            if (
                user.email === email ||
                user.phone === phone
            ) {
                status = "False Positive";
                confidence = 90;
                break;
            }

        }

        // Save User
        const newUser = await User.create({
            name,
            email,
            phone,
            status,
            confidence
        });

        res.status(201).json({
            success: true,
            message: "User added successfully.",
            data: newUser
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

// ==============================
// Get All Users
// ==============================

const getUsers = async (req, res) => {

    try {

        const users = await User.find().sort({
            createdAt: -1
        });

        res.status(200).json({
            success: true,
            total: users.length,
            data: users
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// ==============================
// Delete User
// ==============================

const deleteUser = async (req, res) => {

    try {

        const user = await User.findById(req.params.id);

        if (!user) {

            return res.status(404).json({
                success: false,
                message: "User not found."
            });

        }

        await User.findByIdAndDelete(req.params.id);

        res.status(200).json({
            success: true,
            message: "User deleted successfully."
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// ==============================
// Dashboard Statistics
// ==============================

const getStats = async (req, res) => {

    try {

        const users = await User.find();

        const total = users.length;

        const unique = users.filter(
            user => user.status === "Unique"
        ).length;

        const duplicate = users.filter(
            user => user.status === "Duplicate"
        ).length;

        const falsePositive = users.filter(
            user => user.status === "False Positive"
        ).length;

        res.status(200).json({
            success: true,
            total,
            unique,
            duplicate,
            falsePositive
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

module.exports = {
    addUser,
    getUsers,
    deleteUser,
    getStats
};