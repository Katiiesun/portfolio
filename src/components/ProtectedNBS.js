


import "../static/ProtectedNBS.css";
import { useState, useEffect } from "react";
import Navigation from "./Navigation";
import "../static/Navigation.css";
import Footer from "./footer";
import "../static/footer.css";
import { Link } from "react-router-dom";

export default function ProtectedNBS() {


    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navigation className="navhome" />

      <div className="password-screen">
        <h2>Private Case Study</h2>

        <p>
          This case study is available upon request due to sensitive healthcare
          context. If you’d like to view the full project, shoot me an email.
        </p>

        {/* BUTTON ROW */}
        <div className="password-buttons">

          {/* secondary button */}
          <Link
            to="/NewbornScreening"
            className="secondary-btn"
          >
            Read Reflection <span className="arrow">→</span>
          </Link>

          {/* primary button */}
          <a
            href="mailto:k6sun@uwaterloo.ca?subject=Request%20Access%20-%20NBS%20Case%20Study"
            className="primary-btn"
          >
            Request Access
          </a>

        </div>
      </div>

      <Footer className="footerHome" />
    </>
  );
}