import { useNavigate } from "react-router";

const EmployeeDetails = {
    "Employee_Id": "E00001",
    "Name": "Ram",
    "Designation": "Manager",
    "Department": "Finance",
    "Gender": "Male",
    "Date_of_Birth": new Date("1973-01-01").toDateString(),
    "Date_of_Joining": new Date("2000-01-01").toDateString()
}

const loans = [
    {
        "Loan_id": 1,
        "Loan_Type": "Furniture",
        "Duration": 5,
        "Card_Issue_Date": new Date("2000-01-01").toDateString()
    },
    {
        "Loan_id": 2,
        "Loan_Type": "Stationary",
        "Duration": 3,
        "Card_Issue_Date": new Date("2000-01-01").toDateString()
    },
    {
        "Loan_id": 1,
        "Loan_Type": "Crockery",
        "Duration": 1,
        "Card_Issue_Date": new Date("2002-02-02").toDateString()
    },
]

export default function ViewLoan() {
    const navigate = useNavigate();
    return localStorage.getItem('token') ? (
        <>
            <div className="container" style={{ marginTop: "150px" }}>
                <div className="row" style={{ marginBottom: "30px", backgroundColor: "white" }}>
                    <h2 className="heading" style={{ background: 'linear-gradient(to right, #98FB98 50%, #40E0D0 50%)' }}>Employee Information</h2>
                    <hr />
                    <div className="col-6">
                        {
                            Object.keys(EmployeeDetails).map((key, index) => {
                                if (index <= Object.keys(EmployeeDetails).length / 2) return <p><span style={{ fontFamily: 'Poppins' }}>{key}:</span> {EmployeeDetails[key]}</p>
                                else return null;
                            })
                        }
                    </div>
                    <div className="col-6">
                        {
                            Object.keys(EmployeeDetails).map((key, index) => {
                                if (index > Object.keys(EmployeeDetails).length / 2) return <p><span style={{ fontFamily: 'Poppins' }}>{key}:</span> {EmployeeDetails[key]}</p>
                                else return null;
                            })
                        }
                    </div>
                </div>

            </div>
            <div className="container">

                <div className="row" style={{ backgroundColor: "white" }}>
                    <h2 style={{ background: 'linear-gradient(to right, #98FB98 50%, #40E0D0 50%)' }}>Loan Cards Availed</h2>
                    <hr />
                    <table className="table table-striped table-bordered border-primary">
                        <thead className="table-primary">
                            <tr className="text-center">
                                <th scope="col">Loan Id</th>
                                <th scope="col">Loan Type</th>
                                <th scope="col">Duration</th>
                                <th scope="col">Card Issue Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loans.map(loan => <tr className="text-center">
                                {
                                    Object.keys(loan).map((key) => <td>{loan[key]}</td>)
                                }
                            </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    ): navigate('/');
}