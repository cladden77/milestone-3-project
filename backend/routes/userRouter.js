const router = require("express").Router();
const users = require("../controllers/users");
const auth = require("../middleware/auth");

// Register User
router.post("/register", users.registerUser);
// Login User
router.post("/login", users.loginUser);

// Token Verification
router.get("/verify", users.verifiedToken);

module.exports = router;