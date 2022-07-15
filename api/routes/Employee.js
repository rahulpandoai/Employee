const express=require("express");
const path=require('path');
const router=express.Router();
const Employeecontroller=require("../controller/Employee");
//Get Employees
router.get("/",Employeecontroller.getEmployees);
//Add Employees
router.post("/",Employeecontroller.addEmployee);
//delete Employee
router.delete("/:id",Employeecontroller.deleteEmployee);
router.put("/:id",Employeecontroller.updateEmployee);
module.exports=router; 