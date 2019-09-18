const router = require("express").Router();

const Users = require("./userModel.js");
const restricted = require("../auth/restricted-middleware.js");

router.get("/", restricted, (req, res) => {
  Users.find(req.user.department)
    .then(users => {
      res.json({ users, loggedInUser: req.user.username });
    })
    .catch(err => res.send(err));
});

module.exports = router;
