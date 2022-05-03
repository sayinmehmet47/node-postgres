const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'sayinmehmet47',
  host: 'localhost',
  database: 'deneme',
  password: process.env.PASSWORD_POOL,
  port: 5432,
});

const getLinks = () => {
  return new Promise(function (resolve, reject) {
    pool.query('SELECT * FROM links ORDER BY id ASC', (error, results) => {
      if (error) {
        reject(error);
      }
      resolve(results.rows);
    });
  });
};

const createLinks = (body) => {
  return new Promise(function (resolve, reject) {
    const { url, name } = body;
    pool.query(
      'INSERT INTO links (url,name) VALUES ($1,$2) RETURNING *',
      [url, name],
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results.rows[0]);
      }
    );
  });
};

module.exports = {
  getLinks,
  createLinks,
};
