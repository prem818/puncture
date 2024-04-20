import React from "react";
import { NavLink} from "react-router-dom";

const Services = () => {

    const SoonAvailable = () =>{
        alert("This Service Will Available Soon ..")
    }

    return (
        <>
            <div className="services">

                <NavLink className="Snavlink" to="/puncture">
                    <div className="Scard1">
                        <img className="Sicon" src="./images/puncture.png"></img>
                        <p className="Sserive-name">Puncture</p>
                    </div>
                </NavLink>

                {/* <NavLink className="Snavlink" >
                    <div className="Scard1">
                        <img className="Sicon" src="./images/crane.png"></img>
                        <p className="Sserive-name">Crane Service</p>
                    </div>
                </NavLink>
                <NavLink className="Snavlink">
                    <div className="Scard1">
                        <img className="Sicon" src="./images/car-washing.png"></img>
                        <p className="Sserive-name">Car washing</p>
                    </div>
                </NavLink>

                <NavLink className="Snavlink">
                    <div className="Scard1">
                        <img className="Sicon" src="./images/petrol-desal.png"></img>
                        <p className="Sserive-name">Petrol & Diesel</p>
                    </div>
                </NavLink>

                <NavLink className="Snavlink">
                    <div className="Scard1">
                        <img className="Sicon" src="./images/full-service.png"></img>
                        <p className="Sserive-name">Full Service</p>
                    </div>
                </NavLink>

                <NavLink className="Snavlink">
                    <div className="Scard1">
                        <img className="Sicon" src="./images/key.png"></img>
                        <p className="Sserive-name">Keys Service</p>
                    </div>
                </NavLink> */}

                
                    <div className="Scard1" onClick={SoonAvailable}>
                        <img className="Sicon" src="./images/crane.png"></img>
                        <p className="Sserive-name">Crane Service</p>
                    </div>
                
                
                    <div className="Scard1" onClick={SoonAvailable}>
                        <img className="Sicon" src="./images/car-washing.png"></img>
                        <p className="Sserive-name">Car washing</p>
                    </div>
                

                
                    <div className="Scard1" onClick={SoonAvailable}>
                        <img className="Sicon" src="./images/petrol-desal.png"></img>
                        <p className="Sserive-name">Petrol & Diesel</p>
                    </div>
                

                
                    <div className="Scard1" onClick={SoonAvailable}>
                        <img className="Sicon" src="./images/full-service.png"></img>
                        <p className="Sserive-name">Full Service</p>
                    </div>
                

                
                    <div className="Scard1" onClick={SoonAvailable}>
                        <img className="Sicon" src="./images/key.png"></img>
                        <p className="Sserive-name">Keys Service</p>
                    </div>
                






            </div>
        </>
    );
}

export default Services;