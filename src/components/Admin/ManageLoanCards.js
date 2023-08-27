import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import './ManageCustomer.css'
import LoanCardService from '../AdminServices/LoanCardService'

export default function ManageLoanCards() {
    const [loanCards, setLoanCards] = useState([])

    useEffect(() => {
        getAllLoanCards();
    }, [])

    const getAllLoanCards = () => {
        LoanCardService.getAllLoanCards().then((response) => {
            setLoanCards(response.data)
        }).catch(error => {
            console.log(error);
        })
    }

    const deleteLoanCard = (loanCard_id) => {
        LoanCardService.deleteLoanCard(loanCard_id).then((response) => {
            getAllLoanCards();
            alert("Are you sure you, loan card would be deleated")

        }).catch(error => {
            console.log(error);
        })

    }
    return (
        <>
            <div className="container" style={{ marginTop: "150px" }}>
                <div className="row" style={{ backgroundColor: "white" }}>
                    <h2 style={{ background: 'linear-gradient(to right, #98FB98 50%, #40E0D0 50%)' }}>Loan Card Details</h2>
                    <hr />
                    <table className="table table-striped table-bordered border-primary">
                        <thead className="table-primary">
                            <tr className="text-center">
                                <th scope="col">Loan Id</th>
                                <th scope="col">Loan Type</th>
                                <th scope="col">Duration (in months)</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loanCards.map(loanCard => <tr className="text-center">
                                {
                                    Object.keys(loanCard).map((key) => <td>{loanCard[key]}</td>)
                                }
                                <td>
                                    <Link className="inlineLink" to={`/admin/edit-loanCard/${loanCard.loanId}`} ><i className="material-icons">&#xE254;</i></Link>
                                    <button className="inlineButton" onClick={() => deleteLoanCard(loanCard.loanId)}
                                    ><i className="material-icons">&#xE872;</i> </button>
                                </td>

                            </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                <br></br>

            </div>
            {/* <div className="container">
                <div className="row" style={{ backgroundColor: "white" }}>
                    <div className="col-sm-4">
                        <Link to="/admin/loan-card/add" className="btn" >
                            <button type="button" className="btn btn-info add-new">
                                <i className="fa fa-plus"></i> Add New</button>
                        </Link>
                    </div>
                </div>
            </div> */}
            <Link to="/admin/loan-card/add" className="linkingComponent" >
                <button className="custom-button">Add New</button>
            </Link>
        </>
    )
}