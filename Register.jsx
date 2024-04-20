import React, { useState } from "react";
import { database } from '../firebase_config';
import "../../register.css"
import { getDocs } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";

const Register = () => {

    var [name, getName] = useState();
    var [email, getEmail] = useState();
    var [number, getNumber] = useState();
    var [address, getAddress] = useState();


    const setName = (e) => {
        getName(e.target.value);
    }

    const setEmail = (e) => {
        getEmail(e.target.value);
    }

    const setNumber = (e) => {
        getNumber(e.target.value);
    }

    const setAddress = (e) => {
        getAddress(e.target.value);
    }

    const value = collection(database, "UserDetails");
    const currentDate = new Date();

    const SubmitData = async (e) => {
        e.preventDefault();

        const dbvalue = await getDocs(value);
        const data = (dbvalue.docs.map(doc => ({ ...doc.data(), id: doc.id })));

        var flag = false;

        for (var i = 0; i < data.length; i++) {
            if (data[i].UserNumber == number) {
                flag = true;
            }

        }

        if (flag == true) {
            alert("mobile number is already exits");
        }
        else {
            alert("Registration Completed");
            await addDoc(value, {
                UserName: name,
                UserEmail: email,
                UserNumber: number,
                UserAddress: address,
                CreatedAt: currentDate.toDateString(),
            });
            console.log(name, email, number, address);
        }
    }

    return (
        <div className="Rcontiner">
            <div className="form-container">
                <form onSubmit={SubmitData}>
                    <input type="text" placeholder="Name" className="input" onChange={setName} required></input>
                    <input type="email" placeholder="Email" className="input" onChange={setEmail} required></input>
                    <input type="number" placeholder="Mobile No" className="input" onChange={setNumber} required></input>
                    <textarea placeholder="Address ..." onChange={setAddress} required></textarea><br></br>
                    <input type="submit" className="btnr"></input>
                </form>
            </div>

        </div>
    );
}

export default Register;