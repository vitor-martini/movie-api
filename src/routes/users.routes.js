const { Router } = require("express");
const UserController = require("../controllers/UserController.js")
const AvatarController = require("../controllers/AvatarController.js")
const ensureAuthenticated = require("../middlewares/ensureAuthenticated.js")
const multer = require("multer")
const uploadConfig = require("../configs/upload.js")

const usersRoutes = Router();
const usersController = new UserController();
const avatarController = new AvatarController();
const upload = multer(uploadConfig.MULTER)

usersRoutes.post("/", usersController.create);
usersRoutes.put("/", ensureAuthenticated, usersController.update);
usersRoutes.patch("/avatar", ensureAuthenticated, upload.single("avatar"), avatarController.update)

module.exports = usersRoutes;