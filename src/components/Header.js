import React from 'react'
// import coverImage from "../../assets/cover/cover-image.jpg";

function Header() {

  return (
    <section className="my-5" >
      <h1 id="about">Who am I?</h1>
      {/* <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" /> */}
      <div className="my-2">
        <p>
        Hello! My name is Katy, and I am a full stack developer!
      </p>
      </div>
    </section>
  )
}

export default Header