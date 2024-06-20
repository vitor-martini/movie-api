const knex = require("../database/knex")
const AppError = require("../utils/AppError")
const { compare } = require("bcryptjs")
const authConfig = require("../configs/auth")
const { sign } = require("jsonwebtoken")

class SessionsController {
  async create(request, response) {
    const { email, password } = request.body;

    const user = await knex("users").where({ email }).first()

    if (!user) {
      throw new AppError("Invalid email or password")
    }

    const isPasswordCorrect = await compare(password.toString(), user.password);

    if (!isPasswordCorrect) {
      throw new AppError("Invalid user or password")
    }

    const { secret, expiresIn } = authConfig.jwt
    const token = sign({ role: user.role }, secret, {
      subject: String(user.id),
      expiresIn
    })

    response.cookie("token", token, {
      httpOnly: true,
      sameSite: "none",
      secure: true,
      maxAge: 15 * 60 * 1000,
    })

    delete user.password

    return response.json({ user })
  }

  async delete(request, response) {
    response.clearCookie("token", {
      httpOnly: true,
      sameSite: "none",
      secure: true,
    })

    return response.status(200).json();
  }
}

module.exports = SessionsController;