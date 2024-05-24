"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize({
    username: 'postgres',
    host: 'localhost',
    database: 'testdatabase',
    password: 'root',
    port: 5432,
    dialect: 'postgres'
});
sequelize.authenticate()
    .then(() => {
    console.log('Connection established successfully.');
}).catch((error) => {
    console.log('Unable to connect to the database: ', error);
});
sequelize.sync()
    .then(() => {
    console.log('All Models synchronized with Db.');
}).catch((error) => {
    console.log('Unable to synchronize models with Db: ', error);
});
exports.default = sequelize;
//# sourceMappingURL=pgConfig.js.map