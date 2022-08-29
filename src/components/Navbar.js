import React from "react"
import airbnb from "../images/airbnb-logo.png"

export default function Navbar(){
    return(
        <nav>
            <img className="nav--logo" src={airbnb} alt="AirBNB LOGO"></img>
            
        </nav>
    )

}