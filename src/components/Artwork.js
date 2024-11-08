import "../static/Artwork.css";
import Navigation from "./Navigation";
import "../static/Navigation.css";
import Footer from "./footer";
import "../static/footer.css";
import { useState, useEffect } from "react";

const myArtwork = process.env.PUBLIC_URL + "images/myArtwork.png";

function Artwork() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {" "}
      <Navigation className="projectsnav" />
      <div className="my-artwork">
        <h1>Artwork</h1>
        <h2>
          One of my favourite hobbies as a kid was drawing and painting. My
          parents noticed my interest towards creating art and put me into
          visual art lessons at age 4. Visual arts has always been one of my
          biggest passions growing up as it allowed me to express my creativity
          and create whatever the hell I wanted. I always gravitated towards
          realism as I loved being able to capture the essence of real people
          and real things we see. In highschool, I was in a visual arts program
          so here are some of my favourite pieces I created during those few
          years!{" "}
        </h2>
        <img src={myArtwork} alt="my artwork" />
      </div>
      <Footer className="footerSubBud" />
    </div>
  );
}

export default Artwork;
