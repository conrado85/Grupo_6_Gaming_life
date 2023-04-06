//Dependencias

const express = require("express");
const { check } = require("express-validator");
const router = express.Router();
const path = require("path");
const multer = require("multer");

// Controller

const userController = require("../controllers/userController");

// Middlewares

const authMiddleware = require("../middlewares/authMiddleware");
const redirectIfLogged = require("../middlewares/redirectIfLogged");
const registerValidator = require("../middlewares/registerValidator");
const loginValidator = require("../middlewares/loginValidator");

//Logica Multer 

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const folder = path.join(__dirname, "../public/images/userImg");
    cb(null, folder);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage });

//Sistema de ruteo, metodos y middlewares

router.get("/login", redirectIfLogged, userController.login);
router.post("/login", loginValidator, userController.userLogin);

router.get("/register", redirectIfLogged, userController.register);
router.post("/register", upload.single("img"), registerValidator, userController.userReg);

router.get("/profile", authMiddleware, userController.profile);

router.get("/logout", userController.logout);
router.post("/logout", userController.logout);

module.exports = router;