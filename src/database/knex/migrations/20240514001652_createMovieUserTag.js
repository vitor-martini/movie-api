
exports.up = knex => knex.schema.createTable("movies_users_tags", table => {
  table.increments("id");
  table.integer("movie_user_id").references("id").inTable("movies_users").onDelete("CASCADE");
  table.text("name").notNullable();
})

exports.down = knex => knex.schema.dropTable("movies_users_tags");
