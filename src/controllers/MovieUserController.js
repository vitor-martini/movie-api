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

    const checkMovieInCollection = await knex("movies_users")
      .where({ movie_id })
      .where({ user_id })
    if (checkMovieInCollection.length > 0) {
      throw new AppError("This movie is already in the collection.")
    }

    await knex("movies_users").insert({
      movie_id,
      user_id,
      rating
    })

    response.status(201).json()
  }

  async update(request, response) {
    const { id, rating } = request.body 

    const updatedMovie = await knex("movies_users")
      .where({ id })
      .first()

    if (!updatedMovie){
      throw new AppError("It was not found a row with this values.")
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
    const movieUser = await knex("movies_users").where({ id }).first()
    
    if (!movieUser) {
      throw new AppError("Invalid movies_users ID.")
    }

    await knex("movies_users")
      .where({ id })
      .delete()

    response.json()
  }

  async index(request, response) {
    const { user_id, title, tags } = request.body;

    if (!user_id) {
      throw new AppError("User id is required.")
    }

    const movies = await knex("movies_users")
      .distinct([
        "movies.id",
        "movies.title",
        "movies.description",
        "movies_users.rating",
      ])
      .where("movies_users.user_id", user_id)
      .where("movies.active", true)
      .whereLike("movies.title", `%${title ?? ""}%`)
      .innerJoin("movies", "movies.id", "movies_users.movie_id")
      .orderBy("movies.title");

    const moviesIds = movies.map(movie => movie.id)
    const moviesTags = await knex("movies_users_tags")
      .whereIn("movie_user_id", moviesIds)

    let collectionWithTags = movies.map(movie => {
      let movieTags = moviesTags.filter(tag => tag.movie_user_id === movie.id).map(tag => tag.name)
      return {
        ...movie,
        tags: movieTags
      }
    })
    
    if (tags) {
      collectionWithTags = collectionWithTags.filter(collection => {
        return collection.tags.some(tag => tags.includes(tag));
      });
    }

    return response.json(collectionWithTags)
  }
}

module.exports = MovieUserController