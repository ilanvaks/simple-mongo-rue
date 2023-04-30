const User = require("../models/user")

exports.getUsers = (req, res) => {
  User.find()
  .then((users) => {
    res.json({
      message: "Users retrieved successfully",
      data: users,
    })
  })
  .catch((err) => res.status(400).json("Error: " + err))
}

exports.createUser = (req, res) => {
  const username = req.body.username
  const password = req.body.password
  const newUser = new User({username, password})
  
  newUser 
  .save() 
  .then( () => {
    res.json("User added!")
  })
  .catch((err) => res.status(400).json("Error: " + err))
}