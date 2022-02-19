import React, {useEffect} from "react";
import "./menuhome.css";
import Aos from "aos";
import "aos/dist/aos.css";

export const MenuHome = () =>  {
    useEffect(() => {
        Aos.init({duration: 3000});
    },[]);

    return (
        <div> 
            <div id="black_hole">black_hole</div>
            <div className="menuHome" id="scroll2products"> 
            
            <h4>Categories</h4>
                <ul>
                    <button className="all">All</button>
                    <button>Products</button>
                    <button>Experiences</button>
                </ul>
            </div>
        </div>
        
    )
}