import React from 'react';

const About = () => {
    return (
        <>
            <div className='about'>
                <div className='adiv'><h1 className='ah1'>About Us</h1></div>

                <div className='a_information'>
                    <p>Welcome to Puncture Wala. We're here to make your life easier with a range of essential services. Whether you need help with a flat tire, a crane for heavy lifting, a missing key, or a refill of petrol, we've got you covered. Our team is dedicated to providing quick and reliable assistance whenever you need it. Your satisfaction is our top priority, and we're proud to be your go-to service provider. Thanks for choosing us, and we can't wait to assist you!</p>
                </div>

                <div className='a-ourteam'><h1 className='a-ourteams'>Our Team</h1></div>

                <div className='grid-ourteam'>
                    <div className='member1'>
                        <div className="avatar">
                            <img src="./images/p1.jpg" alt="Avatar"></img>
                        </div>

                        <h2>Nisarg Patel</h2>
                        <p className='a-role'>(Founder)</p>

                        <p className='a-description'>I'm a proficient Full-Stack Web Developer with a huge interest in JavaScript. I built several projects in web development using MERN-STACK. I completed a diploma in Information Technology and Engineering from Parul UniverSity in 2019.</p>
                    </div>


                    <div className='member1'>
                        <div className="avatar">
                            <img src="./images/om1.jpg" alt="Avatar"></img>
                        </div>

                        <h2>Om Malu</h2>
                        <p className='a-role'>(Co-Founder)</p>

                        <p className='a-description'>I'm a proficient Full-Stack Web Developer with a huge interest in JavaScript. I built several projects in web development using MERN-STACK. I completed a diploma in Information Technology and Engineering from Parul UniverSity in 2019.</p>
                    </div>


                    <div className='member1'>
                        <div className="avatar">
                            <img src="./images/pp.jpg" alt="Avatar"></img>
                        </div>

                        <h2>User</h2>
                        <p className='a-role'>(IT HEAD)</p>

                        <p className='a-description'>I'm a proficient Full-Stack Web Developer with a huge interest in JavaScript. I built several projects in web development using MERN-STACK. I completed a diploma in Information Technology and Engineering from Parul UniverSity in 2019.</p>
                    </div>
                </div>

                <div className="a-whyChoose">
                    <div className='a-why-divide'>
                        <div className='a-why-image'>
                            <img src="./images/why.png" ></img>
                        </div>

                        <div className="a-why-content">
                            <h1>Why Choose Us ?</h1>

                            <div className='a-why-point'>
                                <img src="./images/checklist.png" width="35px"></img>
                                <p>No Hidden Cost</p>
                            </div>

                            <div className='a-why-point'>
                                <img src="./images/checklist.png" width="35px"></img>
                                <p>Fast And Affordable Repair Services</p>
                            </div>

                            <div className='a-why-point'>
                                <img src="./images/checklist.png" width="35px"></img>
                                <p>Best Quality Services</p>
                            </div>

                            <div className='a-why-point'>
                                <img src="./images/checklist.png" width="35px"></img>
                                <p>All Types Of Vehicle Services</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="a-count">
                    <div className='a-continer'>
                        <div className='a-container-count'>
                            <img src="./images/client.png"></img><br></br>
                            <p>Happy Users</p>
                            <h1>238</h1>
                        </div>

                        <div className='a-container-count'>
                        <img src="./images/repair.png" className='a-repair'></img><br></br>
                            <p className='p-a'>Vehicle Repaired</p>
                            <h1>45</h1>
                        </div>

                        <div className='a-container-count'>
                        <img src="./images/rating.png" className='a-repair'></img><br></br>
                            <p className='p-a'>Rating</p>
                            <h1>4.5</h1>
                        </div>

                        <div className='a-container-count'>
                        <img src="./images/staff.png" className='a-repair'></img><br></br>
                            <p className='p-a'>Qualified Staffs</p>
                            <h1>40</h1>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default About;