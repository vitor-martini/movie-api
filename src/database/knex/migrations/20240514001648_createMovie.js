
exports.up = knex => knex.schema.createTable("movies", table => {
  table.increments("id");
  table.text("title").notNullable();
  table.text("description").notNullable();
  table.timestamp("created_at").default(knex.fn.now());
  table.timestamp("updated_at").default(knex.fn.now());
  table.bool("active").default(true);
  table.integer("created_by").references("id").inTable("users").onDelete("CASCADE");
  table.integer("updated_by").references("id").inTable("users").onDelete("CASCADE");
})

exports.down = knex => knex.schema.dropTable("movies");
