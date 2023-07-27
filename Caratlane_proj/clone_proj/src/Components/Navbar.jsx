import React, { useState, useEffect } from "react";
import "./Navbar.css"

function Navbar(){
    const [text, setText] = useState("Introducing CaratLane PoP! Plan your purchase");
      
    useEffect(() => {
        const intervalId = setInterval(() => {
            if(setText==="CaratLane - A Tanishq Partnership")
                setText("Introducing CaratLane PoP! Plan your purchase");
            else if(setText==="Introducing CaratLane PoP! Plan your purchase")
                setText("CaratLane - A Tanishq Partnership");
        //   setText("Introducing CaratLane PoP! Plan your purchase");
        //   setTimeout(() => setText("CaratLane - A Tanishq Partnership"), 2000);
        },3000);
      
        // return () => clearInterval(intervalId);
      })
    //   function logo(){
    //     console.log("ABC");
    //   }      
    return(
        <div className="main">
            <div className="above-nav">
                <p className="fade-in-out">{text}</p>
            </div>
            <div className="nav">
                {/* <div className="logo"> */}
                    <img className="logo-img" src={require(`./logo1.png`)} alt="Logo" />
                    {/* <h1>Logo</h1> */}
                {/* </div> */}
                <div className="btns">
                    <div className="btn">
                        <img src={require(`./home_icon1.png`)} alt="free try at home" />
                        <a href="">FREE TRY <br /><br />AT HOME</a>
                    </div>
                    <div className="btn">
                        <img src={require(`./shop_icon.png`)} alt="shop" />
                        <a href="">FIND <br /><br />STORE</a>
                    </div>
                    <div className="btn">
                        <img src={require(`./bag_icon.png`)} alt="plan of purchase" />
                        <a href="">PLAN OF <br /><br />PURCHASE</a>
                    </div>
                    <div className="btn">
                        <img src={require(`./goldbar_icon.png`)} alt="buy gold" />
                        <a href="">BUY DIGITAL <br /><br />GOLD</a>
                    </div>
                </div>
                <div className="search">
                    {/* <div className="search_box"> */}
                        <input className="search_box" type="text" placeholder="    Search" />
                    {/* </div> */}
                    <div className="search-img">
                        <img src={require(`./search_icon_5.png`)} alt="" />
                    </div>
                </div>
                <img className="location-img" src={require(`./location_icon.png`)} alt="pincode" />
                <span className="location">PINCODE</span>
                <img className="india-img" src={require(`./india_icon.png`)} alt="" />
                <img className="user-img" src={require(`./user_icon.png`)} alt="" />
                <img className="heart-img" src={require(`./heart_icon.png`)} alt="" />
                <img className="cart-img" src={require(`./cart_icon.png`)} alt="" />
            </div>
            <div className="below-nav">
                <a className="bottom-btn" href="">BEST SELLERS</a>    
                <a className="bottom-btn-c" href="">NEW ARRIVALS</a>
                <a className="bottom-btn" href="">RINGS</a>
                <a className="bottom-btn" href="">EARRINGS</a>
                <a className="bottom-btn" href="">BRACELETS & BANGLES</a>
                <a className="bottom-btn" href="">SOLITAIRES</a>
                <a className="bottom-btn-c" href="">SPECIAL DEALS</a>
                <a className="bottom-btn" href="">OTHER JEWELLERY</a>
                <a className="bottom-btn" href="">GIFTING</a>
            </div>
            {/* <div class="tooltip">Hover over me
                <span class="tooltiptext">Tooltip text</span>
            </div> */}
        </div>
    )
}

export default Navbar;