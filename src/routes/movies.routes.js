const { Router } = require("express");
const MovieController = require("../controllers/MovieController.js");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated.js");

const moviesRoutes = Router();
const moviesController = new MovieController();

moviesRoutes.use(ensureAuthenticated)
moviesRoutes.post("/", moviesController.create);
moviesRoutes.put("/:id", moviesController.update);
moviesRoutes.get("/:id", moviesController.show);
moviesRoutes.get("/", moviesController.index);

module.exports = moviesRoutes;