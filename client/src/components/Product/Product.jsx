import React from "react";
import "./product.css";
import star from "../../assets/img/star-solid.svg"
import halfstar from "../../assets/img/star-half-stroke-solid.svg"

export const Product = (props) => {
  const {data, id}=props;
  let {productName, productDescription, productCategory, productPrice, productImg}=data;
  return (
    <div className="home">
        <div className="productCartExplicit" key={id}>
        <div className="productCartInfo">
          <div className="productName"><h2>{productName}</h2></div>
          <div className="productCategory">
            <h3>{productCategory}</h3>
            <div id="start">
                        <img src={star} alt=""/>
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={halfstar} alt=""/>
                     </div>
            </div>
          <div className="productDescription"><h4>{productDescription}</h4></div>
          <div className="productPrice"><h2>{parseInt(productPrice).toLocaleString("en-SP", {
                  style: "currency",
                  currency: "EUR",
                })}</h2></div>
          <div className="productContact"><button>Buy Now</button></div>
        </div>
        <div className="productCartImage">
            <img src={productImg} alt="ProductName" />
        </div>
      </div>
    </div>
  );
};
