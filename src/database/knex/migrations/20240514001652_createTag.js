
exports.up = knex => knex.schema.createTable("tags", table => {
  table.increments("id");
  table.integer("collection_id").references("id").inTable("collections").onDelete("CASCADE");
  table.text("name").notNullable();
})

exports.down = knex => knex.schema.dropTable("tags");
