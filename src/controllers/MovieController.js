const AppError = require("../utils/AppError.js")
const knex = require("../database/knex/index.js")

class MovieController {
  async create(request, response) {
    const { title, description } = request.body 
    const user_id = request.user.id;

    const checkMovieExists = await knex("movies").where({ title })

    if (checkMovieExists.length > 0) {
      throw new AppError("This movie is already on the database.")
    }

    const movieId = await knex("movies").insert({
      title,
      description,
      created_by: user_id
    });

    response.status(201).json({ id: movieId[0] })
  }

  async update(request, response) {
    const { title, description, active } = request.body
    const { id } = request.params
    const user_id = request.user.id;

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
      updated_at: new Date().toISOString(),
      updated_by: user_id
    })

    response.json()
  }

  async show(request, response) {
    const { id } = request.params;
    const movie = await knex('movies as m')
      .leftJoin('collections as c', 'm.id', 'c.movie_id')
      .innerJoin('users as u', 'm.created_by', 'u.id')
      .select(
        'm.id',
        'm.title',
        'm.description',
        'm.cover',
        'm.updated_at',
        'u.name as created_by',
        'u.avatar',
        knex.raw('CAST(SUM(c.rating) AS FLOAT) / CAST(COUNT(c.id) AS FLOAT) as rating')
      )
      .where('m.id', id)
      .groupBy('m.id', 'm.title', 'm.description', 'm.cover')
      .first()

    return response.json(movie);
  }

  async index(request, response) {
    const { title } = request.query;

    const movies = await knex('movies as m')
      .leftJoin('collections as c', 'm.id', 'c.movie_id')
      .select(
        'm.id',
        'm.title',
        'm.description',
        'm.cover',
        knex.raw('CAST(SUM(c.rating) AS FLOAT) / CAST(COUNT(c.id) AS FLOAT) as rating')
      )
      .whereLike('m.title', `%${title ?? ''}%`)
      .groupBy('m.id', 'm.title', 'm.description', 'm.cover')
      .orderBy('m.title');

    return response.json(movies);
  }

  async delete(request, response) {
    const { id } = request.params
    const movie = await knex("movies").where({ id }).first();
    
    if(!movie) {
      throw new AppError("Movie not found")
    }

    await knex("movies").delete().where({ id })
    return response.json()
  }
}

module.exports = MovieController