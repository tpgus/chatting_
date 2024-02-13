const db = require('../config/database');
const { v4: uuidv4 } = require('uuid');

exports.addUser = (req, res) => {
  db.execute('INSERT INTO users (rid, nickname) VALUES (?,?)', [uuidv4(), req.body.nickname])
    .then((result) => {
      console.log(result);
      res.status(201).send(result[0]);
    })
    .catch((err) => console.log(err));
};

exports.getAllUser = (_, res) => {
  db.execute('SELECT * FROM users')
    .then((result) => {
      console.log(result);
      res.stats(200).send(result[0]);
    })
    .catch((err) => console.log(err));
};
