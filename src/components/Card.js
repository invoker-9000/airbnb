import React from "react"



export default function Card(props){
    let badgeText
    if (props.item.openSpots === 0 )
        badgeText= "SOLD OUT"
    else if (props.item.location === "Online")
        badgeText="ONLINE"
    else
        badgeText= null
    return(
        <div>
            <div className="card--container">
                {badgeText != null && <div className="card--badge">{badgeText}</div>}
                <img src={`../images/${props.item.coverImg}`} alt="Profilepicture" className="card--image"></img>
                <div className=""card--stats>
                    <img src={"../images/star1.png"} alt="star" className="star--logo"></img>
                    <span>{props.item.stats.rating}</span>
                    <span className="gray">({props.item.stats.reviewCount}) . </span>
                    <span className="gray">{props.item.location}</span>
                    <p className="card--title">{props.item.content}</p>
                    <p className="card--price"><span className="bold">From ${props.item.price}</span> / person</p>
                </div>
            </div>
        </div>
    )
}