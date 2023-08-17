
const loans = [
    {
        "Loan_id": 1,
        "Loan_Type": "Furniture",
        "Duration": 5,
    },
    {
        "Loan_id": 2,
        "Loan_Type": "Stationary",
        "Duration": 3,

    },
    {
        "Loan_id": 1,
        "Loan_Type": "Crockery",
        "Duration": 1,
        
    },
]



export default function ManageLoanCards() {
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
                        {loans.map(loan => <tr className="text-center">
                            {
                                Object.keys(loan).map((key) => <td>{loan[key]}</td>)
                            }


<td>
<a href="/admin/loan-card/update" className="btn" ><i class="material-icons">&#xE254;</i></a>
<a href="/admin/loan-card"  className=" btn ms-1"><i class="material-icons">&#xE872;</i></a>
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