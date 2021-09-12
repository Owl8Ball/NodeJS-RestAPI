module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
      username: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      role: {
        type: Sequelize.ENUM,
        values: ['User', 'Staff', 'Admin'],
        defaultValue: "User"
      },
      status: {
        type: Sequelize.ENUM,
        values: ['Active', 'Innactive', 'Banned'],
        defaultValue: "Active"
      }
    });

    User.hasMany(models.Character, {
      onDelete: "cascade"
    });
    
    return User;
};