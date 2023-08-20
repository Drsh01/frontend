import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import LoanCardService from '../AdminServices/LoanCardService'




export default function ManageLoanCards() {

    const [loanCard, setLoanCard] = useState([])

    useEffect(() => {
        getAllLoan();
    }, [])

    const getAllLoan = () => {
        LoanCardService.getAllLoan().then((response) => {
            setLoanCard(response.data)
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }

    const deleteLoan= (loan_id) => {
        LoanCardService.deleteLoan(loan_id).then((response) => {
            getAllLoan();

        }).catch(error => {
            console.log(error);
        })

    }
    return (
        <div className="container" style={{ marginTop: "120px" }}>
           
            <div className="row">
                <h2 style={{ background: 'linear-gradient(to right, #98FB98 50%, #40E0D0 50%)' }}>Loan Cards Availed</h2>
                <hr />
                <table className="table table-striped table-bordered border-primary">
                    <thead className="table-primary">
                        <tr className="text-center">
                            <th scope="col">Loan Id</th>
                            <th scope="col">Loan Type</th>
                            <th scope="col">Duration</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loanCard.map(loan => <tr className="text-center">
                            {
                                Object.keys(loan).map((key) => <td>{loan[key]}</td>)
                            }


<td>

 <Link className="inlineLink" to={`/admin/loan-card/update/${loan.loanId}`} ><i className="material-icons">&#xE254;</i></Link>
                                
                                    <i   onClick={() => deleteLoan(loan.loanId)}  className="material-icons">&#xE872;</i>

                                            </td>

                        </tr>
                        )}
                    </tbody>
                </table>
        
        <a href="/admin/loan-card/add" className="btn btn-primary col-1">Add</a>
        

            </div>
        </div>
    );
}