const AppError = require("../utils/AppError.js")
const knex = require("../database/knex/index.js")

class MovieController {
  async create(request, response) {
    const { title, description } = request.body 

    const checkMovieExists = await knex("movies").where({ title })

    if (checkMovieExists.length > 0) {
      throw new AppError("This movie is already on the database.")
    }

    await knex("movies").insert({
      title,
      description,
    })

    response.status(201).json({ title, description })
  }

  async update(request, response) {
    const { title, description, active } = request.body
    const { id } = request.params

    const updatedMovie = await knex("movies").where({ id }).first()
    if (!updatedMovie){
      throw new AppError("Invalid movie ID.")
    }

    updatedMovie.title = title ?? updatedMovie.title
    updatedMovie.description = description ?? updatedMovie.description
    updatedMovie.active = active ?? updatedMovie.active

    await knex("movies")
    .where({ id })
    .update({
      title: updatedMovie.title, 
      description: updatedMovie.description,
      active: updatedMovie.active,
      updated_at: new Date().toISOString()
    })

    response.json()
  }

  async show(request, response) {
    const { id } = request.params;
    const movie = await knex("movies").where({ id }).first();

    return response.json(movie);
  }

  async index(request, response) {
    const { title } = request.body;

    console.log(title)
    const movies = await knex("movies")
      .whereLike("movies.title", `%${title ?? ""}%`)
      .orderBy("title");

    return response.json(movies)
  }
}

module.exports = MovieController