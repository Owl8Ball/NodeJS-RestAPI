module.exports = (sequelize, Sequelize) => {
    const Character = sequelize.define("Character", {
        Name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        Age: {
            type: Sequelize.INT,
            allowNull: false
        },
        Sex: {
            type: Sequelize.STRING,
            allowNull: false
        },
        Alignment: {
            type: Sequelize.ENUM,
            values: [
                'Lawful Good', 'Neutral Good', 'Chaotic Good',
                'Lawful Neutral', 'Neutral', 'Chaotic Neutral',
                'Lawful Evil', 'Neutral Evil', 'Chaotic Evil'
            ],
            allowNull: true
        },
        Height: {
            type: Sequelize.STRING,
            allowNull: true
        },
        Weight: {
            type: Sequelize.STRING,
            allowNull: true
        },
        Background: {
            type: Sequelize.STRING,
            defaultValue: 'N/A'
        },
        FeaturesAndTraits: {
            type: Sequelize.TEXT('long'),
            defaultValue: 'N/A'
        }
    });

    Character.associate = module => {
        Character.hasOne(models.Stats, {
            onDelete: "cascade"
        });
        Character.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Character;
};