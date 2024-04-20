import React from "react";
import HomePage from "./HomePage";
import Services from "./Components/Services";
import Navbar from "./Components/Navbar";
import "../index.css";
import { Route, Routes } from "react-router-dom";
import SelectCity from "./Components/SelectCity";
import SelectState from "./Components/SelectState";
import Puncture from "./Components/Puncture";
import Register from "./Components/Register";
import Contact from "./Components/Contact";
import About from "./Components/About";

const App = () =>{
    return(
        <>
        <Navbar></Navbar>

            <Routes>
                <Route path="/" element={<HomePage></HomePage>}></Route>
                <Route path="/services" element={<Services></Services>}></Route>
                <Route path="/puncture" element={<Puncture></Puncture>}></Route>
                <Route path="/register" element={<Register></Register>}></Route>
                <Route path="/contact" element={<Contact></Contact>}></Route>
                <Route path="/about" element={<About></About>}></Route>
                

            </Routes>
        </>
    );
}

export default App;