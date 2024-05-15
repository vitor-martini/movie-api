const AppError = require("../utils/AppError.js")
const knex = require("../database/knex/index.js")

class MovieUserTagController {
  async create(request, response) {
    const { movie_user_id, name } = request.body 

    const checkMovieExists = await knex("movies_users").where({ id: movie_user_id })
    if (checkMovieExists.length === 0) {
      throw new AppError("Movie not found in collection.")
    }

    await knex("movies_users_tags").insert({
      movie_user_id,
      name
    })

    response.status(201).json()
  }

  async delete(request, response) {
    const { id } = request.params

    const checkMovieExists = await knex("movies_users_tags").where({ id })
    if (checkMovieExists.length === 0) {
      throw new AppError("Movie not found in collection.")
    }

    await knex("movies_users_tags")
      .where({ id })
      .delete()

    response.status(200).json()
  }
}

module.exports = MovieUserTagController