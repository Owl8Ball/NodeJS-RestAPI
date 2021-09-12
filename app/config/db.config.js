module.exports = {
    HOST: "localhost",
    USER: "dleclerc",
    PASSWORD: "damien20121997",
    DB: "rpmt",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};