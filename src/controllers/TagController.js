const AppError = require("../utils/AppError.js")
const knex = require("../database/knex/index.js")

class TagController {
  async create(request, response) {
    const { collection_id, name } = request.body 

    const checkCollectionExists = await knex("collections").where({ id: collection_id })
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

    const checkTagExists = await knex("tags").where({ id })
    if (checkTagExists.length === 0) {
      throw new AppError("Tag not found.")
    }

    await knex("tags")
      .where({ id })
      .delete()

    response.status(200).json()
  }
}

module.exports = TagController