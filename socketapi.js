const io = require("socket.io")();
const moment = require("moment");
const socketapi = {
  io: io,
};
var Rabbits = require("./schema/rabbits");
var Breeders = require("./schema/breeders");
var Litters = require("./schema/litters");
var Tasks = require("./schema/tasks");
// Add your socket.io logic here!
io.on("connection", function (socket) {
  console.log("A user connected");
  socket.on("chat", function (value) {
    console.log(value);
  });

  socket.on("rabbitWeight", function (data) {
    console.log("Getting HERE");
    console.log(data);
    async function findRabbitById(rabbitID, weight) {
      const rabbit = await Rabbits.findById(rabbitID);
      if (!rabbit) {
        console.log("User not found.");
        return null;
      }
      rabbit.CurrentWeight.push({
        Weight: parseFloat(weight),
        Date: new Date(),
      });
      rabbit.save();
    }

    findRabbitById(data.rabbitID, data.weight);
  });

  socket.on("rabbitNote", function (data) {
    console.log("Getting HERE");
    console.log(data);
    async function findRabbitById(rabbitID, note, title) {
      const rabbit = await Rabbits.findById(rabbitID);
      if (!rabbit) {
        console.log("User not found.");
        return null;
      }
      rabbit.Notes.push({
        Note: note,
        Date: new Date(),
        Title: title,
      });
      console.log(rabbit.Notes);
      rabbit.save();
    }

    findRabbitById(data.rabbitID, data.note, data.title);
  });

  socket.on("kidsWeight", function (value) {
    console.log(value);

    console.log("requestdData");

    console.log(value);

    async function findKidById(litterID, rabbitID, date, weight) {
      try {
        const litter = await Litters.findById(litterID);
        if (!litter) {
          console.log("User not found.");
          return null;
        }

        const kid = litter.Kids.id(rabbitID);
        if (kid) {
          console.log("Found Litter:");
          console.log("Found KID");
          kid.CurrentWeight.push({
            Weight: parseFloat(weight),
            Date: date,
          });
          try {
            litter.save();
          } catch (error) {
            console.log(error);
          }

          console.log("Found Kid:");
          return kid;
        } else {
          console.log("Address not found within user.");
          return null;
        }
      } catch (error) {
        console.error("Error finding address:", error);
        return null;
      }
    }
    value.map((item, index) => {
      let litterID = item["Litter"];
      let rabbitID = item["Rabbit"];
      console.log(litterID);
      console.log(rabbitID);
      let date = item["Date"];
      let weight = item["Weight"];
      findKidById(litterID, rabbitID, date, weight);
    });
  });
  socket.on("newTask", function (data) {
    console.log(data);
    const doc = new Tasks();
    data.forEach((value) => {
      console.log(value);
      doc[value.name] = value.value;
    });

    doc.save();
    console.log(doc);
    io.emit("newTask", "created");
  });
});
// end of socket.io logic

module.exports = socketapi;
