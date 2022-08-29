import React from "react"



export default function Card(props){

    return(
        <div>
            <div className="card--container">
                <img src={props.img} alt="Profilepicture" className="card--image"></img>
                <div className=""card--stats>
                    <img src={props.star} alt="star" className="star--logo"></img>
                    <span>{props.rating}</span>
                    <span className="gray">({props.review}) . </span>
                    <span className="gray">{props.location}</span>
                    <p>{props.content}</p>
                    <p><span className="bold">From ${props.price}</span> / person</p>
                </div>
            </div>
        </div>
    )
}