const Employee=require("../models/Employee");
const fs=require('fs');
const path=require('path');
const moongose=require('mongoose');
exports.getEmployees=(req,res,next)=>
{
        
         Employee.find({})
        .then(details=>{
          console.log(details);
          res.send(details);
          })
          .catch(err=>{
           console.log(err);
           })
};
exports.addEmployee=async(req,res,next)=>{
     console.log("sdf");
    const employee=new Employee(
    {
      name:req.body.name,
      department:req.body.department,
      team:req.body.team
    });
    console.log(req.body.name);
     await employee.save();
    res.status(201).send();
}
exports.deleteEmployee=async(req,res,next)=>
{
  console.log("deletion");
  await Employee.deleteOne({_id:req.params.id});
  res.status(201).send();
}
exports.updateEmployee=async(req,res,next)=>
{
  console.log("updation")
  
  Employee.findById({_id:req.params.id})
  .then(employee=>{
  console.log(req.body.team);
  employee.team=req.body.team;
  res.json({sucess:1});
  return employee.save();
  })
 .catch(err=>{
    console.log(err);
  });
}