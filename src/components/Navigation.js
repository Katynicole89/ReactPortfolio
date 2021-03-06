import React from "react";

function Nav() {

  const handleClick = () => {
    console.log("click handled")
  }

  return (
    <header data-testid="header" className="flex-row px-1">
      <h2>
        Katy Edmonds
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a href="#about" onClick={() => handleClick()}>
              About me
            </a>
          </li>
          <li className={"mx-2"}>
            <span onClick={() => handleClick()}>
              Portfolio
            </span>
          </li>
          <li className={"mx-2"}>
            <span onClick={() => handleClick()}>
              Resume
            </span>
          </li>
          <li className={"mx-2"}>
            <a href="#contact" span onClick={() => handleClick()}>
              Contact
            </a>
          </li>
         
        </ul>
      </nav>
    </header>
  );
}

export default Nav;