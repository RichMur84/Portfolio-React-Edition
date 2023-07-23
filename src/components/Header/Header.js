import React from "react";
import Navigation from "../Navigation/Navigation";
import "./Header.css";


export default function Header({ currentPage, setCurrentPage }) {
  return (
    <div className="headerParent" style={{ padding: "0px 0px 10px 43px" }}>
      <h1 id="header-text">Richard Murillo <br></br>Web Developer</h1>
     
      <p id="header-text"></p>
      
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}
