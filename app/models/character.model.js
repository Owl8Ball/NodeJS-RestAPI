module.exports = (sequelize, Sequelize) => {
    const Character = sequelize.define("Character", {
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        age: {
            type: Sequelize.INT,
            allowNull: false
        },
        align: {
            type: Sequelize.STRING,
            allowNull: true
        },
        height: {
            type: Sequelize.STRING,
            allowNull: true
        },
        weight: {
            type: Sequelize.STRING,
            allowNull: true
        },
        background: {
            type: Sequelize.STRING,
            defaultValue: 'N/A'
        },
        fnt: {
            type: Sequelize.TEXT('long'),
            allowNull: true
        }
    });

    Character.associate = module => {
        Character.hasOne(models.Stats, {
            onDelete: "cascade"
        });
        Character.hasOne(models.Race, {});
        Character.hasMany(models.SubRace, {});
        Character.hasMany(models.Language, {});
        Character.BelongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Character;
};