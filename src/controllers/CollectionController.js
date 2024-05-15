const AppError = require("../utils/AppError.js")
const knex = require("../database/knex/index.js")

class CollectionController {
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

    const checkCollection = await knex("collections")
      .where({ movie_id })
      .where({ user_id })
    if (checkCollection.length > 0) {
      throw new AppError("This movie is already in the collection.")
    }

    await knex("collections").insert({
      movie_id,
      user_id,
      rating
    })

    response.status(201).json()
  }

  async update(request, response) {
    const { id, rating } = request.body 

    const updatedCollection = await knex("collections")
      .where({ id })
      .first()

    if (!updatedCollection){
      throw new AppError("It was not found a row with this values.")
    }

    updatedCollection.rating = rating ?? updatedCollection.rating

    await knex("collections")
      .where({ id })
      .update({
        rating: updatedCollection.rating,
      })

    response.json()
  }

  async delete(request, response) {
    const { id } = request.params
    const collection = await knex("collections").where({ id }).first()
    
    if (!collection) {
      throw new AppError("Invalid collection ID.")
    }

    await knex("collections")
      .where({ id })
      .delete()

    response.json()
  }

  async index(request, response) {
    const { user_id, title, tags } = request.body;

    if (!user_id) {
      throw new AppError("User id is required.")
    }

    const movies = await knex("collections")
      .distinct([
        "movies.id",
        "movies.title",
        "movies.description",
        "collections.rating",
      ])
      .where("collections.user_id", user_id)
      .where("movies.active", true)
      .whereLike("movies.title", `%${title ?? ""}%`)
      .innerJoin("movies", "movies.id", "collections.movie_id")
      .orderBy("movies.title");

    const collectionsIds = movies.map(movie => movie.id)
    const moviesTags = await knex("tags")
      .whereIn("collection_id", collectionsIds)

    let collectionWithTags = movies.map(movie => {
      let movieTags = moviesTags.filter(tag => tag.collection_id === movie.id).map(tag => tag.name)
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

module.exports = CollectionController