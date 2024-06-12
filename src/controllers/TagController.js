const AppError = require("../utils/AppError.js")
const knex = require("../database/knex/index.js")

class TagController {
  async create(request, response) {
    const { collection_id, name } = request.body 
    const user_id = request.user.id

    const checkCollectionExists = await knex("collections").where({ 
      id: collection_id,
      user_id
    })
    
    if (checkCollectionExists.length === 0) {
      throw new AppError("Movie not found in collection.")
    }

    await knex("tags").insert({
      collection_id,
      name
    })

    response.status(201).json()
  }

  async delete(request, response) {
    const { id } = request.params
    const user_id = request.user.id

    const tag = await knex("tags")
      .where("collections.user_id", user_id)
      .where("tags.id", id)
      .innerJoin("collections", "collections.id", "tags.collection_id")
      .first()

      if (!tag) {
      throw new AppError("Tag not found.")
    }

    await knex("tags")
      .where({ id })
      .delete()

    response.status(200).json()
  }

  async index(request, response) {
    const { id } = request.user;
    const tags = await knex("tags as t")
      .distinct("t.name")
      .innerJoin("collections as c", "c.id", "t.collection_id")
      .where("c.user_id", id)
      .orderBy("t.name")

    response.status(200).json(tags)
  }
}

module.exports = TagController