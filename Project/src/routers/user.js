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
const sessionMiddleware = require("../middlewares/sessionMiddleware");

//Logica Multer 

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      const folder = path.join(__dirname, "../../public/images/userImg");
      cb(null, folder);
  },
  filename: (req, file, cb) => {
      const fileName = `${Date.now()}-user${path.extname(file.originalname)}`;
      cb(null, fileName);
  }
});

const upload = multer({
  storage
});

//Sistema de ruteo, metodos y middlewares

router.get("/login", redirectIfLogged, sessionMiddleware, userController.login);
router.post("/login", loginValidator, sessionMiddleware, userController.userLogin);

router.get("/register", redirectIfLogged,sessionMiddleware, userController.register);
router.post("/register", upload.single("img"), registerValidator, sessionMiddleware, userController.userReg);

router.get("/profile", authMiddleware, sessionMiddleware, userController.profile);

router.get("/logout", userController.logout);
router.post("/logout", userController.logout);

module.exports = router;