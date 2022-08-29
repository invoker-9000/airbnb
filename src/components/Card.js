import React from "react"
import katie from "../images/katie.png"
import star from "../images/star1.png"

export default function Card(){

    return(
        <div>
            <div className="card--container">
                <img src={katie} alt="Katie" className="card--image"></img>
                <div className=""card--stats>
                    <img src={star} alt="star" className="star--logo"></img>
                    <span>5.0</span>
                    <span className="gray">(6) . </span>
                    <span className="gray">USA</span>
                    <p>Life Lessons with Katie Zaferes</p>
                    <p><span className="bold">From $136</span> / person</p>
                </div>
            </div>
        </div>
    )
}