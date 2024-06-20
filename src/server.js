require("express-async-errors")
const express = require("express")
const routes = require("./routes")
const AppError = require("./utils/AppError.js")
const sqliteConnection = require("./database/sqlite")
const cookieParser = require("cookie-parser")
const uploadConfig = require("./configs/upload.js")
const cors = require("cors")

const app = express()
const PORT = 3333;

app.use(cors({
  origin: ["http://localhost:5173", "http://127.0.0.1:5173"], 
  credentials: true 
}));

app.use(express.json())
app.use(cookieParser()) 
app.use(routes)
app.use("/files", express.static(uploadConfig.UPLOADS_FOLDER))
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