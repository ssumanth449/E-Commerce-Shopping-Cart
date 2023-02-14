import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/Shop">
        <div className="ml-5">
            <h3 >SHOP-HAPPY
            </h3>
          </div>          
        </Link>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/Shop"> Home </Link>
        <Link to="/cart"> Add to 
          <ShoppingCart size={42} />
        </Link>
        <Link to="/AboutUs"> About Us </Link>
        <Link to="/privacy"> Privacy Policy </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/Terms"> Terms And Conditions </Link>
        <Link to="/Login"> Login </Link>


      </div>
    </div>
  );
};
