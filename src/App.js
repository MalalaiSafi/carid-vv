import React, { useState } from "react";
import Background from './Components/Background';
import Navbar from "./Components/Navbar";
import Hero from './Components/Hero';

function App() {
  let heroData = [
    {text1: "Dive into", text2: "what you love"},
    {text1: "Indulge", text2: "your passion"},
    {text1: "Give in to", text2: "your passions"},
  ];
  const [heroCount, setHeroCount] = useState(2); 
  const [playStatus, setPlayStatus] = useState(false);
  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount}/>
      <Navbar />
      <Hero
        setPlayStatus={setPlayStatus}
        HeroData={heroData[heroCount]} 
        heroCount={heroCount}
        setHeroCount={setHeroCount} 
        playStatus={playStatus}
      />
    </div>
  );
}

export default App;
