var mongoose = require('mongoose');
mongoose.connect('mongodb://192.168.0.66:27017/Rabbits');


var schema = mongoose.Schema({
  
        LitterID: String,
        Father: String,
        Mother: String,
        Bred: Date,
        Born: Date,
            Kids:[{
                Status: { type: String, default: 'Nesting' },
                Growing: Boolean,
                KidID: String,
                Sex: String,
                BirthWeight: Number,
                SecondDate:Date,
                SecondWeight: Number,
                FinalDate: Date,
                FinalWeight: Number,
                CurrentWeight:[{
                    Weight: { type: Number, default: 0 },
                    Date: Date

                }],
                Notes:[{
                    Date: Date,
                    Title: String,
                    Note: String
                }],
                Tasks:[{
                    Title: String,
                    Due: Date,
                    Date_Completed: Date,
                    Completed: Boolean,
                    Note: String
                }]
            }]
    
})
    schema.set('toJSON', {
        virtuals: true
    });
    var litters = mongoose.model('Litters', schema, 'litters');
    
    module.exports = litters;