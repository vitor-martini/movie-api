
exports.up = knex => knex.schema.createTable("collections", table => {
  table.increments("id");
  table.integer("movie_id").references("id").inTable("movies").onDelete("CASCADE");
  table.integer("user_id").references("id").inTable("users").onDelete("CASCADE");
  table.integer("rating").notNullable();
  table.unique(['movie_id', 'user_id']);
})

exports.down = knex => knex.schema.dropTable("collections");
