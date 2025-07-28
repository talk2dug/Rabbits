var express = require('express');
var router = express.Router();
var Rabbits = require('../schema/rabbits');
var Litters = require('../schema/litters');
var Tasks = require('../schema/tasks');
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


  res.send();
});
router.get('/getRabbits', async function(req, res, next) {
    // main();
 
     const rabbit = await Rabbits.find();
    // console.log(rabbit);
 
   res.send(rabbit);
 });

 router.get('/getGrowing', async function(req, res, next) {
    // main();

     const kids = await Litters.find({ 'Kids.Growing': 'true' });
    // console.log(rabbit);
 
   res.send(kids);
 });


 router.get('/getRabbit/:rabbit', async function(req, res, next) {
    // main();
    var rabbit = req.params.rabbit
     const rabbitInfo = await Rabbits.find({Name: rabbit});
     console.log(rabbitInfo);
 
   res.send(rabbitInfo);
 });
 router.get('/getMotherLitter/:rabbit', function(req, res){
    var rabbit = req.params.rabbit;
    let litters = Litters.find({ 'Mother':  rabbit});
    Litters.find({}).then(items => {
        console.log(items)
        res.send(items);
      });
      
   
   
   


})
router.get('/getRabbitLitters/:rabbit', function(req, res){
    var rabbit = req.params.rabbit;
    let litters = Litters.find({ 'Mother':  rabbit});
    Litters.find({ $or: [
        { Mother: rabbit }, // Condition 1
        { Father: rabbit }  // Condition 2
      ]}).then(items => {
        console.log(items)
        res.send(items);
      });
})

router.get('/getRabbitLitter/:id', function(req, res){
    var id = req.params.id;
    Litters.findById( id).then(item => {
        console.log(item)
        res.send(item);
      });
})
router.get('/delALLRabbits', async function(req, res, next) {
    // main();
    const query = { __v:  0  };
    const result = await Rabbits.deleteMany(query);
    
     const rabbit = await Rabbits.find();
    // console.log(rabbit);
 
   res.send(rabbit);
 });
 router.get('/delALLLitters', async function(req, res, next) {
    // main();
    const query = { __v:  0  };
    const result = await Litters.deleteMany(query);
    
     const litter = await Litters.find();
    // console.log(rabbit);
 
   res.send(litter);
 });
 router.get('/getLitterKidNotes/:LitterID/:KidID', function(req, res){

  let litterID = req.params.LitterID
  let rabbitID = req.params.KidID
  async function findKidById(litterID, rabbitID) {
    try {
      const litter = await Litters.findById(litterID);
      if (!litter) {
        console.log('User not found.');
        return null;
      }
  
      const kid = litter.Kids.id(rabbitID);
      if (kid) {
        console.log('Found Litter:',litter);
        
        console.log('Found Kid:', kid);
        res.send(kid);
        return kid;
      } else {
        console.log('Address not found within user.');
        return null;
      }
    } catch (error) {
      console.error('Error finding address:', error);
      return null;
    }
  }
  findKidById(litterID, rabbitID)
})
 router.post('/newnote/:itemType',  function(req, res) {
  var requested = req.body
  var itemType = req.params.itemType;
  if(itemType=='rabbit'){
    let rabbitID = requested['ID']
    let rabbit = requested['Rabbit']
    let date =  requested['Date']
    let title =  requested['Title']
    let note =  requested['Note']
    console.log(requested)

    Rabbits.findById(rabbitID).then(item => {
        console.log(item)
        item.Notes.push({ 'Note': note , 'Title': title, 'Date': date })
        item.save()

        res.status(200).end()
      });
  }  
  if(itemType=='Kid'){
    let litterID = requested['LitterID']
    let rabbitID = requested['KidID']
    console.log(litterID)
    console.log(rabbitID)
    let date =  requested['Date']
    let title =  requested['Title']
    let note =  requested['Note']
    console.log(requested)
    async function findKidById(litterID, rabbitID) {
      try {
        const litter = await Litters.findById(litterID);
        if (!litter) {
          console.log('User not found.');
          return null;
        }
    
        const kid = litter.Kids.id(rabbitID);
        if (kid) {
          console.log('Found Litter:',litter);
          
          kid.Notes.push({ 'Note': note , 'Title': title, 'Date': date })
          litter.save()
          console.log('Found Kid:', kid);
          return kid;
        } else {
          console.log('Address not found within user.');
          return null;
        }
      } catch (error) {
        console.error('Error finding address:', error);
        return null;
      }
    }
    findKidById(litterID, rabbitID)

  }

 })

router.post('/updateRabbitKids',  function(req, res) {
    var requested = req.body
    let litterID = requested['itemID']
    let rabbitID = requested['rabbitID']
    console.log(litterID)
    console.log(rabbitID)
    let set = {}
    for (const [key, value] of Object.entries(requested)) {

 
        if(key == 'w2ui'){
            let keyPairs = value.changes
            for (const [key1, value1] of Object.entries(keyPairs)) {
                console.log(key1)
                console.log(value1)
                if(key1=='Growing'){
                    set['Kids.$.Status'] = 'Growing';
                    
                }
                else{set['Kids.$.' + key1] = value1;}
                set['Kids.$.' + key1] = value1;
                
                Litters.findOneAndUpdate(
                    { _id: litterID, 'Kids._id': rabbitID },
                    { $set: set },
                    {upsert: true},
                    { new: true } // Return the updated document
                  )
                    .then((user) => {
                      console.log("UPDATED")
                      console.log(user)
                    })
                    .catch((e) => {
                      console.log(e)
                    });
                


            }
            



        }
         // "a 5", "b 7", "c 9"
      }
    // for (var field in requested) {
    //     console.log(field)
    //     set['Kids.$.' + field] = requested[field];
    // }
    // Litters.update({
    //     _id: litterID,
    //     "Kids._id": rabbitID
    // }, {
    //     $set: set
    // },
    // function(err, numAffected) {

    //     console.log(err)
    // });
    res.status(200).end()
})

router.get('/getTasks/:rabbit', function(req, res){
  var rabbit = req.params.rabbit;
  Tasks.find({ Rabbit: rabbit}).then(items => {
      console.log(items)
      res.send(items);
    });
})
router.get('/getTasksDue/', function(req, res){
  async function findUnavailableProducts() {
    try {
      const notDoneTasks = await Tasks.find({ Completed: false });
      console.log(' not done :', notDoneTasks);
      res.send(notDoneTasks);
    } catch (error) {
      console.error('Error finding products:', error);
    }
  }
  
  findUnavailableProducts();

})
router.post('/newweight',  function(req, res) {
  console.log(req.body)
  let requested = req.body


  let litterID = requested['Litter']
    let rabbitID = requested['Rabbit']
    console.log(litterID)
    console.log(rabbitID)
    let date =  requested['Date']
    let weight =  parseInt(requested['Weight'])
    console.log(requested)
    async function findKidById(litterID, rabbitID) {
      try {
        const litter = await Litters.findById(litterID);
        if (!litter) {
          console.log('User not found.');
          return null;
        }
    
        const kid = litter.Kids.id(rabbitID);
        if (kid) {
          //console.log('Found Litter:',litter);
          console.log('Found KID:',kid);
          kid.CurrentWeight.push({ 'Weight': weight , 'Date': date })
          litter.save()
          console.log('Found Kid:', kid);
          return kid;
        } else {
          console.log('Address not found within user.');
          return null;
        }
      } catch (error) {
        console.error('Error finding address:', error);
        return null;
      }
    }
    findKidById(litterID, rabbitID)
  
      res.status(200).end()
  });
router.post('/newtask',  function(req, res) {
  console.log(req.body)
      const doc = new Tasks();
  
      doc.Title = req.body.Title
      doc.Date_Completed = req.body.Date_Completed
      doc.Note = req.body.Note
      doc.Completed = req.body.Completed
      doc.Due = req.body.Due
      doc.Rabbit = req.body.Rabbit
    console.log(doc)
    // Mongoose sends an `updateOne({ _id: doc._id }, { $set: { name: 'foo' } })`
    // to MongoDB.
     doc.save();
  
      res.status(200).end()
  });
router.post('/newRabbit',  function(req, res) {
console.log(req.body)
    const doc = new Rabbits();

  doc.Name= req.body.Name;
  doc.Breed= req.body.Breed;
  doc.Father= req.body.Father;
  doc.Mother= req.body.Mother;
  doc.Date_Born= req.body.Date_Born;
  doc.Sex= req.body.Sex;
  console.log(doc)
  // Mongoose sends an `updateOne({ _id: doc._id }, { $set: { name: 'foo' } })`
  // to MongoDB.
   doc.save();

    res.status(200).end()
});
router.post('/newLitter',  function(req, res) {
    let literData = req.body
    console.log(typeof(literData))
    console.log(literData)
    console.log(literData.Father)
        const doc = new Litters();
        
      doc.LitterID= literData.LitterID;
      doc.Father= literData.Father;
      doc.Mother= literData.Mother;
      doc.Born= literData.Born;
      doc.Bred= literData.Bred;
      doc.Kids=literData.Kids
      
      // Mongoose sends an `updateOne({ _id: doc._id }, { $set: { name: 'foo' } })`
      // to MongoDB.
       doc.save();
    
        res.status(200).end()
    });
module.exports = router;