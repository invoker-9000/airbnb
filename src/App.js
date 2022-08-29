import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"

export default function App() {
  const cards = data.map(element=> {
   
    return (
      <Card
      key={element.id}
      item={element}
      />
      )
  });
    return (
          
        <div className="body--container">
          <Navbar />
          <Hero/>
          <div className="bigcard--container">
       
         {cards}
        

          </div>
        </div>
    )
}