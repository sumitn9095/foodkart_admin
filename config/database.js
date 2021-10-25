module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "mysql",
        // host: env("DATABASE_HOST", "127.0.0.1"),
        // port: env.int("DATABASE_PORT", 3306),
        // database: env("DATABASE_NAME", "foodkart"),
        // username: env("DATABASE_USERNAME", "root"),
        // password: env("DATABASE_PASSWORD", ""),
        // ssl: env.bool("DATABASE_SSL", false),
        host: env("DATABASE_HOST", "localhost"),
        port: env.int("DATABASE_PORT", 3306),
        database: env("DATABASE_NAME", "sumitfnn_foodkart_admin"),
        username: env("DATABASE_USERNAME", "sumitfnn_foodkart"),
        password: env("DATABASE_PASSWORD", "#SN85951055"),
        ssl: env.bool("DATABASE_SSL", false),
      },
      options: {},
    },
  },
});
