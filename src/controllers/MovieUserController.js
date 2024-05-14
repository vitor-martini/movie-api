const AppError = require("../utils/AppError.js")
const knex = require("../database/knex/index.js")

class MovieUserController {
  async create(request, response) {
    const { movie_id, user_id, rating } = request.body 

    const checkMovieExists = await knex("movies").where({ id: movie_id })
    if (checkMovieExists.length === 0) {
      throw new AppError("This movie does not exists.")
    }

    const checkUserExists = await knex("users").where({ id: user_id })
    if (checkUserExists.length === 0) {
      throw new AppError("This user does not exists.")
    }

    await knex("movies_users").insert({
      movie_id,
      user_id,
      rating
    })

    response.status(201).json({ title, description })
  }

  async update(request, response) {
    const { rating } = request.body
    const { id } = request.params

    const updatedMovie = await knex("movies_users").where({ id }).first()
    if (!updatedMovie){
      throw new AppError("Invalid movies_users ID.")
    }

    updatedMovie.rating = rating ?? updatedMovie.rating

    await knex("movies_users")
    .where({ id })
    .update({
      rating: updatedMovie.rating,
    })

    response.json()
  }

  async delete(request, response) {
    const { id } = request.params
    const movie = await knex("movies_users").where({ id }).first()
    if (!movie) {
      throw new AppError("Invalid movies_users ID.")
    }

    await knex("movies_users")
      .where({ id })
      .delete()

    response.json()
  }

  async index(request, response) {
    const { user_id } = request.query;

    if (!user_id) {
      throw new AppError("User id is required.")
    }

    let query = knex("movies")
      .distinct([
        "notes.id",
        "notes.title",
        "notes.description",
        "notes.user_id",
      ])
      .where("notes.user_id", user_id)
      .whereLike("notes.title", `%${title ?? ""}%`)
      .innerJoin("tags", "notes.id", "tags.note_id")
      .orderBy("notes.title");

    if (tags) {
      const tagsArray = tags.split(",").map(tag => tag.trim());
      query = query.whereIn("tags.name", tagsArray);
    }

    const notes = await query;
    const userTags = await knex("tags").where({ user_id });
    const notesWithTags = notes.map(note => {
      let tags = userTags.filter(tag => tag.note_id === note.id)
      return {
        ...note,
        tags
      }
    })

    return response.json(notesWithTags)
  }
}

module.exports = MovieUserController