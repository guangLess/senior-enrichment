
const Promise = require('bluebird')
//const db = require('./index') // pull models and deconstrotr dabase 

const {db} = require('./models')

const data = {
  student: [
    {
      name: 'Guang Zhu',
      email: 'GZ@gh.com',
    },
    {
        name: 'Nori Cutie Dog',
        email: 'nori@dog.cute',
      }
  ],
  campus: [
    {
      name: 'Grace Hopper',
      image: 'url/to/imageCampus'
    },
    {
        name: 'Dog park',
        image: 'url/to/dogPark'
      }
  ]
};

db
.sync({ /*force: true*/ })
.then(function() {
  console.log("Dropped old data, now inserting data");
  return Promise.map(Object.keys(data), function(name) {
    return Promise.map(data[name], function(item) {
      return db.model(name).create(item);
    });
  });
})
.then(function() {
  console.log("Finished inserting data");
})
.catch(function(err) {
  console.error("There was totally a problem", err, err.stack);
})
.finally(function() {
  db.close(); // uses promises but does not return a promise. https://github.com/sequelize/sequelize/pull/5776
  console.log("connection closed"); // the connection eventually closes, we just manually do so to end the process quickly
  return null; // silences bluebird warning about using non-returned promises inside of handlers.
});