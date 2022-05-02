const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'sayinmehmet47',
  host: 'localhost',
  database: 'deneme',
  password: 'array.map(47)',
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

module.exports = {
  getLinks,
};
