
const Items = [
    { 
        "Item_id": 1,
        "Description":"Tea table",
        "Issue_Status":"Y",
        "Item_Make":"Wooden",
        "Item_Category": "Furniture",
        "Item_Valuation": 5,
    },
    {
        "Item_id": 1,
        "Description":"Tea table",
        "Issue_Status":"Y",
        "Item_Make":"Wooden",
        "Item_Category": "Furniture",
        "Item_Valuation": 5,
    },
    {
        "Item_id": 1,
        "Description":"Tea table",
        "Issue_Status":"Y",
        "Item_Make":"Wooden",
        "Item_Category": "Furniture",
        "Item_Valuation": 5,
        
    },
]



export default function ManageItems() {
    return (
        <div className="container" style={{ marginTop: "120px" }}>
            
            <div className="row">
                <h2 style={{ background: 'linear-gradient(to right, #98FB98 50%, #40E0D0 50%)' }}>Item Details</h2>
                <hr />
                <table className="table table-striped table-bordered border-primary">
                    <thead className="table-primary">
                        <tr className="text-center">
                            <th scope="col">Item Id</th>
                            <th scope="col">Description</th>
                            <th scope="col">Issue Status</th>
                            <th scope="col">Item Make</th>
                            <th scope="col">Item Category</th>
                            <th scope="col">Item Valuation</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Items.map(item => <tr className="text-center">
                            {
                                Object.keys(item).map((key) => <td>{item[key]}</td>)
                            }


<td>
<a href="/admin/items/update" className="btn" ><i class="material-icons">&#xE254;</i></a>
<a href="/admin/items"  className=" btn ms-1"><i class="material-icons">&#xE872;</i></a>
                                            </td>

                        </tr>
                        )}
                    </tbody>
                </table>
            
        <a href="/admin/items/add" className="btn btn-primary col-1">Add</a>
        

            </div>
        </div>
    );
}