const AppError = require("../utils/AppError.js")
const knex = require("../database/knex")
const bcrypt = require("bcryptjs")

class UserController {
  async create(request, response) {
    const { name, email, password } = request.body 

    const checkUsersExists = await knex("users").where({ email })

    if(checkUsersExists.length > 0) {
      throw new AppError("This e-mail is already on use.")
    }

    const salt = await bcrypt.genSalt(8);
    const hashedPassword = await bcrypt.hash(password.toString(), salt);
    await knex("users").insert({
      name,
      email,
      password: hashedPassword
    })

    response.status(201).json({ name, email })
  }

  async update(request, response) {
    const { name, email, old_password, new_password } = request.body
    const { id } = request.user

    const updatedUser = await knex("users").where({ id }).first()
    if (!updatedUser){
      throw new AppError("Invalid user ID.")
    }

    if(email) {
      const checkEmailInUse = await knex("users")
        .where({ email })
        .andWhere("id", "!=", id)
  
      if(checkEmailInUse.length > 0) {
        throw new AppError("This e-mail belongs to other user.")
      }
    }

    if((new_password && !old_password) || (!new_password && old_password)){
      throw new AppError("In order to reset the password you must informe the old and new passwords")
    } 

    if (new_password && old_password ){
      const checkOldPassword = await bcrypt.compare(old_password.toString(), updatedUser.password)

      if (!checkOldPassword) {
        throw new AppError("The old password is invalid")
      }

      const salt = await bcrypt.genSalt(8)
      const hashedPassword = await bcrypt.hash(new_password.toString(), salt)
      updatedUser.password = hashedPassword
    }

    updatedUser.name = name ?? updatedUser.name
    updatedUser.email = email ?? updatedUser.email

    await knex("users")
    .where({ id })
    .update({
      name: updatedUser.name, 
      email: updatedUser.email,
      password: updatedUser.password,
      updated_at: new Date()
    })

    response.json()
  }
}

module.exports = UserController