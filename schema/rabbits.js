var mongoose = require('mongoose');
mongoose.connect('mongodb://192.168.0.66:27017/Rabbits');


var schema = mongoose.Schema({
    
    Name: String,
    Breed: String,
    Father: String,
    Mother: String,
    Date_Born: Date,
    Sex: String,
    Bought: Boolean,
    Breeder: String})
    schema.set('toJSON', {
        virtuals: true
    });
    var rabbits = mongoose.model('Rabbits', schema, 'rabbits');
    
    module.exports = rabbits;