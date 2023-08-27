import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import '../../StylesAddCustomerComponent.css'

import { Link, useParams } from 'react-router-dom';
import ItemService from '../AdminServices/ItemService'
import LoanCardService from '../AdminServices/LoanCardService'

const AddItemComponent = () => {

    const navigate = useNavigate();

    const [itemId, setItemId] = useState('')
    const [itemDescription, setItemDescription] = useState('')
    const [itemCategory, setItemCategory] = useState('Furniture')
    const [itemMake, setItemMake] = useState('Wooden')
    const [itemValuation, setItemValuation] = useState('')
    const [issueStatus, setIssueStatus] = useState('N')

    const [loanCards, setLoanCards] = useState([])

    const { id } = useParams();


    const handleSubmit = (e) => {
        saveOrUpdateItem(e);
    }

    const saveOrUpdateItem = (e) => {
        e.preventDefault();


        const item = { itemId, itemCategory, itemDescription, itemValuation, issueStatus, itemMake }

        if (id) {
            setItemId(id)
            ItemService.updateItem(id, item).then((response) => {
                navigate('/admin/items');
            }).catch(error => {
                console.log(error)
            })
        } else {
            ItemService.createItem(item).then((response) => {
                navigate('/admin/items');
            }).catch(error => {
                console.log(error)
            })
        }

    }

    useEffect(() => {

        getAllLoanCards();
        if (!id) {
            return;
        }
        if(itemDescription!==""){
            return;
        }
        // console.log("useEffect is being called");
        ItemService.getItemById(id).then((response) => {

            setItemId(response.data.id)
            setItemCategory(response.data.itemCategory)
            setItemDescription(response.data.itemDescription)
            setItemValuation(response.data.itemValuation)
            setIssueStatus(response.data.issueStatus)
            setItemMake(response.data.itemMake)
        }).catch(error => {
            console.log(error)
        })

    },[])


    const getAllLoanCards = () => {
        LoanCardService.getAllLoanCards().then((response) => {
            setLoanCards(response.data)
        }).catch(error => {
            console.log(error);
        })
    }
    // async function getAllLoanCards () {
    //     try{
    //         const response = await LoanCardService.getAllLoanCards();
    //             setLoanCards(response.data)
    //             console.log(response.data);
    //     }catch(error) {
    //         console.log(error);
    //     }
    // }


    const title = () => {

        if (id) {
            return <div>
            <h2 className="text-center">Update Item</h2>
            <h4>Item Id : {id}</h4>
            </div>
        } else {
            return <h2 className="text-center">Add Item</h2>
        }
    }

    return (

        <div className="page-content">
            <div className="container">
                <div className="form-container">
                <div className="title-header">{title()}</div>
                    <form>
                        <div className="form-group">
                            <label htmlFor="item category">Item Category</label>

                            <select id="itemCategory" className="form-control"
                                value={itemCategory}
                                placeholder="Pleae choose your item category here.."
                                onChange={(e) => setItemCategory(e.target.value)}>
                                {loanCards.map((loanCard, index) => (
                                    <option key={index} value={loanCard['loanType']}>
                                        {loanCard['loanType']}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="loanType">Item Description</label>
                            <input
                                type="text"
                                placeholder="Enter item decription"
                                name="decription"
                                className="form-control"
                                value={itemDescription}
                                onChange={(e) => setItemDescription(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="loanType">Item Valuation</label>
                            <input
                                type="text"
                                placeholder="Enter item valuation"
                                name="Valuation"
                                className="form-control"
                                value={itemValuation}
                                onChange={(e) => setItemValuation(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="issueStatus">Issue Status</label>
                            <select id="issueStatus" className="form-control"
                                value={issueStatus}
                                placeholder="Pleae choose your issue status here.."
                                onChange={(e) => setIssueStatus(e.target.value)}>
                                <option value="N">N</option>
                                <option value="Y">Y</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="itemMake">Item Make</label>
                            <select id="itemMake" className="form-control"
                                value={itemMake}
                                placeholder="Pleae choose your item make here.."
                                onChange={(e) => setItemMake(e.target.value)}>
                                <option value="Wooden">Wooden</option>
                                <option value="Metal">Metal</option>
                                <option value="Plastic">Plastic</option>
                                <option value="Glass">Glass</option>
                                <option value="Rubber">Rubber</option>
                                <option value="Clay">Clay</option>
                            </select>
                        </div>
                        <button className="btn btn-success" onClick={handleSubmit}>Submit </button>
                        <Link to="/admin/items" className="btn btn-danger"
                            style={{ marginLeft: "10px" }}> Cancel </Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddItemComponent
