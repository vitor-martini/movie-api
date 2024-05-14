
exports.up = knex => knex.schema.createTable("movies", table => {
  table.increments("id");
  table.text("title").notNullable();
  table.text("description").notNullable();
  table.timestamp("created_at").default(knex.fn.now());
  table.timestamp("updated_at").default(knex.fn.now());
  table.bool("active").default(true);
})

exports.down = knex => knex.schema.dropTable("movies");
