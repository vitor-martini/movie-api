const knex = require("../database/knex")
const DiskStorage = require("../providers/DiskStorage")
const AppError = require("../utils/AppError")

class CoverController {
  async update(request, response) {
    const userId = request.user.id;
    const { id: movieId } = request.params;
    const coverFileName = request.file.filename;
    const diskStorage = new DiskStorage();

    const movie = await knex("movies").where({ id: movieId }).first()

    if (!movie) {
      throw new AppError("Movie not found");
    }

    if (movie.cover) {
      await diskStorage.deleteFile(movie.cover)
    }

    const filename = await diskStorage.saveFile(coverFileName)
    movie.cover = filename
    movie.updated_by = userId

    await knex("movies")
      .update(movie)
      .where({ id: movieId })

    return response.json(movie);
  }
}

module.exports = CoverController