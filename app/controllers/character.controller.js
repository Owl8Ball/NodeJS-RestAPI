const db = require("../models");
const Character = db.characters;

exports.createCharacter = (userId, character) => {
  return Character.create({
    name: character.name,
    level: character.level,
    age: character.age,
    race: character.race,
    background: character.background,
    class: character.class,
    sex: character.sex,
    height: character.height,
    weight: character.weight,
    userId: userId,
  })
    .then((character) => {
      console.log(">> Created character: " + JSON.stringify(character, null, 4));
      return character;
    })
    .catch((err) => {
      console.log(">> Error while creating character: ", err);
    });
};

exports.findCharacterById = (id) => {
  return Character.findByPk(id, { include: ["user"] })
    .then((comment) => {
      return comment;
    })
    .catch((err) => {
      console.log(">> Error while finding comment: ", err);
    });
};