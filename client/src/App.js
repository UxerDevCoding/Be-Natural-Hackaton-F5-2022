import React from "react";
import {Route, Routes, Navigate} from "react-router-dom";
import { Home } from "./components/home/Home";
import {Main} from "./components/main";
import "./components/main.css";
import ScrollToTop from "./assets/Data/ScrollToTop";
import ProductComponentExplicit from "./components/Product/ProductComponent"

function App() {
  return (
    <ScrollToTop>
    <Routes>
      <Route path="/" element={<Main/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/product/:id" element={<ProductComponentExplicit/>}/>
        <Route path="*" element={<Navigate replace to="/" />} />
      </Route>
    </Routes>
    </ScrollToTop>
  );
}

export default App;
