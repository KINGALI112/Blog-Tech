const Sequelize = require("sequelize");

require("dotenv").config();

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
  // sequelize = new Sequelize("tech_blog", "root", "rootr00t!", {
    host: "sql.freedb.tech",
    dialect: "mysql",
    port: 3306,
  });
}

module.exports = sequelize;
