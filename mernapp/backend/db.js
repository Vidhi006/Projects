const mongoose = require ('mongoose')
const mongoURI = 'mongodb+srv://vidhijoshi00098_db_user:Vidhi@12345@cluster0.pfvstrp.mongodb.net/'
async function connectDB(){
    await mongoose.connect(mongoURI).then(()=>{
        console.log("MongoDB Connected Succesfully");
    }).catch((err)=>{
        console.error("Attemp Failed: "+ err.message);
    })
}
module.exports = connectDB;