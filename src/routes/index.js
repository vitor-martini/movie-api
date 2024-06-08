const { Router } = require("express")
const usersRoutes = require("./users.routes")
const moviesRoutes = require("./movies.routes")
const collectionsRoutes = require("./collections.routes")
const sessionsRoutes = require("./sessions.routes")

const routes = Router()
routes.use("/users", usersRoutes)
routes.use("/movies", moviesRoutes)
routes.use("/collections", collectionsRoutes)
routes.use("/sessions", sessionsRoutes)

module.exports = routes;