require("dotenv").config();
const mysql = require("mysql");

let CONFIG = {};

CONFIG.portNumber = process.env.PORT_NUMBER || "4242";
CONFIG.emailPassword = process.env.EMAIL_PASSWORD || "toto";
CONFIG.db = mysql.createConnection({
  host: process.env.DB_HOST || "51.51.51.51",
  user: process.env.DB_USER || "toto",
  password: process.env.DB_PASSWORD || "toto",
  database: process.env.DB_DATABASE || "toto"
});
CONFIG.jwtSecret = process.env.JWTSECRET || "toto";
CONFIG.saltRounds = process.env.SALTROUNDS || 42;
CONFIG.jwtExpiration = process.env.JWTEXPIRATION || "42";

module.exports = CONFIG;
