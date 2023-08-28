import '../../Styles/ViewLoan.css';

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useAuth } from '../AuthProvider'
import { Link } from 'react-router-dom'

const EMPLOYEE_LOAN_CARD_REST_API_URL = 'http://localhost:8000/employees/';

// const EmployeeDetails = {
//     "Employee_Id": "E00001",
//     "Name": "Ram",
//     "Designation": "Manager",
//     "Department": "Finance",
//     "Gender": "Male",
//     "Date_of_Birth": new Date("1973-01-01").toDateString(),
//     "Date_of_Joining": new Date("2000-01-01").toDateString()
// }

// const loans = [
//     {
//         "Loan_id": 1,
//         "Loan_Type": "Furniture",
//         "Duration": 5,
//         "Card_Issue_Date": new Date("2023-08-09").toDateString().split(' ').slice(1).join(' ')
//     },
//     {
//         "Loan_id": 2,
//         "Loan_Type": "Stationery",
//         "Duration": 3,
//         "Card_Issue_Date": new Date("2023-08-01").toDateString().split(' ').slice(1).join(' ')
//     },
//     {
//         "Loan_id": 3,
//         "Loan_Type": "Crockery",
//         "Duration": 7,
//         "Card_Issue_Date": new Date("2023-07-09").toDateString().split(' ').slice(1).join(' ')
//     },
//     {
//         "Loan_id": 4,
//         "Loan_Type": "Stationery",
//         "Duration": 5,
//         "Card_Issue_Date": new Date("2023-08-06").toDateString().split(' ').slice(1).join(' ')
//     },
//     {
//         "Loan_id": 5,
//         "Loan_Type": "Crockery",
//         "Duration": 6,
//         "Card_Issue_Date": new Date("2023-08-02").toDateString().split(' ').slice(1).join(' ')
//     },
//     {
//         "Loan_id": 6,
//         "Loan_Type": "Furniture",
//         "Duration": 9,
//         "Card_Issue_Date": new Date("2023-08-05").toDateString().split(' ').slice(1).join(' ')
//     },
//     {
//         "Loan_id": 5,
//         "Loan_Type": "Crockery",
//         "Duration": 6,
//         "Card_Issue_Date": new Date("2023-08-02").toDateString().split(' ').slice(1).join(' ')
//     },
//     {
//         "Loan_id": 6,
//         "Loan_Type": "Furniture",
//         "Duration": 9,
//         "Card_Issue_Date": new Date("2023-08-05").toDateString().split(' ').slice(1).join(' ')
//     },
// ]

const colorScheme = {
    "Furniture": "card l-bg-cherry",
    "Crockery": "card l-bg-blue-dark",
    "Stationery": "card l-bg-green-dark"
}

const iconScheme = {
    "Furniture": "fas fa-shopping-cart",
    "Crockery": "fas fa-users",
    "Stationery": "fas fa-dollar-sign"
}

export default function ViewLoan() {

    const { id } = useAuth();
    const [loans, setLoans] = useState([])

    useEffect(() => {
        getAllAvailedLoanCards();
    }, [])

    const getAllAvailedLoanCards = () => {
        axios.get(EMPLOYEE_LOAN_CARD_REST_API_URL + id + "/loans", 
        {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        }).then((response) => {
            setLoans(response.data)
        }).catch(error => {
            console.log(error);
        })
    }

    return (
        <>
            <Link to="/user/dashboard" className="linkingComponent" style={{ marginTop: "150px", fontSize: "25px" }}>
                <i class="fas fa-arrow-left"></i> Back to Dashboard
            </Link>
            <div className="container" style={{ backgroundColor: "white", marginTop: "20px"}}>
        
                <div className="row" style={{ backgroundColor: "white" }}>
                    <h2 style={{ background: 'linear-gradient(to right, #98FB98 50%, #40E0D0 50%)' }}>Loan Cards Availed</h2>
                    <hr />
                    {loans.map((loan, index) =>
                        <div key={index} className="col-4" >
                            <div className={colorScheme[loan.loanType.loanType] ?? "card l-bg-orange-dark"} style={{ height: "65%" }}>
                                <div className="card-statistic-3 p-4">
                                    <div className="card-icon card-icon-large"><i className={iconScheme[loan.loanType.loanType] ?? "fas fa-ticket-alt"}></i></div>
                                    <div className="mb-5">
                                        <h5 className="card-title">{loan.loanType.loanType}</h5>
                                    </div>
                                    <div className="row align-items-center mt-5 d-flex" style={{ backgroundColor: 'transparent' }}>
                                        <div className="col-8">
                                            <h2 className="d-flex align-items-center mb-0" style={{ paddingleft: "2%" }}>{new Date().toDateString().split(' ').slice(1).join(' ')}</h2>
                                        </div>
                                        <div className="col-4 text-right" style={{ paddingLeft: "0", paddingRight: "0" }}>
                                            <span>{loan.loanType.durationInMonths} Months</span>
                                        </div>
                                    </div>
                                    <div className="progress mt-3 " data-height="8" style={{ height: "8px" }}>
                                        <div className="progress-bar l-bg-cyan" role="progressbar" data-width="25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{ width: "25%" }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}