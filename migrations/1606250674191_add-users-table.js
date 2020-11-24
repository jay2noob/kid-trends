/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.sql(`
      CREATE TABLE users (
          id SERIAL PRIMARY KEY,
          created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
          updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
          username VARCHAR(30) NOT NULL,
          email VARCHAR(100) NOT NULL,
          password VARCHAR(50) NOT NULL
      );
    `);
};

exports.down = pgm => {
    pgm.sql(`
      DROP TABLE users;
    `)
};
