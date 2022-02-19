import React from "react";
import {Link} from 'react-scroll';
import { Link as LinkRoute } from "react-router-dom";
import "./navbar.css"
import naturalyLogo from "../../assets/img/leaft.png"
import login from "../../assets/img/login.png";
import PopupModal from "./modal/PopupModal";
import {useState} from "react";

export const Navbar = () => {
  const [buttonPopup, setButtonPopup] = useState(false);
  
  return (
    <header>
      <div className="banner">
        <div className="logoCompany"><img src={naturalyLogo} alt="NaturalyLogo" /></div>
        <div className="nameCompany"><h1 className="nameCompany">Be Natural</h1></div>
        <div className="sloganCompany"><h4>The best way to feel good</h4></div>
      </div>
      <div className="navbar">
        <ul className="navbarUl">
          <LinkRoute to={`/product/`}>Home</LinkRoute>
          <Link to={`black_hole`} smooth={true} offset={-70} duration={600}> <LinkRoute to={`/`}>Products</LinkRoute></Link>
          <Link to={`white_hole`} smooth={true} offset={-70} duration={500} >Contact</Link>
        </ul>
        <button className="login" onClick={() => setButtonPopup(true)}>
          <img src={login} alt="loginIco" />
          </button>
      </div>
      <PopupModal trigger={buttonPopup} setTrigger={setButtonPopup}>

      </PopupModal>
    </header>
  );
};
