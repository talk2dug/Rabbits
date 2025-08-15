var mongoose = require('mongoose');
mongoose.connect('mongodb://192.168.0.66:27017/Rabbits');


var schema = mongoose.Schema({


    Title: String,
    Due: Date,
    Date_Completed: Date,
    Completed: {
        type: Boolean,
        default: false
    },
    Note: String,
    Rabbit: String


})
schema.set('toJSON', {
    virtuals: true
});
var tasks = mongoose.model('Tasks', schema, 'tasks');

module.exports = tasks;