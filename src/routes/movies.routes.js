const { Router } = require("express");
const MovieController = require("../controllers/MovieController.js");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated.js");
const ensureAdmin = require("../middlewares/ensureAdmin.js");
const multer = require("multer");
const uploadConfig = require("../configs/upload.js");
const CoverController = require("../controllers/CoverController.js");

const moviesRoutes = Router();
const moviesController = new MovieController();
const coverController = new CoverController();
const upload = multer(uploadConfig.MULTER)

moviesRoutes.use(ensureAuthenticated)
moviesRoutes.post("/", ensureAuthenticated, ensureAdmin, moviesController.create);
moviesRoutes.put("/:id", ensureAuthenticated, ensureAdmin, moviesController.update);
moviesRoutes.get("/:id", moviesController.show); 
moviesRoutes.delete("/:id", ensureAuthenticated, ensureAdmin, moviesController.delete);
moviesRoutes.get("/", moviesController.index);
moviesRoutes.patch("/cover/:id", ensureAuthenticated, ensureAdmin, upload.single("cover"), coverController.update)

module.exports = moviesRoutes;