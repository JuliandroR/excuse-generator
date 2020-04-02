exports.up = function(knex) {
    return knex.schema.createTable("contributions", table => {
      table.increments();
      table.string("excuse").notNullable();
      table.string("author").notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable("contributions");
  };
  