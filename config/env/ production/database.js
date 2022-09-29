const parse = require("pg-connection-string").parse;
const config = parse(process.env.DATABASE_URL);
module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: config.DATABASE_HOST,
        port: config.DATABASE_PORT,
        database: config.DATABASE_NAME,
        username: config.DATABASE_USERNAME,
        password: config.DATABASE_PASSWORD,
        ssl: {
          rejectUnauthorized: false,
        },
      },
      options: {
        ssl: true,
      },
    },
  },
});
