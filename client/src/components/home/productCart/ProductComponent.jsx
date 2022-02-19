import React from "react";
import axios from "axios";
import { ProductCard } from "./ProductCart";
import "./ProductCart.css"

const PRODUCTS_REST_API_URL = "http://localhost:8080/api/products";

class ProductComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            products:[]
        }
    }
    componentDidMount(){
        axios.get(PRODUCTS_REST_API_URL).then(resp => {this.setState({products:resp.data})});
    }
    render(){

        console.log(this.state.products)

        return(
                <div className="containerCards">
                    {this.state.products.map(
                            (product) => (<ProductCard
                                            key={product.id}
                                            data={product}
                                            id={product.id}/>)
                        )}
                </div>
        )
    } 
}
    
export default ProductComponent