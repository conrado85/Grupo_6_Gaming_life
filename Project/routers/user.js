//Dependencias

const express = require("express");
const { check } = require("express-validator");
const router = express.Router();
const path = require("path");
const multer = require("multer");

// Middlewares y controllers

const authMiddleware = require("../middlewares/authMiddleware");
const userController = require("../controllers/userController");
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

const upload = multer({ storage: storage });

//Sistema de ruteo, metodos y middlewares

router.get("/login", redirectIfLogged, userController.login);
router.post("/login", loginValidator, userController.userLogin);

router.get("/registro", redirectIfLogged, userController.register);
router.post("/registro", upload.single("img"), registerValidator, userController.userReg);

router.get("/profile", authMiddleware, userController.profile);

module.exports = router;