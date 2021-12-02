import React from 'react'
import coverImage from "../assets/icon.png";

function About() {

  return (
    
    <section className="my-5" >
      <div id="flex-row">
      <img src={coverImage} className="" style={{ width: "25%" }} alt="cover" />

      </div>
      
      <h1 id="about">Who am I?</h1>
      <div className="my-2">
        <p>
        Hello! My name is Katy, and I am a full stack developer!
      </p>
      </div>
    </section>
  )
}

export default About;