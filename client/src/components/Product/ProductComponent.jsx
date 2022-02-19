import React from "react";
import axios from "axios";
import { Product } from "./Product";

const PRODUCTS_REST_API_URL = "http://localhost:8080/api/products";

class ProductComponentExplicit extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            products:[]
        }
        this.url = (window.location.href.split('/').reverse()[0])
    }
    componentDidMount(){
        axios.get(PRODUCTS_REST_API_URL).then(resp => {this.setState({products:resp.data})});
    }
    render(){

        console.log(this.state.products)

        return(
                <div>
                    {this.state.products.map(
                            (product) => product.id === parseInt(this.url) ? (<Product
                                            key={product.id}
                                            data={product}/>):null
                        )}
                </div>
        )
    } 
}
    
export default ProductComponentExplicit