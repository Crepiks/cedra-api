import config from "./src/config";

module.exports = {
  client: config.db.connection,
  connection: {
    host: config.db.host,
    user: config.db.username,
    port: config.db.port as number,
    password: config.db.password,
    database: config.db.name,
  },
};
