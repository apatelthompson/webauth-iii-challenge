exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        { username: "Joe Smith", password: "guest", department: "Math" },
        { username: "Mary Luao", password: "tree", department: "Science" },
        { username: "Tom Ford", password: "ghost", department: "English" }
      ]);
    });
};
