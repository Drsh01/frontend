import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './ManageCustomer.css'
import CustomerService from '../AdminServices/CustomerService'

// const employees = [
//     {
//         "Employee_Id": "E00001",
//         "Name": "Ram",
//         "Designation": "Manager",
//         "Department": "Finance",
//         "Gender": "Male",
//         "Date_of_Birth": new Date("1973-01-01").toDateString(),
//         "Date_of_Joining": new Date("2000-01-01").toDateString()
//     },
//     {
//         "Employee_Id": "E00002",
//         "Name": "Manoj",
//         "Designation": "Engineer",
//         "Department": "Human Resource",
//         "Gender": "Male",
//         "Date_of_Birth": new Date("1988-02-01").toDateString(),
//         "Date_of_Joining": new Date("2007-10-01").toDateString()
//     },
//     {
//         "Employee_Id": "E00005",
//         "Name": "Riya",
//         "Designation": "Manager",
//         "Department": "Finance",
//         "Gender": "Female",
//         "Date_of_Birth": new Date("1999-11-11").toDateString(),
//         "Date_of_Joining": new Date("2010-10-04").toDateString()
//     },
//     {
//         "Employee_Id": "E00023",
//         "Name": "Abhishek",
//         "Designation": "Lead engineer",
//         "Department": "Technology",
//         "Gender": "Male",
//         "Date_of_Birth": new Date("1972-10-06").toDateString(),
//         "Date_of_Joining": new Date("2000-01-01").toDateString()
//     }
// ]


export default function ManageCustomers() {

    
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        getAllEmployees();
    }, [])

    const getAllEmployees = () => {
        CustomerService.getAllEmployees().then((response) => {
            setEmployees(response.data)
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }

    const deleteEmployee = (employee_id) => {
        CustomerService.deleteEmployee(employee_id).then((response) => {
            getAllEmployees();

        }).catch(error => {
            console.log(error);
        })

    }

    return (
        <div className="container" style={{ marginTop: "120px" }}>
            <div className="row">
                <h2 style={{ background: 'linear-gradient(to right, #98FB98 50%, #40E0D0 50%)' }}>Employee Details</h2>
                <hr />
                <table className="table table-striped table-bordered border-primary">
                    <thead className="table-primary">
                        <tr className="text-center">
                            <th scope="col">Employee Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Designation</th>
                            <th scope="col">Department</th>
                            <th scope="col">Date of Joining</th>
                            <th scope="col">Date of Birth</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map(employee => <tr className="text-center">
                            {
                                Object.keys(employee).map((key) => <td>{employee[key]}</td>)
                            }
                            <td>
                                {/* <i class="material-icons">&#xE254;</i>
                                <i class="material-icons">&#xE872;</i> */}
                                <Link className="inlineLink" to={`/admin/edit-customer/${employee.employeeID}`} ><i class="material-icons">&#xE254;</i></Link>
                                <button className="inlineButton" onClick={() => deleteEmployee(employee.employeeID)}
                                ><i class="material-icons">&#xE872;</i> </button>
                            </td>

                        </tr>
                        )}
                    </tbody>
                </table>
            </div>
            <div class="col-sm-4">
                <Link to="/admin/add-customer" className="btn" >
                    <button type="button" class="btn btn-info add-new">
                        <i class="fa fa-plus"></i> Add New</button>
                </Link>
            </div>
        </div>
    );
}