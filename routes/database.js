var express = require('express');
var router = express.Router();
var Rabbits = require('../schema/rabbits');
/* GET users listing. */

async function main() {

  const doc = new Rabbits();

  doc.Name= 'Dip Shit';
  doc.Breed= 'Mixed Cat';
  doc.Father= 'Frerd';
  doc.Mother= 'Willma';
  doc.Date_Born= "10/10/25";
  doc.Sex= 'Male';
  // Mongoose sends an `updateOne({ _id: doc._id }, { $set: { name: 'foo' } })`
  // to MongoDB.
  await doc.save();

  const rabbit = await Rabbits.find();
  console.log(rabbit);
}

router.get('/', async function(req, res, next) {
    //main();

    const rabbit = await Rabbits.find();
    console.log(rabbit);

  res.send(rabbit);
});

module.exports = router;