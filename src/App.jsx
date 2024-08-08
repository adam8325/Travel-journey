import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Data from "./Data";

export default function App() {

  const cards = Data.map(item => {
    return (
      <Hero
      item = {item}
      />
    )
  })

  return (
    <div>
      <Navbar />
      {cards}
    </div>
  )
}
