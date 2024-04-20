import React from "react";
import { NavLink } from "react-router-dom";

const SelectState = () =>{

    return (
        <>
            <div className='states'>
                <h1>Select Your Current State</h1>
                <div className='state'>
                    <NavLink to={"/cities"} className="nav"><div className='card card1'>
                        <h1>Gujarat</h1>
                    </div>
                    </NavLink>
                    <div className='card card2'>
                        <h1>Assam</h1>
                    </div>
                    <div className='card card3'>
                        <h1>Andhra pradesh</h1>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SelectState;

