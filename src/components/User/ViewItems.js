const items = [
    {
        "id": 1,
        "description": "TEA TABLE",
        "make": "Wooden",
        "category": "Furniture",
        "valuation": 5000,
        "image": "https://media.designcafe.com/wp-content/uploads/2021/12/27144355/design-cafe-modular-furniture-benefits.jpg"
    },
    {
        "id": 2,
        "description": "TEA SET",
        "make": "Glass",
        "category": "Crockery",
        "valuation": 2000,
        "image": "https://hmhub.in/wp-content/uploads/2018/07/porcelain-3383050_1280.jpg"
    },
    {
        "id": 3,
        "description": "GEOMETRY BOX",
        "make": "Plastic",
        "category": "Stationery",
        "valuation": 1000,
        "image": "https://nationaltoday.com/wp-content/uploads/2022/07/12-World-Stationery-Day-1200x834.jpg.webp"
    },
    {
        "id": 4,
        "description": "DINING SET",
        "make": "Wooden",
        "category": "Furniture",
        "valuation": 5000,
        "image": "https://media.designcafe.com/wp-content/uploads/2021/12/27144355/design-cafe-modular-furniture-benefits.jpg"
        
    },
    {
        "id": 5,
        "description": "SKETCH PEN",
        "make": "Plastic",
        "category": "Stationery",
        "valuation": 500,
        "image": "https://nationaltoday.com/wp-content/uploads/2022/07/12-World-Stationery-Day-1200x834.jpg.webp"
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

    return (
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
            <div className="row">
                <h2 style={{ background: 'linear-gradient(to right, #98FB98 50%, #40E0D0 50%)' }}>Items Purchased</h2>
                <hr />
                <div class="row">
                {items.map(item =>
                    <div class="card" style={{ width: "25rem", marginRight: "1%", marginLeft: "1%", marginBottom: "1.5%", padding: "0", backgroundColor: "cyan"}}>
                        <img class="card-img-top img-fluid w-100 h-100" src={item.image} alt="Card image cap" style={{height: "50vw"}}></img>
                        <div class="card-body" style={{padding: "0", fontWeight: "bold"}}>
                            <h2 class="card-title" style={{textAlign: "center", fontFamily: "Book Antiqua", fontSize: "150%", fontWeight: "bold", color: "black", paddingTop: "5px"}}>{item.description}</h2>
                            {/* <p class="card-text">This is the description.</p> */}
                        </div>
                        <ul class="list-group list-group-flush">
                        <li class="list-group-item" style={{paddingBottom: "0", fontSize: "150%", fontFamily: "Book Antiqua", backgroundColor: "cyan"}}>Category: {item.category}</li>
                        <li class="list-group-item" style={{paddingBottom: "0", fontSize: "150%", fontFamily: "Book Antiqua", backgroundColor: "cyan"}}>Make: {item.make}</li>
                        <li class="list-group-item" style={{paddingBottom: "0", fontSize: "150%", fontFamily: "Book Antiqua", backgroundColor: "cyan"}}>Price: {'\u20B9'} {item.valuation}/-</li>
                        </ul>
                    </div>
                )}
                </div>
            </div>
        </>
    );
}