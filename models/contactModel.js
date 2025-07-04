const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    name:{
        type : String,
        required : [true,"Please enter your name"],
    },
    email:{
        type : String,
        required : [true,"Please add your email"],
    },
    phone : {
        type :String,
        required : [true ,"Please add your phone number"],
    },
},
{
    timestamps: true,
}
);

module.exports = mongoose.model('Contact', contactSchema);