import React, { useRef } from "react";
import './Homepage.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import useCitySelect from './useCitySelect';

function Homepage() {
    const sliderRef = useRef(null);
    // useCitySelect(selectRef);

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };

    return (
        <div>
            <div className="main-homepage">
                
                <div className="carosel">
                    <Slider ref={sliderRef} {...settings}>
                        <div>
                            <img className="casarol-img1" src={require(`../Images/casarol-img2.webp`)} style={{ width: "100%" }} alt="" />
                        </div>
                        <div>
                            <video className="video-c" autoPlay loop playsInline muted style={{ width: "100%" }}>
                                <source src={require(`../Images/casarol-vid1.mp4`)} type="video/mp4" />
                            </video>
                        </div>
                        <div>
                            <img className="casarol-img1" src={require(`../Images/casarol-img3.webp`)} style={{ width: "100%" }} alt="" />
                        </div>
                    </Slider>
                    {/* <img src={require(`../Images/casarol-img3.webp`)} alt="" /> */}
                </div><br />
                
                <div className="top-images-div">
                    <div><img className="photo-top-left" src={require(`../Images/photo-top-left.jpg`)} alt="" /></div>
                    <div className="photo-top-right">
                        <img className="photo-top-right-1" src={require(`../Images/photo-top-right-1.webp`)} alt="top-rigth-photo" />
                        <img className="photo-top-right-1" src={require(`../Images/photo-top-right-2.webp`)} alt="top-rigth-photo" />
                    </div>
                </div>
                <br />
                <div className="middle-vid-div">
                    <video className="video-middle" autoPlay loop playsInline muted>
                        <source src={require(`../Images/video-middle.mp4`)} type="video/mp4" />
                    </video>
                    <img className="arrow-img" src={require(`../Images/arrow.png`)} alt="" />
                </div><br />
                <div className="pill-part">
                    <div className="pill-row">
                            <img className="pill-photo" src={require(`../Images/pill-photo-1.png`)} alt="pill-photo" />
                              <img className="pill-photo" src={require(`../Images/pill-photo-2.png`)} alt="pill-photo" />
                            <img className="pill-photo" src={require(`../Images/pill-photo-3.png`)} alt="pill-photo" />
                    </div>
                    <div className="pill-row">
                        <img className="pill-photo" src={require(`../Images/pill-photo-4.png`)} alt="pill-photo" />
                        <img className="pill-photo" src={require(`../Images/pill-photo-5.png`)} alt="pill-photo" />
                        <img className="pill-photo" src={require(`../Images/pill-photo-6.png`)} alt="pill-photo" />
                    </div>
                </div>
                <div>
                    <div className="effect-part-div">
                        <img className="effect-photo-side" src={require(`../Images/effect-photo1.webp`)} alt="effect-photo" />
                        <div className="effect-mid">
                            <img className="effect-photo-mid" src={require(`../Images/effect-photo2.webp`)} alt="effect-photo" />
                            <div className="view-btn-div"><button className="view-btn">View All Collections</button></div>
                        </div> 
                        <img className="effect-photo-side" src={require(`../Images/effect-photo3.webp`)} alt="effect-photo" />
                    </div>
                </div>
                <div className="four-img-div">
                    <div className="four-img-row">
                        <img className="four-img" src={require(`../Images/four-img-2.jpg`)} alt="four-img" />
                        <img className="four-img" src={require(`../Images/four-img-1.jpg`)} alt="four-img" />
                    </div>
                    <div className="four-img-row">
                        <img className="four-img" src={require(`../Images/four-img-3.jpg`)} alt="four-img" />
                        <img className="four-img-webp" src={require(`../Images/four-img-4.jpg`)} alt="four-img" />  {/* Can put .gif here If want animations */}
                    </div>
                </div>
                <div className="trail-img-div">
                    <div className="trail-img-div-1">
                        <div className="trail-img1-contents">
                            <p style={{fontWeight: "medium", fontSize: "22px"}}>Unsure Which<br/>   Design To Pick?</p>
                            <br /><br />
                            <p style={{fontWeight: "100"}}>Book A FREE Home Trail!</p><br /><br />
                            <button className="appointment-btn">Schedule Appointment</button>
                        </div>
                        <img className="trail-img-1" src={require(`../Images/trail-photo1.jpg`)} alt="trail-photo" />
                    </div>
                    <div className="trail-img-div-2">
                        <div className="trail-img2-contents">
                            <p style={{fontWeight: "medium", fontSize: "22px"}}>Come visit us at any<br/>   of our stores!</p>
                            <br /><br /><br />
                            <select name="city" id="">
                                <option disabled selected value="">Enter City</option>
                                <option value="Delhi">Delhi</option>
                                <option value="Mumbai">Mumbai</option>
                                <option value="Kolkata">Kolkata</option>
                                <option value="Chennai">Chennai</option>
                            </select>
                        </div>
                        <img className="trail-img-2" src={require(`../Images/trail-photo2.jpg`)} alt="trail-photo" />
                    </div>
                </div>
                <div className="old-gold-div">
                    <img className="old-gold-img" src={require(`../Images/OLD-GOLD.png`)} alt="Old-gold" />
                    <div className="old-gold-content">
                        <h1>Your precious gold. Our new designs!</h1><br />
                        <hr className="design-hr" style={{margin: "0 65% 0 16%" }} />
                        <hr className="design-hr" style={{margin: "1% 68% 0 12%" }} /><br /><br />
                        <p className=""> - A Gold Exchange Program that lets you preserve your memories and make new ones!<br/>  
                            Please note: 
                            The old gold doesn’t have to be from only CaratLane, it can be any gold jewellery you have.  </p><br /><br />
                            <button className="knowmore-oldgold-btn">Know more</button>
                    </div>
                </div>
                <div className="Trust-div">
                    <img className="Trust-purple-img" src={require(`../Images/True-purple.png`)} alt="Old-gold" /><br />
                    <p>The highest quality of craftsmanship and innovation,<br />
                        that brings you modern, everyday designs</p><br />
                    <button className="knowmore-trust-btn">Know more</button>
                </div>
                <div className="best-of-caratlane-div">
                    <div className="title-div">
                        <p>Best of CaratLane</p>
                        {/* <hr className="design-hr" style={{margin: "0 65% 0 16%" }} />
                        <hr className="design-hr" style={{margin: "1% 68% 0 12%" }} /> */}
                        <div className="gender-hover-btn-div">
                            <p className="female">Female</p>
                            <p className="male">Male</p>
                        </div>
                    </div>
                </div>
                <br /><br /><br /><br /><hr />
                <div className="perks-div">
                    <div className="row1">
                        <div className="truck-div">
                            <img src={require(`../Images/truck-no-bg.png`)} alt="Truck" />
                            <div className="content">
                                <h3>100% Certified & Free Shipping</h3><br /><br />
                                <p>Our jewellery always comes with a certificate of authentication.</p>
                            </div>
                        </div>
                        <div className="spinned-div">
                            <img src={require(`../Images/spinned-no-bg.png`)} alt="Spinned" />
                            <div className="content">
                                <h3>15 Day Money-Back</h3><br /><br />
                                <p>Get 100% refund if you don't like your jewellery.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row2">
                        <div className="hand-div">
                            <img src={require(`../Images/hand-no-bg.png`)} alt="Hand" />
                            <div className="content">
                                <h3>Lifetime Exchange</h3><br /><br />
                                <p>Exchange your old designs anytime you want an upgrade.</p>
                            </div>
                        </div>
                        <div className="dimond-div">
                            <img src={require(`../Images/dimond-no-bg.png`)} alt="Dimond" /> 
                            <div className="content">
                                <h3>One Year Replacement Warranty</h3><br /><br />
                                <p>If your jewellery has a defect, we will fix it.</p>
                            </div>   
                        </div>    
                    </div> 

                </div>
            </div>
        </div>
    );
}

export default Homepage;
