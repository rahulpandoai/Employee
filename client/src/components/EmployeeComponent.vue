<template>
<div >
<h1>Employees</h1>
<!-- CREATE EMPLOYEE-->
<hr>
<h1>
  Create new employee
</h1>
<label>name:</label>
<input type="text" id="names" v-model="names">
<label>department:</label>
<input type="text" id="department" v-model="department">
<label>team:</label>
<input type="text" id="team" v-model="team">
<button v-on:click="createEmployee">Create!</button>
<table style="width:100%">
<tr>
  <th>name</th>
  <th>department</th>
  <th>team</th>
  <th>Delete</th>
  <th>Update</th>
</tr>
<tr
v-for="(employee,index) in employees"
v-bind:item="employee"
v-bind:index="index"
v-bind:key="employee._id"
>
  <td>{{employee.name}}</td>
<td> {{employee.department}}</td>
<td >{{employee.team}}</td>
<td><button @click="deleteEmployee(employee._id)">Delete</button></td>
<td v-if="editableId !== employee._id"><button @click="makeEditable(employee._id)">Edit</button></td>
<td v-else><button @click="updateEmployee(employee._id)">Update team name</button></td>
<td v-if="editableId === employee._id"><input type="text" v-model="updatedTeam"></td>
</tr>
</table>
</div>
</template>

<script>
import EmployeeService from '../EmployeeService';
export default {
  name: 'EmployeeComponent',
  data() {
    return {
      editableId: null,
      employees:[], 
      names: '',
      team: '',
      department:'',
      updatedTeam:''
    };
  },
  async created()
  {
    try{
      console.log("component creation");
      this.employees=await EmployeeService.getEmployees();
   
    }
    catch(err)
    {
      console.log(err);
    }
  },
  methods:{
    makeEditable(id) {
      this.editableId = id;
    },
    async createEmployee()
    {
      await EmployeeService.insertEmployee(this.names,this.department,this.team);
      this.employees=await EmployeeService.getEmployees();
    },
    async deleteEmployee(id)
    {
      await EmployeeService.deleteEmployee(id);
      this.employees=await EmployeeService.getEmployees();
    },
    async updateEmployee(id)
    {
      console.log("into updation");
      await EmployeeService.updateEmployee(id, this.updatedTeam);
      this.updatedTeam = '';
      this.editableId = null;
      this.employees = await EmployeeService.getEmployees();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table, th, td {
  border:1px solid black;
}
</style>
