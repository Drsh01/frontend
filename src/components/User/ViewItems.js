import React from "react";
import { getItemsById } from "../../services/UserServices";
import "./ApplyLoan.css";
import { useAuth } from "../AuthProvider";

const images = {
    "Furniture": "single-product product-1 relative",
    "Crockery": "single-product product-2",
    "Stationery": "single-product product-3"
}

export default function ApplyLoan() {

    const [items, setItems] = React.useState(null);
    const { id } = useAuth();

    React.useEffect(() => {
        async function getItems() {
            let response = await getItemsById(id);
            setItems(response);
        }
        getItems();
    }, [])

    return items ? (
        <section className="section-products">
            <div className="row" style={{ marginTop: "100px" }}>
                <h2 className="heading" style={{ background: 'linear-gradient(to right, #98FB98 50%, #40E0D0 50%)', margin: "0% 3%", marginBottom: "1%" }}>Items Purchased</h2>
                <hr />
                {items.map((item) => {
                    return (

                        <div className="col-md-6 col-lg-4" style={{ paddingBottom: "0px", paddingTop: "30px" }}>
                            <div className={images[item.itemCategory] ?? "product-4"}>
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
    ) : <div style={{ marginTop: "150px" }}>Nothing issued yet!!</div>

}