import dotenv from "dotenv";
dotenv.config();

const config = {
  app: {
    environment: process.env.APP_ENV || "production",
    url: process.env.APP_URL,
    port: process.env.APP_PORT || 3000,
  },
  db: {
    connection: process.env.DB_CONNECTION,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 3306,
    name: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
  },
  mail: {
    username: process.env.MAIL_USERNAME,
    password: process.env.MAIL_PASSWORD,
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
  },
};

export default config;
module.exports = config;
