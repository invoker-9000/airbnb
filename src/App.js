import React from "react"
import Navbar from "./components/Navbar"
// import Hero from "./components/Hero"
import Card from "./components/Card"
import katie from "./images/katie.png"
import star from "./images/star1.png"
import wedding from "./images/wedding.png"

export default function App() {
    return (
          /* <Hero /> */
        <div>
          <Navbar />
          <Card 
          rating={5.0}
          review={6} 
          location="USA" 
          content="Life Lessons with Katie Zaferes"
          price={136}
          img={katie}
          star={star}
          />
          <Card
          rating={5.0}
          review={30}
          location="USA"
          content="Learn wedding photography"
          price={125}
          img={wedding}
          
          />

        </div>
    )
}