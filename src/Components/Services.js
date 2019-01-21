import axios from 'axios';

class EmployeeService {
    deleteEmployee(id) {
        axios.get('http://localhost:4000/employees/deleteEmp/'+id).then(
            ()=> {
                console.log('Employee delete successfully.');
            }
        ).catch(
            (error) => {
                console.log(error);
            }
        );
    }
}

export default EmployeeService;