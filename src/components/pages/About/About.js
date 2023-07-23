import React from "react";
import "./About.css";
import hero from "../../../images/just me.jpg";
import CardMedia from "@mui/material/CardMedia";


export default function About() {
  return (
    <>
      <div className="image-container">
        <CardMedia
          component="img"
          className="color-img"
          style={{
            height: "auto",
            width: "50%",
            margin: "0 auto",
            paddingTop: "20px",
          }}
          image={hero}
          alt="About Me"
        />
      </div>

      <div style={{ width: "70%", margin: "0 auto" }}>
        <h1 id="about-me-title">About Me</h1>
        <p id="p-about">
          Hello! I'm a full stack software developer.  I find myself excited yet slightly apprehensive about the road that lies ahead. 
          Being a novice in this vast and ever-evolving field, I am eager to explore the world of web development and see where my skills and passion take me.  
        </p>
        <p id="p-about">
          One of the things that drew me to web development is its immense potential
          to create and impact the digital landscape. The internet has become an integral part of our daily lives, connecting people and providing information and services at our fingertips. As a web developer, 
          I have the power to contribute to this interconnected virtual realm, crafting websites and applications that can enrich lives, solve problems, and inspire others.{" "}
        </p>
        <p id="p-about">
          Outside of the software development world, I like to seek adventure outside and to travel an find places to go and things todo with family and friends.
        </p>
        <p id="p-about">
          As a newcomer, I'm also learning about the importance of good design and user experience. 
          Aesthetics and usability are essential for engaging users and keeping them coming back.
          Let's embark on this journey together, whether it's discussing the
          latest tech trends, exchanging ideas on full stack development.
        </p>
      </div>
    </>
  );
}
