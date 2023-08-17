import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import { Link, useParams } from 'react-router-dom';
import CustomerService from '../AdminServices/CustomerService'

const AddCustomerComponent = () => {

    const navigate = useNavigate();

    const [employeeID, setEmployeeID] = useState('')
    const [employeeName, setEmployeeName] = useState('')
    const [employeeDesignation, setEmployeeDesignation] = useState('')
    const [employeeDepartment, setEmployeeDepartment] = useState('')
    const [employeeDOJ, setEmployeeDOJ] = useState('')
    const [employeeDOB, setEmployeeDOB] = useState('')
    const [gender, setGender] = useState('')
    // const [isValid, setIsValid] = useState(true)
    const { id } = useParams();


    const handleSubmit = (e)=>{
        saveOrUpdateEmployee(e);
    }

    const saveOrUpdateEmployee = (e) => {
        e.preventDefault();

        const employee = { employeeID, employeeName,employeeDesignation, employeeDepartment, employeeDOJ, employeeDOB, gender }

        if (id) {
            setEmployeeID(id)
            CustomerService.updateEmployee(id, employee).then((response) => {
                navigate('/admin/customers');
            }).catch(error => {
                console.log(error)
            })
        } else {
            CustomerService.createEmployee(employee).then((response) => {
                console.log(response.data)
                navigate('/admin/customers');
            }).catch(error => {
                console.log(error)
            })
        }

    }

    useEffect(() => {

        CustomerService.getEmployeeById(id).then((response) => {
          
            setEmployeeID(response.data.id)
            setEmployeeName(response.data.employeeName)
            setEmployeeDesignation(response.data.employeeDesignation)
            setEmployeeDepartment(response.data.employeeDepartment)
            setEmployeeDOJ(response.data.employeeDOJ)
            setEmployeeDOB(response.data.employeeDOB)
            setGender(response.data.gender)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    const title = () => {

        if (id) {
            return <h2 className="text-center">Update Employee</h2>
        } else {
            return <h2 className="text-center">Add Employee</h2>
        }
    }

    return (
        <div style={{ marginTop: "120px" }}>
            <br /><br />
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        {
                            title()
                        }
                        <div className="card-body">
                            <form>
                                <div className="form-group mb-2">
                                    <label className="form-label"> Name :</label>
                                    <input
                                        type="text"
                                        placeholder="Enter your name"
                                        name="name"
                                        className="form-control"
                                        value={employeeName}
                                        onChange={(e) => setEmployeeName(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label"> Designation :</label>
                                    <input
                                        type="text"
                                        placeholder="Enter your Designation"
                                        name="Designation"
                                        className="form-control"
                                        value={employeeDesignation}
                                        onChange={(e) => setEmployeeDesignation(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label"> Department :</label>
                                    <input
                                        type="text"
                                        placeholder="Enter your Department"
                                        name="Department"
                                        className="form-control"
                                        value={employeeDepartment}
                                        onChange={(e) => setEmployeeDepartment(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label"> DOJ :</label>
                                    <input
                                        type="text"
                                        placeholder="Enter your DOJ"
                                        name="DOJ"
                                        className="form-control"
                                        value={employeeDOJ}
                                        onChange={(e) => setEmployeeDOJ(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label"> DOB :</label>
                                    <input
                                        type="text"
                                        placeholder="Enter your DOB"
                                        name="DOB"
                                        className="form-control"
                                        value={employeeDOB}
                                        onChange={(e) => setEmployeeDOB(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label"> Gender :</label>
                                    <input
                                        type="text"
                                        placeholder="Enter your Gender"
                                        name="Gender"
                                        className="form-control"
                                        value={gender}
                                        onChange={(e) => setGender(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <button className="btn btn-success"  onClick={handleSubmit} >Submit </button>
                                <Link to="/admin/customers" className="btn btn-danger"
                                    style={{ marginLeft: "10px" }}> Cancel </Link>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddCustomerComponent
