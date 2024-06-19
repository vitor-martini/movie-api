const { Router } = require("express");
const MovieController = require("../controllers/MovieController.js");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated.js");
const ensureAuthorized = require("../middlewares/ensureAuthorized.js");
const multer = require("multer");
const uploadConfig = require("../configs/upload.js");
const CoverController = require("../controllers/CoverController.js");

const moviesRoutes = Router();
const moviesController = new MovieController();
const coverController = new CoverController();
const upload = multer(uploadConfig.MULTER)

moviesRoutes.use(ensureAuthenticated);
moviesRoutes.post("/", ensureAuthorized(["admin"]), moviesController.create);
moviesRoutes.put("/:id", ensureAuthorized(["admin"]), moviesController.update);
moviesRoutes.get("/:id", moviesController.show); 
moviesRoutes.delete("/:id", ensureAuthorized(["admin"]), moviesController.delete);
moviesRoutes.get("/", moviesController.index);
moviesRoutes.patch("/cover/:id", ensureAuthorized(["admin"]), upload.single("cover"), coverController.update);

module.exports = moviesRoutes;
