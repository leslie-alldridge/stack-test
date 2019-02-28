// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./dev.sqlite3"
    },
    useNullAsDefault: true
  },

  test: {
    client: "sqlite3",
    connection: {
      filename: "./dev.sqlite3"
    },
    migrations: {
      directory: __dirname + "/migrations"
    },
    seeds: {
      directory: __dirname + "/seeds"
    }
  },

  production: {
    client: "postgresql",
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }
};
