module.exports = (sequelize, DataTypes) => {
  const Character = sequelize.define("character", {
    name: {
      type: DataTypes.STRING
    },
    level: {
      type: DataTypes.INTEGER
    },
    age: {
      type: DataTypes.INTEGER
    },
    race: {
      type: DataTypes.STRING
    },
    background: {
      type: DataTypes.STRING
    },
    class: {
      type: DataTypes.STRING
    },
    sex: {
      type: DataTypes.STRING
    },
    height: {
      type: DataTypes.STRING
    },
    weight: {
      type: DataTypes.STRING
    }
  });

  return Character;
};