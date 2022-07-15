import axios from 'axios';
 const url= 'http://localhost:3001/';

class EmployeeService
{
    //Get Employees
    static async getEmployees()
    {
            try{
                const response = await axios.get(url);
               // console.log(response);
                return response.data;
            }
            catch(err)
            {
                console.log({err});            
            }
    }
    //create Employees
   static insertEmployee(name,department,team)
    {
      return axios.post(url,{
       name,department,team
      });
    }
    //Delete Employees
    static deleteEmployee(id)
    {
        return axios.delete(`${url}${id}`);
    }
    //Update Employess
    static updateEmployee(id,team)
    {
        console.log("for updation");
        console.log("team name"+team);
        return axios.put(`${url}${id}`,{team});
    }
}
export default EmployeeService;