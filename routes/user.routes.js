const express = require("express");
const router = express.Router();
const multer = require("multer");

const {register, login, getUserByEmail , uploadProfileImage } = require("../controller/user.controller");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  }
});
const upload = multer({ storage: storage });


router.post('/user/upload/:mail', upload.single('profileImage'), uploadProfileImage);
router.get('/user/:mail', getUserByEmail);
router.post('/register', register)
router.post('/login', login)



module.exports = router