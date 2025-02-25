exports.up = function(knex) {
  return knex.schema.createTable("users", tbl => {
    tbl.increments();
    tbl
      .text("username", 128)
      .unique()
      .notNullable();
    tbl.string("password", 128).notNullable();
    tbl.string("department", 128).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("users");
};
