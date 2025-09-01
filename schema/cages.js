var mongoose = require("mongoose");
mongoose.connect("mongodb://192.168.0.66:27017/Rabbits");

var schema = mongoose.Schema([
  {
    CageNumber: Number,
    Type: String,
  },
]);
schema.set("toJSON", {
  virtuals: true,
});
var cages = mongoose.model("Cages", schema, "cages");

module.exports = cages;
