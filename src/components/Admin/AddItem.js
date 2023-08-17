import React from "react";

const itemCategories = [
    "Furniture",
    "Stationary",
    "Crockery"
];

const itemMake = [
    "Wooden",
    "Glass",
    "Plastic"
];

const status = [
    "Yes",
    "No"
]

export default function AddItem() {

    const [itemDescription, setItemDescription] = React.useState('');
    const [itemMakeValue, setItemMakeValue] = React.useState(itemMake[0]);
    const [itemCategory, setItemCategory] = React.useState(itemCategories[0]);
    const [itemValue, setItemValue] = React.useState('');

    const handleSubmit = () => {
        console.log(itemDescription, itemMakeValue, itemCategory, itemValue);
    }

    return (
        <div className="container text-center" style={{ marginTop: "120px" }}>
            <h2>Add Item</h2>
            <form className="border col-xs-12 col-sm-10 col-8 mx-auto">
                <div className="row">
                    <div className="form-outline form-inline my-4 col-6">
                        <label className="form-label col-6">Item Id</label>
                        <input className="form-control col-6" type="number" disabled value={1} />
                    </div>
                    <div className="form-outline form-inline my-4 col-6">
                        <label className="form-label col-6">Item Category</label>
                        <select className="select col-xs-8 col-sm-6 col-4" onChange={(e) => setItemCategory(e.target.value)} >
                            {itemCategories.map((category, index) => <option key={index} value={category}>{category}</option>)}
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="form-outline form-inline mb-4 col-6">
                        <label className="form-label col-6">Item Description</label>
                        <input className="form-control col-6" type="text" onChange={(e) => setItemDescription(e.target.value)} />
                    </div>
                    <div className="form-outline form-inline mb-4 col-6">
                        <label className="form-label col-6">Item Value</label>
                        <input className="form-control col-6" type="text" onChange={(e) => setItemValue(e.target.value)} />
                    </div>
                </div>
                
                <div className="row">
                
                <div className="form-outline form-inline mb-4 col-6">
                    <label className="form-label col-6">Item Status</label>
                    <select className="select col-xs-8 col-sm-6 col-4" onChange={(e) => setItemMakeValue(e.target.value)} >
                        {status.map((make, index) => <option key={index} value={make}>{make}</option>)}
                    </select>
                </div>
                <div className="form-outline form-inline mb-4 col-6">
                    <label className="form-label col-6">Item Make</label>
                    <select className="select col-xs-8 col-sm-6 col-4" onChange={(e) => setItemMakeValue(e.target.value)} >
                        {itemMake.map((make, index) => <option key={index} value={make}>{make}</option>)}
                    </select>
                </div>
                </div>

                <button type="button" className="btn btn-success btn-block col-3 mb-4" onClick={handleSubmit}>Add Item</button>
            </form>
        </div>
    );
}