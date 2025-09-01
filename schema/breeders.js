var mongoose = require("mongoose");
mongoose.connect("mongodb://192.168.0.66:27017/Rabbits");

var schema = mongoose.Schema({
  Name: {
    type: String,
    default: "",
  },
  Farm: {
    type: String,
    default: "",
  },
  Address: {
    type: String,
    default: "",
  },
  City: {
    type: String,
    default: "",
  },
  State: {
    type: String,
    default: "",
  },
  Zip: {
    type: Number,
    default: "",
  },
  Email: {
    type: String,
    default: "",
  },
  Phone: {
    type: String,
    default: "",
  },
  Note: {
    type: String,
    default: "",
  },
  Purchases: [
    {
      Rabbit: {
        type: String,
        default: "",
      },
      Purchased: {
        type: Date,
        default: "",
      },
      Cost: {
        type: Number,
        default: "",
      },
    },
  ],
});
schema.set("toJSON", {
  virtuals: true,
});
var breeders = mongoose.model("Breeders", schema, "breeders");

module.exports = breeders;
