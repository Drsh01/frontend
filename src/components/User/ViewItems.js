import { useNavigate } from "react-router";

const items = [
    {
        "id": 1,
        "description": "Tea Table",
        "make": "Wooden",
        "category": "Furniture",
        "valuation": 5000
    },
    {
        "id": 2,
        "description": "Tea Set",
        "make": "Glass",
        "category": "Crockery",
        "valuation": 2000
    },
    {
        "id": 3,
        "description": "Dining Set",
        "make": "Wooden",
        "category": "Furniture",
        "valuation": 5000
    },
    {
        "id": 4,
        "description": "Pen",
        "make": "Plastic",
        "category": "Stationary",
        "valuation": 1000
    },
]

const EmployeeDetails = {
    "Employee_Id": "E00001",
    "Name": "Ram",
    "Designation": "Manager",
    "Department": "Finance",
    "Gender": "Male",
    "Date_of_Birth": new Date("1973-01-01").toDateString(),
    "Date_of_Joining": new Date("2000-01-01").toDateString()
}

export default function ViewItems() {

    const navigate = useNavigate();
    return localStorage.getItem('token') ? (
        <>
            <div className="container" style={{ marginTop: "150px" }}>
                <div className="row" style={{ marginBottom: "30px", backgroundColor: "white" }}>
                    <h2 style={{ background: 'linear-gradient(to right, #98FB98 50%, #40E0D0 50%)' }}>Employee Information</h2>
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
                    <h2 style={{ background: 'linear-gradient(to right, #98FB98 50%, #40E0D0 50%)' }}>Items Purchased</h2>
                    <hr />
                    <table className="table table-striped table-bordered border-primary">
                        <thead className="table-primary">
                            <tr className="text-center">
                                <th scope="col">Issue Id</th>
                                <th scope="col">Item Description</th>
                                <th scope="col">Item Make</th>
                                <th scope="col">Item Category</th>
                                <th scope="col">Item Valuation</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map(item => <tr className="text-center">
                                <th scope="row">{item.id}</th>
                                <td>{item.description}</td>
                                <td>{item.make}</td>
                                <td>{item.category}</td>
                                <td>{item.valuation}</td>
                            </tr>
                            )}
                        </tbody>
                    </table>
                    {/* </div> */}
                </div>
            </div>
        </>
    ) : navigate('/');
}