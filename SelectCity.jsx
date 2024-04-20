import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../city.css';

const SelectCity = () => {
    return (
        <>
            <div className='cities'>
                <h1>Select Your Current City</h1>
                <div className='city'>
                    <div className='ccard ccard1'>
                        <h1>Anand</h1>
                    </div>
                    <div className='ccard ccard2'>
                        <h1>Ahmedabad</h1>
                    </div>
                    <div className='ccard ccard3'>
                        <h1>Bhavnagar</h1>
                    </div>
                    <div className='ccard ccard4'>
                        <h1>Gandhinagar</h1>
                    </div>
                    <div className='ccard ccard5'>
                        <h1>Gandhidham</h1>
                    </div>
                    <div className='ccard ccard6'>
                        <h1>Jamnagar</h1>
                    </div>
                    <div className='ccard ccard7'>
                        <h1>Junagadh</h1>
                    </div>
                    <div className='ccard ccard8'>
                        <h1>Rajkot</h1>
                    </div>
                    <div className='ccard ccard9'>
                        <h1>Surat</h1>
                    </div>
                    <NavLink to={"/Vadodara"} className="nav">
                    <div className='ccard ccard10'>
                        <h1>Vadodara</h1>
                    </div>
                    </NavLink>
                    
                </div>
            </div>  
        </>
    );
}

export default SelectCity;