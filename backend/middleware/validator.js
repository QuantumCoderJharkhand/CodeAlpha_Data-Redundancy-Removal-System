const { body, validationResult } = require("express-validator");

// Validation Rules
const validateUser = [
    body("name")
        .notEmpty()
        .withMessage("Name is required"),

    body("email")
        .isEmail()
        .withMessage("Enter a valid email"),

    body("phone")
        .isLength({ min: 10, max: 10 })
        .withMessage("Phone number must be exactly 10 digits"),

    // Check validation result
    (req, res, next) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array()
            });
        }

        next();
    }
];

module.exports = validateUser;