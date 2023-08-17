
import React from "react";

const loanType = [
    "Furniture",
    "Stationary",
    "Crockery"
];



export default function AddLoanCard() {
 
    const [itemLoanType, setItemLoanType] = React.useState(loanType[0]);
    const [itemDuration, setItemDuration] = React.useState('');

    const handleSubmit = () => {
        console.log(itemLoanType, itemDuration);
    }
    return (
        <div className="container text-center" style={{ marginTop: "120px" }}>
            <h2>Add Loan Card</h2>
            <form className="border col-xs-12 col-sm-10 col-8 mx-auto">
                <div className="row">
                    <div className="form-outline form-inline my-4 ">
                        <label className="form-label col-6  ms-4" >Loan Id</label>
                        <input className="form-control col-4" type="number" disabled value={1} />
                    </div>
                    <div className="form-outline form-inline my-4 ">
                        <label className="form-label col-6 ms-4">Loan Type</label>
                        <select className="select col-3" onChange={(e) => setItemLoanType(e.target.value)} >
                            {loanType.map((loan, index) => <option key={index} value={loan}>{loan}</option>)}
                        </select>
                    </div>

                    
                <div className="form-outline form-inline my-4 ">
                    <label className="form-label col-6 ms-4">Duration</label>
                    
                    <input type="number" class="form-control col-4" id="input1" placeholder="enter amount" onChange={(e) => setItemDuration(e.target.value)}></input>
                </div>

                </div>
                
                <button type="button" className="btn btn-success btn-block col-3 mt-4 mb-4" onClick={handleSubmit}>Add Loan Card</button>
            </form>
        </div>
    );
}