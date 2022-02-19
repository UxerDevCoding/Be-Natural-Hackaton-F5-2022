import React from "react";
import { Navbar } from "./navbar/Navbar";
import { Footer } from "./footer/Footer";
import {Contacto} from "./contacto/Contacto";
import { Outlet } from "react-router-dom";

export const Main = () =>  {
    return (
        <div className="container-main"> 
            <Navbar/>
            <Outlet/>
            <Contacto />
            <Footer/>
        </div>
    )
}