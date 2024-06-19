const authConfig = require("../configs/auth")
const { verify } = require("jsonwebtoken")
const AppError = require("../utils/AppError");

function ensureAuthenticated(request, response, next) {
  const authHeader = request.headers.authorization;

  if(!authHeader) {
    throw new AppError("JWT not informed", 401)
  }

  const [, token] = authHeader.split(" ")

  try {
    const { role, sub: userId } = verify(token, authConfig.jwt.secret)

    request.user = { 
      id: Number(userId),
      role
    }

    return next();
  } catch {
    throw new AppError("JWT not informed", 401)
  }
}
module.exports = ensureAuthenticated