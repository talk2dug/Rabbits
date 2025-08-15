var mongoose = require('mongoose');
mongoose.connect('mongodb://192.168.0.66:27017/Rabbits');
var SchemaTypes = mongoose.Schema.Types;
const { Schema } = mongoose;
var schema = mongoose.Schema({

    LitterID: String,
    Father: String,
    Mother: String,
    Bred: Date,
    Born: Date,
    Kids: [{
        Pic: String,
        Status: {
            type: String,
            default: 'Nesting'
        },
        Growing: {
            type: Boolean,
            default: false
        },
        Processed: {
            type: Boolean,
            default: false
        },
        KidID: String,
        Sex: {
            type: String,
            default: 'Not Sexed'
        },
        BirthWeight: {
            type: Number,
            default: 0
        },
        FinalWeight: {
            type: Number,
            default: 0
        },
        DressedWeight: {
            type: Number,
            default: 0
        },
        DateProcessed: Date,
        CurrentWeight: [{
            Weight: String,
            Date: Date

        }],
        Notes: [{
            Date: Date,
            Title: String,
            Note: String
        }],
        Tasks: [{
            Title: String,
            Due: Date,
            Date_Completed: Date,
            Completed: {
                type: Boolean,
                default: false
            },
            Note: String
        }]
    }]

})
schema.set('toJSON', {
    virtuals: true
});
var litters = mongoose.model('Litters', schema, 'litters');

module.exports = litters;