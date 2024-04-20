import { Select } from '@material-ui/core';
import React, { useState } from 'react';
import axios from 'axios';
import { database } from '../firebase_config';
import { getDocs } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import { useEffect } from 'react';
import Data from '../PunctureData';
import getDistance from 'geolib/es/getPreciseDistance';
import emailjs from "emailjs-com";
import { Check } from '@material-ui/icons';
import { GridLoader } from 'react-spinners';
import { CircularProgress } from '@mui/material';



const Puncture = () => {


    var [latitudes, setLatitudes] = useState();
    var [longitudes, setLongitudes] = useState();
    var [mobie_no, GetMobileNo] = useState("");
    var [item, SelectedItem] = useState("");
    var [name, getName] = useState("");
    var [prices, getPrice] = useState(
        {
            price: "",
            icon: "",
        }
    );
    var [vehicaltype, GetVehcialType] = useState("");
    var [location, getLocation] = useState("");
    var [price, setPrice] = useState(0);
    var checks;
    var review_name;
    var review_feedback;
    var [review_name_, getRName] = useState();
    var [review_feedback_, getFeedback] = useState('');
    var [RData, setRData] = useState('');
    var distance = [];
    var [loading,setIsLoading] = useState(false);

    const SendMessage = async(ServiceID , TemplateID , emailToSend) => {

        console.log("hello");
              const templateParams = {
                number: mobie_no,
                vt: vehicaltype,
                price: price,
                location : location,
                email : emailToSend,
              };
          
              try {
                setIsLoading(true);
                const response = await emailjs.send(
                  ServiceID,   // Replace with your service ID
                  TemplateID,  // Replace with your template ID
                  templateParams,
                  'MW1Tpxe8iNxclhSx6'       // Replace with your user ID
                );
          
                console.log('Email sent successfully:', response);
                setIsLoading(false);
                alert("We will reach you soon ..");

                checks = true;
              } catch (error) {
                console.error('Email sending error:', error);
                setIsLoading(false);
                alert("Something went wrong , Try again");
              }
            return false;
    }
    

    const getMobileNO = (e) => {
        GetMobileNo(e.target.value);
        navigator.geolocation.getCurrentPosition((position) => {
            setLatitudes(position.coords.latitude);
            setLongitudes(position.coords.longitude);

        })

        getLocation("https://www.google.com/search?q=" + latitudes + "%2C" + longitudes);
    }

    const getSelectedVehicalType = (e) => {
        GetVehcialType(e.target.value);

        if (e.target.value == "2 wheeler") {
            getPrice({
                price: "99",
                icon: <i class="fa-solid fa-indian-rupee-sign"></i>,
            });

            setPrice(99);
        }

        if (e.target.value == "3 wheeler") {
            getPrice({
                price: "139",
                icon: <i class="fa-solid fa-indian-rupee-sign"></i>,
            });
            setPrice(139);
        }

        if (e.target.value == "4 wheeler") {
            getPrice({
                price: "199",
                icon: <i class="fa-solid fa-indian-rupee-sign"></i>,
            });
            setPrice(199);
        }
    }
    const value = collection(database, "UserDetails");

    const checkCondition = async () => {
        console.log(item);
        console.log(vehicaltype);
        if (vehicaltype == "" || mobie_no == "") {
            alert("Please Select All the Conditions..")
        }
        else {
            if (mobie_no.length == 10) {
                const dbvalue = await getDocs(value);
                const data = (dbvalue.docs.map(doc => ({ ...doc.data(), id: doc.id })));

                var flag = false;

                for (var i = 0; i < data.length; i++) {
                    if (data[i].UserNumber == mobie_no) {
                        flag = true;
                    }

                }

                if (flag == true) {

                    for (i = 0; i < 2; i++) {
                        var dis = getDistance(
                            { latitude: latitudes, longitude: longitudes },
                            { latitude: Data[i].lat, longitude: Data[i].lon }
                        );

                        distance[i] = dis;
                    }

                    var minDistance = Math.min(...distance);
                    var index = distance.indexOf(minDistance);

                    if(index == 1 && Data[index].name == "puncture2")
                    {
                        SendMessage('service_n5d8twk','template_knbadoc','manjalpur.shop2@hotmail.com');
                        console.log("puncture2");
                    }
                    else if(index == 0 && Data[index].name == "puncture1")
                    {
                        SendMessage('service_vfbktp4','template_knbadoc','manjalpur.shop1@hotmail.com');
                        console.log("puncture1");
                        
                    }

                    console.log(distance[index]);
                    console.log(index);


                    // await new Promise(resolve => setTimeout(resolve, 8000));
                    // if (checks == true) {
                    //     alert("We will reach you soon ..");
                    // }
                    // else {
                    //     alert("Something went wrong , Try again");
                    // }

                }
                else {
                    window.location.reload();
                    if (window.confirm('New user!!   please Register once before use serivce')) {

                    }
                }
            }
            else {
                alert("Please Enter Valid Mobile Number")
            }

        }

    }


    // ############################### Review #########################################

    const getReviewName = (e) => {
        review_name = e.target.value;
        getRName(e.target.value);
    }

    const getReviewFeedBack = (e) => {
        review_feedback = e.target.value;
        getFeedback(e.target.value);
    }

    const Rvalue = collection(database, "UserReview");
    const RcurrentDate = new Date();

    const SubmitReview = async (e) => {
        getFeedback('');
        getRName('');
        e.preventDefault();

        alert("Thank You For Your Feedback ..");
        await addDoc(Rvalue, {
            UserName: review_name_,
            UserReview: review_feedback_,
            SubmitedAt: RcurrentDate.toDateString(),
        });

        window.location.reload();

    }

    useEffect(() => {
        const fetchData = async () => {
            const Rdbvalue = await getDocs(Rvalue);
            const Rdata = Rdbvalue.docs.map(doc => ({ ...doc.data(), id: doc.id }));
            setRData(Rdata);
        };

        fetchData();
    }, []);

    return (
        <>
            {loading && <div className='loder'><div className="loading-spinner"><GridLoader color="yellow" loading /></div><p className='pload'>Loading ...</p></div>}
            <div className='Pcontainer'>
                <h1 className='Ph1'>Puncture</h1>
                <div className='Pcontainers'>

                    <div className='Pcontainer2'>
                        <h2 className='Ph2'>Select Your Vehical Type</h2>
                        <select className='Pselect' onChange={getSelectedVehicalType} name="select">
                            <option>Select</option>
                            <option>2 wheeler</option>
                            <option>3 wheeler</option>
                            <option>4 wheeler</option>
                        </select>
                        <h3 className='Ph33'>Selected:-  {vehicaltype}</h3>
                        <h3 className='Pprice'>Price:- {prices.price} {prices.icon} </h3>

                        <input type="text" placeholder='Mobile No!' className='Pmobile' onChange={getMobileNO} required></input>
                        <button className='puncture' onClick={checkCondition}>Puncture</button>
                    </div>
                </div>
            </div>

            <div className='review'>
                <h1>Review</h1>

                <input type="text" className='review-name' placeholder='Enter Your name' onChange={getReviewName} value={review_name_}></input><br></br>
                <textarea value={review_feedback_} className='review-feedback' placeholder='Enter Your Feedback ..' onChange={getReviewFeedBack}></textarea><br></br>
                <button onClick={SubmitReview}>Submit</button> <br></br>

                {RData.length > 0 ? (
                    RData.map((item, index) => (
                        <>
                            <h3>{item.UserName}</h3> <p className='Rp'>{item.SubmitedAt}</p>
                            <p>{item.UserReview}</p>
                        </>
                    ))
                ) : (
                    <p>No reviews available.</p>
                )}

            </div>
        </>
    )
}

export default Puncture;