
exports.up = knex => knex.schema.createTable("movies_users", table => {
  table.increments("id");
  table.integer("movie_id").references("id").inTable("movies").onDelete("CASCADE");
  table.integer("user_id").references("id").inTable("users").onDelete("CASCADE");
  table.integer("rating").notNullable();
})

exports.down = knex => knex.schema.dropTable("movies_users");
