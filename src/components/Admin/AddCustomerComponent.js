import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import '../../StylesAddCustomerComponent.css'

import { Link, useParams } from 'react-router-dom';
import CustomerService from '../AdminServices/CustomerService'

const AddCustomerComponent = () => {

    const navigate = useNavigate();

    const [employeeID, setEmployeeID] = useState('')
    const [employeeName, setEmployeeName] = useState("")
    const [employeeDesignation, setEmployeeDesignation] = useState("Engineer")
    const [employeeDepartment, setEmployeeDepartment] = useState("CLT")
    const [employeeDOJ, setEmployeeDOJ] = useState('')
    const [employeeDOB, setEmployeeDOB] = useState('')
    const [gender, setGender] = useState("Male")
    const { id } = useParams();


    const handleSubmit = (e) => {
        saveOrUpdateEmployee(e);
    }

    const saveOrUpdateEmployee = (e) => {
        e.preventDefault();


        const employee = { employeeID, employeeName, employeeDesignation, employeeDepartment, employeeDOJ, employeeDOB, gender }

        if (id) {
            setEmployeeID(id)
            CustomerService.updateEmployee(id, employee).then((response) => {
                navigate('/admin/customers');
            }).catch(error => {
                console.log(error)
            })
        } else {
            CustomerService.createEmployee(employee).then((response) => {
                navigate('/admin/customers');
            }).catch(error => {
                console.log(error)
            })
        }

    }

    useEffect(() => {

        if(!id){
            return;
        }
        if(employeeName!==""){
            return;
        }
        // console.log("useEffect is being called");
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
    }, )

    const title = () => {

        if (id) {
            return <div>
            <h2 className="text-center">Update Employee</h2>
            <h4>Employee Id : {id}</h4>
            </div>
        } else {
            return <h4 className="text-center">Add Employee</h4>
        }
    }

    
    return(

        <div className="page-content">
            <div className="container">
                <div className="form-container">
                    <div className="title-header" style={{fontSize:"20px"}}>{title()}</div>
                    <form>
                        <div className="form-group">
                            <label htmlFor="employeeName">Employee Name</label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                name="name"
                                className="form-control"
                                value={employeeName}
                                onChange={(e) => {
                                    setEmployeeName(e.target.value)}}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="designation">Designation</label>

                            <select id="designation" className="form-control"
                                value={employeeDesignation}
                                placeholder="Pleae choose your Designation here.."
                                onChange={(e) => setEmployeeDesignation(e.target.value)}>
                                <option value="Engineer">Engineer</option>
                                <option value="Software Developer">Software Developer </option>
                                <option value="Product Owner">Product Owner </option>
                                <option value="Manager">Manager</option>
                                <option value="Hiring Manager">Hiring Manager </option>
                                <option value="Lead Manager">Lead Software Developer</option>
                                <option value="Vice President">Vice President</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="department">Department</label>

                            <select id="department" className="form-control"
                                value={employeeDepartment}
                                placeholder="Pleae choose your Department here.."
                                onChange={(e) => setEmployeeDepartment(e.target.value)}>
                                <option value="CLT">CLT</option>
                                <option value="CSBBT">CSBBT</option>
                                <option value="WIMT">WIMT</option>
                                <option value="Business Team">Business Team</option>
                                <option value="HR team">HR team</option>
                                <option value="LnD Team">LnD Team</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="dob">Date of Joining</label>
                            <input
                                type="date"

                                placeholder="Enter your DOJ"
                                name="DOJ"
                                className="form-control"
                                value={employeeDOJ}
                                onChange={(e) => setEmployeeDOJ(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="doj">Date of Birth</label>
                            <input
                                type="date"
                                placeholder="Enter your DOB"
                                name="DOB"
                                className="form-control"
                                value={employeeDOB}
                                onChange={(e) => setEmployeeDOB(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="gender">Gender</label>
                            <select id="gender" className="form-control"
                                value={gender}
                                placeholder="Pleae choose your gender here.."
                                onChange={(e) => setGender(e.target.value)}>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <button className="btn btn-success" onClick={handleSubmit} style={{fontSize:"15px"}}>Submit </button>
                        <Link to="/admin/customers" className="btn btn-danger"
                            style={{ marginLeft: "10px", marginBottom: "0px", fontSize:"15px" }}> Cancel </Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddCustomerComponent
