import React from "react"
import hero from "../images/group77.png"

export default function Hero(){

    return(
        <section className="hero--container">
            <img src= {hero} className="hero--image" alt="Hero grid"></img>
            <h1  className="hero--title">Online Experiences</h1>
            <p className="hero--content">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}