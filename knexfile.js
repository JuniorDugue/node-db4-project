// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './nodedb4.db3'
    }
  },
  migrations: {
    directory: './database/migrations'
  },
  seeds: {
    directory: './database/seeds'
  }
};
