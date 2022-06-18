import React from "react";
import { useState } from "react";

export default function HeaderComponent() {
  function search() {
    console.log("trigger search");
  }

  const [toggle, setToggle] = useState(false);

  return (
    <header id="header" className="header">
      <div className="logo">LOGO</div>
      <button onClick={() => setToggle(!toggle)} className="hamburger-button">
        <span className="material-symbols-outlined">menu</span>
      </button>
      <nav id="top-navigation" className={`top-navigation ${toggle && "trigger-nav"}`}>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <button onClick={() => search()}>
          <span className="material-symbols-outlined">search</span>
        </button>
      </nav>
    </header>
  );
}
