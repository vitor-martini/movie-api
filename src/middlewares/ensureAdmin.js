const knex = require("../database/knex/index.js")
const AppError = require("../utils/AppError");

async function ensureAdmin(request, response, next) {
  const { id: userId } = request.user

  const user = await knex("users").where({ id: userId }).first()
  if(user.admin != 1) {
    throw new AppError("User is not an admin")
  }

  return next()
}

module.exports = ensureAdmin;