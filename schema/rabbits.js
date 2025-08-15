var mongoose = require('mongoose');
mongoose.connect('mongodb://192.168.0.66:27017/Rabbits');
var moment = require('moment')

var schema = mongoose.Schema({
    
    Name: {type: String, default:'-'},
    Pic: String,
    Breed:  { type: String, default: '' },
    Father: { type: String, default: '' },
    Mother: { type: String, default: '' },
    Date_Born: { type: Date, default: '01/03/1975' },
    Sex: { type: String, default: 'Not Sexed' },
    Bought:  { type: Boolean, default: false },
    Breeder:  { type: String, default: '' },
    DateReadyToBreed: Date ,
    ReadyToBreed:{type: Boolean, default: false},
    Cage: { type: String, default: 'UnAssigned' },
    Files:[],
    Mated:[{
        Buck: String,
        Date: Date,
        Note: String

    }],
    CurrentWeight:[{
        Weight: { type: Number, default: 0 },
        Date: Date

    }],
    Notes:[{
        Date: Date,
        Title: String,
        Note: String
    }],


})
    schema.set('toJSON', {
        virtuals: true
    });
    var rabbits = mongoose.model('Rabbits', schema, 'rabbits');
    
    module.exports = rabbits;