const db = require("../data/dbConfig.js");

module.exports = {
  add,
  find,
  findBy,
  findById
};

function find(department) {
  return db("users")
    .select("id", "username", "department")
    .where("department", department);
}

function findBy(filter) {
  return db("users").where(filter);
}

function add(user) {
  return db("users")
    .insert(user, "id")
    .then(ids => {
      const [id] = ids;
      return findById(id);
    });
}

function findById(id) {
  return db("users")
    .where({ id })
    .first();
}
