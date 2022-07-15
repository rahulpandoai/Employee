const mongoose=require("mongoose");
const schema=mongoose.Schema;
const EmployeeSchema=new mongoose.Schema(
    {
        name:
        {
            type:String,
            required:true
        },
        department:
        {
            type:String,
            required:true
        },
        team:
        {
            type:String,
            required:true
        }
    }
);
module.exports=mongoose.model("Employee",EmployeeSchema);