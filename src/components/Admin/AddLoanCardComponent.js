import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import '../../StylesAddCustomerComponent.css'

import { Link, useParams } from 'react-router-dom';
import LoanCardService from '../AdminServices/LoanCardService'

const AddLoanCardComponent = () => {

    const navigate = useNavigate();

    const [loanId, setLoanId] = useState('')
    const [loanType, setLoanType] = useState('')
    const [durationInMonths, setDurationInMonths] = useState(0)
    const { id } = useParams();


    const handleSubmit = (e) => {
        saveOrUpdateLoanCard(e);
    }

    const saveOrUpdateLoanCard = (e) => {
        e.preventDefault();


        const loanCard = { loanId, loanType, durationInMonths }

        if (id) {
            setLoanId(id)
            LoanCardService.updateLoanCard(id, loanCard).then((response) => {
                navigate('/admin/loan-card');
            }).catch(error => {
                console.log(error)
            })
        } else {
            LoanCardService.createLoanCard(loanCard).then((response) => {
                console.log(response.data)
                navigate('/admin/loan-card');
            }).catch(error => {
                console.log(error)
            })
        }

    }

    useEffect(() => {

        if (!id) {
            return;
        }
        if(loanType!==""){
            return;
        }
        // console.log("useEffect is being called");
        LoanCardService.getLoanCardById(id).then((response) => {

            setLoanId(response.data.loanId)
            setLoanType(response.data.loanType)
            setDurationInMonths(response.data.durationInMonths)
        }).catch(error => {
            console.log(error)
        })
    }, )


    const title = () => {

        if (id) {
            return <div>
                <h2 className="text-center">Update Loan Card</h2>
                <h4>Loan Id : {id}</h4>
                </div>
        } else {
            return <h2 className="text-center">Add Loan Card</h2>
        }
    }

    return localStorage.getItem('token') ? (

        <div className="page-content">
            <div className="container">
                <div className="form-container" style={{ fontSize: "20px" }}>
                <div className="title-header">{title()}</div>
                    <form>
                        {/* <div className="form-group">
                            <label htmlFor="loanType">Loan Id</label>
                            <input
                                type="text"
                                placeholder="Enter loan id"
                                name="id"
                                className="form-control"
                                value={loanId}
                                onChange={(e) => setLoanId(e.target.value)}
                            />
                        </div> */}
                        <div className="form-group">
                            <label htmlFor="loanType">Loan Type</label>
                            <input
                                type="text"
                                placeholder="Enter loan type"
                                name="loan"
                                className="form-control"
                                value={loanType}
                                onChange={(e) => setLoanType(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="loanType">Duration (in months)</label>
                            <div class="form-outline" style={{ width: "10rem" }}>
                                <input
                                    step="1"
                                    type="number"
                                    id="typeNumber"
                                    class="form-control"
                                    value={durationInMonths}
                                    onChange={(e) => setDurationInMonths(e.target.value)}
                                />
                            </div>
                        </div>
                        <button className="btn btn-success" onClick={handleSubmit}>Submit </button>
                        <Link to="/admin/loan-card" className="btn btn-danger"
                            style={{ marginLeft: "10px" }}> Cancel </Link>
                    </form>
                </div>
            </div>
        </div>
    ) : navigate('/');
}

export default AddLoanCardComponent
