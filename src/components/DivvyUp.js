import "../static/DivvyUp.css";
import Navigation from "./Navigation";
import "../static/Navigation.css";
import Footer from "./footer";
import "../static/footer.css";
import { useState, useEffect, useCallback, useRef } from "react";

function DivvyUp() {
  return (
    <div>
      <Navigation className="projectsnav" />
      <div className="construction-msg">
        <h1> This page is under construction! 🔧👷🏻‍♀️</h1>
      </div>
    </div>
  );
}

export default DivvyUp;
