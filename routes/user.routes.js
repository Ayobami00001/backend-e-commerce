const express = require("express");
const router = express.Router();

const {register, login, getUserByEmail } = require("../controller/user.controller");





router.get('/user/:mail', getUserByEmail);
router.post('/register', register)
router.post('/login', login)



module.exports = router