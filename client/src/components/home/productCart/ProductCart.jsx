import React from "react";
import { Link } from "react-router-dom";
import "./ProductCart.css"
import star from "../../../assets/img/star-solid.svg"
import halfstar from "../../../assets/img/star-half-stroke-solid.svg"


export const ProductCard = (props) =>  {
    const {id, data}=props;
    let {productName, productPrice, productImg}=data;
    return (
            <div className="card">
               <img src={productImg} id="icard"/>
                <div className="card-body">
                    <div id="boder">
                     <h3 className="card-title"> {productName} </h3>
                     <div id="star">
                        <img src={star} alt=""/>
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={halfstar} alt=""/>
                     </div>
                     
                    </div>
                     <h5 id="price">{parseInt(productPrice).toLocaleString("en-SP", {
                  style: "currency",
                  currency: "EUR",
                })}</h5>
                     <button id="botonplan"><Link to={'/product/'+ id}>Join Now</Link></button>
               </div>
           </div>
           
        
    )
}