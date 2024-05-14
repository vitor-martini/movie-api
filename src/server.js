require("express-async-errors")
const express = require("express")
const routes = require("./routes")
const AppError = require("./utils/AppError.js")
const sqliteConnection = require("./database/sqlite")

const app = express()
const PORT = 3333;
app.use(express.json())
app.use(routes)
sqliteConnection()

app.use((error, request, response, next) => {
  if(error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: "error",
      message: error.message
    })
  }

  console.log(error)
  return response.status(500).json({
    status: "error",
    message: "Internal server error"
  })
})

app.listen(PORT, () => {
  console.log(`Listen on http://localhost:${PORT}`)
})