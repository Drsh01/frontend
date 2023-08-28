import React from "react";
import { getItemsById } from "../../services/UserServices";
import "./ApplyLoan.css";
import { Link } from 'react-router-dom'
import { useAuth } from "../AuthProvider";

const images = {
    "Furniture": "single-product product-1 relative",
    "Crockery": "single-product product-2",
    "Stationery": "single-product product-3"
}

export default function ApplyLoan() {

    const [items, setItems] = React.useState();
    const { id } = useAuth();

    React.useEffect(() => {
        async function getItems() {
            let response = await getItemsById(id);
            setItems(response);
        }
        getItems();
    }, [id])

    return (
        <>
        
        <Link to="/user/dashboard" className="linkingComponent" style={{ marginTop: "150px", fontSize: "25px" }}>
                <i class="fas fa-arrow-left"></i> Back to Dashboard
        </Link>
        { items ? (
        <section className="section-products container">
            <div className="row" style={{ marginTop: "20px" }}>
                <h2 className="heading" style={{ background: 'linear-gradient(to right, #98FB98 50%, #40E0D0 50%)', margin: "0% 3%", marginBottom: "1%" }}>Items Purchased</h2>
                <hr />
                {items.map((item, index) => {
                    return (

                        <div key={index} className="col-md-6 col-lg-4" style={{ paddingBottom: "0px", paddingTop: "30px" }}>
                            <div className={images[item.itemCategory] ?? "single-product product-4"}>
                                <div className="part-1">
                                </div>
                                <div className="part-2">
                                    <div style={{ display: "flex", justifyContent: "space-between", padding: "0 5%" }}>
                                        <h5 className="product-title"><b>{item.itemDescription}</b></h5>
                                        <h5 className="product-category">{item.itemCategory}</h5>
                                    </div>
                                    <div style={{ display: "flex", justifyContent: "space-between", padding: "0 5%" }}>
                                        <h5 className="product-price"><b>{'\u20B9'} {item.itemValuation}</b></h5>
                                        <h5 className="product-make">{item.itemMake}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
                }
            </div>
        </section>
    ) : <div style={{ marginTop: "150px" }}>Nothing issued yet!!</div>}
    </>
)
}