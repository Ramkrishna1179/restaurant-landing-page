import React from 'react'
import { faStar, faWifi } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons';
export default function Footer() {
    const backgroundImageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQauSIZQNjo6yRKnGXiKthL_kSIgIK3IpjCgA&usqp=CAU';

    const divStyle = {
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: 'cover',
        width: '100%',
        height: '600px',
        display: "flex",
        justuifyContent: "center",
        alignItems: "center"
    };
    const FacebookIcon = () => <FontAwesomeIcon icon={faFacebook} />;
    const TwitterIcon = () => <FontAwesomeIcon icon={faTwitter} />;
    const GoogleIcon = () => <FontAwesomeIcon icon={faGoogle} />;
    return (
        <>
            <div style={divStyle} id="footer">
                <div className="container">
                    <div className="row display-flex justify-content-evenly">
                        <div className="col-4 bg-dark text-white my-4">
                            <h4 className='mt-4'>
                                Hours Of Operation
                            </h4>
                            <strong>
                                MON - FRI
                            </strong>
                            <p>
                                10:00am-01:00pm
                            </p>
                            <p>
                                04:00pm-10:30pm
                            </p>
                            <p style={{ borderBottom: "2px solid #c19442", width: "80%", margin: "auto" }}></p>
                            <strong>
                                SAT
                            </strong>
                            <p>
                                03:00pm-10:30pm
                            </p>
                            <p style={{ borderBottom: "2px solid #c19442", width: "80%", margin: "auto" }}></p>
                            <strong>
                                SUN
                            </strong>
                            <p>
                                We are closed
                            </p>
                            <button style={{ background: "#a37c0b" }} type="button" className="rounded-0 my-5 btn text-white">MAke Resevation</button>
                        </div>
                        <div className="col-4 bg-dark text-white my-4">
                            <h4 className='mt-4'>
                                Drop us a Line
                            </h4>
                            <p>
                                Don't be shy. Let us know if you have any questions!
                            </p>
                            <div className='mb-4'>
                                <button style={{ background: "#a37c0b" }} type="button" className="rounded-0 btn text-white text-center">Contact us</button>
                            </div>
                            <strong >
                                Our Newsletter
                            </strong>
                            <p className='mt-2'>
                                Dialogue is an essential part of any script
                            </p>

                            <form className='text-white text-start mx-4'>
                                <div class="">
                                    <input type="text" class="rounded-0 bg-light form-control" id="first_name" placeholder="First Name" name="first_name" style={{ color: "white" }} />
                                </div>
                                <div class="mt-3">

                                    <input type="email" class="rounded-0 bg-light form-control" id="email" placeholder="Enter email" name="email" />
                                </div>
                                <div class="mt-3">

                                    <input type="text" class="rounded-0 bg-light form-control" id="last_name" placeholder="Last Name" name="last_name" />
                                </div>
                                <div className='display-flex justify-content-center'>
                                    <button style={{ background: "#a37c0b" }} type="button" className="rounded-0 my-5 btn text-white w-100">Contact us</button>
                                </div>
                            </form>





                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid bg-dark text-secondary">
                <div className="row">
                    <div className="col-8">
                      <p className='mt-2'>
                      Designed elegant Themes by wordpress
                      </p>
                    </div>
                    <div className="col-3" style={{display:"flex",justifyContent:"space-evenly",alignItems:"center"}}>

                        <FacebookIcon />
                        <TwitterIcon />
                        <GoogleIcon />
                        <FontAwesomeIcon icon={faWifi} />

                    </div>
                    <div className="col-1"></div>

                </div>
            </div>
        </>
    )
}
