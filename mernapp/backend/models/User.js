const mongoose = require('mongoose'); 
const {Schema} = mongoose;

const UserSchema = new Schema({
    name:{
        type : String , 
        require: true 
    },
    location:{
        type : String , 
        required: true,
    },
    email:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
        //This means: if you don’t provide a value for this field when inserting a document,
        //  it will automatically store the current date & time.
    }
});

module.exports = mongoose.model("user",UserSchema)