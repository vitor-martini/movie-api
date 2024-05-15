const { Router } = require("express");
const CollectionController = require("../controllers/CollectionController.js");
const TagController = require("../controllers/TagController.js");

const collectionsRoutes = Router();
const collectionController = new CollectionController();
const tagController = new TagController();

collectionsRoutes.post("/", collectionController.create);
collectionsRoutes.put("/", collectionController.update);
collectionsRoutes.get("/", collectionController.index);
collectionsRoutes.delete("/:id", collectionController.delete);
collectionsRoutes.post("/addTag", tagController.create);
collectionsRoutes.delete("/removeTag/:id", tagController.delete);

module.exports = collectionsRoutes;