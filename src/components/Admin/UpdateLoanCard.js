import React, { useState, useEffect } from 'react'
import { useNavigate,useParams} from 'react-router-dom';
import { Link } from 'react-router-dom';
import LoanCardService from '../AdminServices/LoanCardService';


const loanByType = [
    "Furniture",
    "Stationary",
    "Crockery"
];



export default function UpdateLoanCard() {

    const navigate = useNavigate();

    const [loanId,setLoanId] = useState('')
    const [loanType,setLoanType] = useState('')
    const [durationInMonths,setDurationInMonths] = useState('')
    const { id } = useParams();
  
    


    const handleSubmit = (e)=>{
        console.log(e);
        updateLoan(e);
    }

    const updateLoan = (e) => {
        e.preventDefault();
        
        const loan = { loanType,durationInMonths}
        console.log(id)
        // console.log(loan)
        
    
   LoanCardService.updateLoans(id,loan).then((response) => {
                console.log(response.data)
                navigate('/admin/loan-card');
            }).catch(error => {
                console.log(error)
            })
        }

    

    useEffect(() => {
        console.log(id)

        LoanCardService.getLoans(id).then((response) => {
          
            setLoanId(response.data.loanId)
            setLoanType(response.data.loanType)
            setDurationInMonths(response.data.durationInMonths)
            
        }).catch(error => {
            console.log(error)
        })
    }, [id])



    return (
        <div className="container text-center" style={{ marginTop: "120px" }}>
            <h2>Update Loan Card</h2>
            <form className="border col-xs-12 col-sm-10 col-8 mx-auto">
                <div className="row">
                    <div className="form-outline form-inline my-4 ">
                        <label className="form-label col-6  ms-4" >Loan Id</label>
                        <input className="form-control col-4" type="stringg"   disabled value ={loanId} />
                    </div>
                    <div className="form-outline form-inline my-4 ">
                        <label className="form-label col-6 ms-4">Loan Type</label>
                        <select className="select col-3" value={loanType} onChange={(e) => setLoanType(e.target.value)} >
                            {loanByType.map((loan, index) => <option key={index} value={loan}>{loan}</option>)}
                        </select>
                    </div>

                    
                <div className="form-outline form-inline my-4 ">
                    <label className="form-label col-6 ms-4">Duration</label>
                    
                    <input type="number" class="form-control col-4" id="input1" placeholder="enter amount" value={durationInMonths} onChange={(e) => setDurationInMonths(e.target.value)}/>
                </div>

                </div>
                
                <button className="btn btn-success my-4"  onClick={handleSubmit} >Submit </button>
                                <Link to="/admin/loan-card" className="btn btn-danger"
                                    style={{ marginLeft: "10px" }}> Cancel </Link>
            </form>
        </div>
    )
}