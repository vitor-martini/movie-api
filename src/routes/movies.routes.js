const { Router } = require("express");
const MovieController = require("../controllers/MovieController.js");
const MovieUserController = require("../controllers/MovieUserController.js");
const MovieUserTagController = require("../controllers/MovieUserTagController.js");

const moviesRoutes = Router();
const moviesController = new MovieController();
const movieUserController = new MovieUserController();
const movieUserTagController = new MovieUserTagController();

moviesRoutes.post("/addToCollection", movieUserController.create);
moviesRoutes.put("/updateRate", movieUserController.update);
moviesRoutes.delete("/:id", movieUserController.delete);
moviesRoutes.get("/myCollection", movieUserController.index);
moviesRoutes.post("/addTag", movieUserTagController.create);
moviesRoutes.delete("/removeTag/:id", movieUserTagController.delete);

moviesRoutes.post("/", moviesController.create);
moviesRoutes.put("/:id", moviesController.update);
moviesRoutes.get("/:id", moviesController.show);
moviesRoutes.get("/", moviesController.index);

module.exports = moviesRoutes;