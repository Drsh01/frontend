import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './ManageCustomer.css'
import CustomerService from '../AdminServices/CustomerService'


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
            alert("Are you sure you, employee would be deleated")
        }).catch(error => {
            console.log(error);
        })

    }

    return (
        <>
            <div className="container" style={{ marginTop: "150px" }}>
                <div className="row" style={{ backgroundColor: "white" }}>
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
                                    <Link className="inlineLink" to={`/admin/edit-customer/${employee.employeeId}`} ><i className="material-icons">&#xE254;</i></Link>
                                    <button className="inlineButton" onClick={() => deleteEmployee(employee.employeeId)}
                                    ><i className="material-icons">&#xE872;</i> </button>
                                </td>

                            </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                <br></br>

            </div>
            <div className="container">
                <div className="row" style={{ backgroundColor: "white" }}>
                    <div className="col-sm-4">
                        <Link to="/admin/add-customer" className="btn" >
                            <button type="button" className="btn btn-info add-new">
                                <i className="fa fa-plus"></i> Add New</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}