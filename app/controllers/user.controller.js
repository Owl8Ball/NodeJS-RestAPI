const db = require("../models");
const User = db.users;

exports.createUser = (user) => {
  return User.create({
    username: user.username,
    password: user.password,
  })
    .then((user) => {
      console.log(">> Created user: " + JSON.stringify(user, null, 4));
      return user;
    })
    .catch((err) => {
      console.log(">> Error while creating user: ", err);
    });
};

exports.findUserById = (userId) => {
  return User.findByPk(userId, { include: ["characters"] })
    .then((user) => {
      return user;
    })
    .catch((err) => {
      console.log(">> Error while finding user: ", err);
    });
};

exports.findAll = () => {
  return User.findAll({
    include: ["characters"],
  }).then((users) => {
    return users;
  });
};