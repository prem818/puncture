import React, { useState } from "react";
import "../index.css";
import { NavLink } from "react-router-dom";
import Typical from 'react-typical';


const HomePage = () => {

    return (
        <>
             <div className="section">
                <div className="home-content">
                    <div className="content">
                        <p className="h-p">Best Quality Services</p>
                        <Typical className="typical" loop={Infinity} steps={[`Let's Service Your Vehicle`,1000,`Keep Your Vehicle in Prime Condition`, 1000, `Put Your Vehicle in the Best Hands`, 1000, 'Maintain, Repair, and Enhance Your Ride with Us']}></Typical>
                        <p className="h-p1">our services will help you in any situations</p>
                        <NavLink className="navlink" to="services">GET STARTED</NavLink>
                    </div>
                    <div className="image">
                        <img src="./images/home.jpg" width="400"></img>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomePage;