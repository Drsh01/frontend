import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './ManageCustomer.css'
import ItemService from '../AdminServices/ItemService'

export default function ManageItems() {
    const [items, setItems] = useState([])

    useEffect(() => {
        getAllItems();
    }, [])

    const getAllItems = () => {
        ItemService.getAllItems().then((response) => {
            setItems(response.data)
        }).catch(error => {
            console.log(error);
        })
    }

    const deleteItem = (item_id) => {
        ItemService.deleteItem(item_id).then((response) => {
            getAllItems();
            alert("Are you sure you, item would be deleated")
        }).catch(error => {
            console.log(error);
        })

    }
    return (
        <>
            <div className="container" style={{ marginTop: "150px" }}>
                <div className="row" style={{ backgroundColor: "white" }}>
                    <h2 style={{ background: 'linear-gradient(to right, #98FB98 50%, #40E0D0 50%)' }}>Item Master Details</h2>
                    <hr />
                    <table className="table table-striped table-bordered border-primary">
                        <thead className="table-primary">
                            <tr className="text-center">
                                <th scope="col">Item Id</th>
                                <th scope="col">Item Category</th>
                                <th scope="col">Item Description</th>
                                <th scope="col">Issue Status</th>
                                <th scope="col">Item Make</th>
                                <th scope="col">Item value</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map(item => <tr className="text-center">
                                <td>{item["itemId"]}</td>
                                <td>{item["itemCategory"]}</td>
                                <td>{item["itemDescription"]}</td>
                                <td>{item["issueStatus"]}</td>
                                <td>{item["itemMake"]}</td>
                                <td>{item["itemValuation"]}</td>
                                {/* {
                                    Object.keys(item).map((key) => <td>{item[key]}</td>)
                                } */}
                                <td>
                                    <Link className="inlineLink" to={`/admin/edit-item/${item.itemId}`} ><i className="material-icons">&#xE254;</i></Link>
                                    <button className="inlineButton" onClick={() => deleteItem(item.itemId)}
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
                        <Link to="/admin/add-item" className="btn" >
                            <button type="button" className="btn btn-info add-new">
                                <i className="fa fa-plus"></i> Add New</button>
                        </Link>
                    </div>
                </div>
            </div> */}
            <Link to="/admin/add-item" className="linkingComponent" >
                <button className="custom-button">Add New</button>
            </Link>
        </>
    )
}