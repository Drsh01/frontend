import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom';
import LoanCardService from '../AdminServices/LoanCardService';


const AddLoanCard = () => {

    const navigate = useNavigate();

  
    const [loanType,setLoanType] = useState('')
    const [durationInMonths,setDurationInMonths] = useState('')
    const loanByType = [
    
        {label : "Furniture",value:"Furniture"},
        {label:"Stationary",value:"Stationary"},
        {label:"Crockery",value:"Crockery"},
    ];
      
    


    const handleSubmit = (e)=>{
        console.log(e);
        createLoan(e);
    }

    const createLoan = (e) => {
        e.preventDefault();
        
        const loan = { loanType,durationInMonths}

    
   LoanCardService.createLoan(loan).then((response) => {
                console.log(response.data)
                navigate('/admin/loan-card');
            }).catch(error => {
                console.log(error)
            })
        }

    

    return (
        <div className="container text-center" style={{ marginTop: "120px" }}>
            <h2>Add Loan Card</h2>
            <form className="border col-xs-12 col-sm-10 col-8 mx-auto">
                <div className="row">
                  
                    <div className="form-outline form-inline my-4 ">
                        <label className="form-label col-6 ms-4">Loan Type</label>
                        <select className="select col-3" placeholder="select" onChange={(e) => setLoanType(e.target.value)} >
                            <option >select</option>
                            {loanByType.map((loan) => <option key={loan.label} value={loan.value}>{loan.value}</option>)}
                        </select>
                    </div>

                    
                <div className="form-outline form-inline my-4 ">
                    <label className="form-label col-6 ms-4">Duration</label>
                    
                    <input type="number" class="form-control col-4" id="input1" placeholder="enter amount" onChange={(e) => setDurationInMonths(e.target.value)}/>
                </div>

                </div>
                
                <button className="btn btn-success my-4"  onClick={handleSubmit} >Submit </button>
                                <Link to="/admin/loan-card" className="btn btn-danger"
                                    style={{ marginLeft: "10px" }}> Cancel </Link>
            </form>
        </div>
    )
}

export default AddLoanCard;