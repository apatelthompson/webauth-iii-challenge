require("dotenv").config();

const server = require("./server.js");
const defaults = require("./config/default.js");

server.listen(defaults.port, () =>
  console.log(`\n** Running on port ${defaults.port} **\n`)
);
