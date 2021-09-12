module.exports = (sequelize, Sequelize) => {
    const Stats = sequelize.define("Stats", {
        lvl: {
            type: Sequelize.INT,
            defaultValue: 1
        },
        xp: {
            type: Sequelize.INT,
            defaultValue: 0
        },
        profbonus: {
            type: Sequelize.INT,
            defaultValue: 2
        },
        hitpnt: {
            type: Sequelize.INT,
            allowNull: true
        },
        hitdie: {
            type: Sequelize.INT,
            defaultValue: 1,
            allowNull: false
        },
        str: {
            type: Sequelize.INT,
            defaultValue: 0,
            allowNull: false
        },
        dex: {
            type: Sequelize.INT,
            defaultValue: 0,
            allowNull: false
        },
        con: {
            type: Sequelize.INT,
            defaultValue: 0,
            allowNull: false
        },
        int: {
            type: Sequelize.INT,
            defaultValue: 0,
            allowNull: false
        },
        wis: {
            type: Sequelize.INT,
            defaultValue: 0,
            allowNull: false
        },
        cha: {
            type: Sequelize.INT,
            defaultValue: 0,
            allowNull: false
        }
    });

    Stats.associate = module => {
        Stats.BelongsTo(models.Character, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Stats;
};