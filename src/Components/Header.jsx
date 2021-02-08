import React from 'react';
import {Route , Switch} from "react-router-dom";

const Header = () => {
    return (
        <>
        <nav>
            <div className = "logo">Smartphone Store</div>
            <ul>
            
                <li>Home</li>
                <li> Products</li>
                <li>About Us</li>
                <li>Contact</li>
               
            </ul>
            <div className= "search">
                <i className = "fa fa-search"></i>
                <i className = "fa fa-shopping-basket"></i>
            </div>

        </nav>
          
        </>
    );
}

export default Header;