const mongoose=require("mongoose")

mongoose.connect("mongodb+srv://admin-manoj:Test123@cluster0.g8oimmx.mongodb.net/DBS_EL").then(()=>{
console.log("Successfully connected to mongodb");
}).catch((err)=>{
  console.log(err);
  
})



const DonorSchema=mongoose.Schema({key:Number,report:String})

const Donorfeedback=mongoose.model("Donor",DonorSchema)


module.exports={Donorfeedback}