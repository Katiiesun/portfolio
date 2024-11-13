import "../static/DivvyUp.css";
import Navigation from "./Navigation";
import "../static/Navigation.css";
import Footer from "./footer";
import "../static/footer.css";
import { useState, useEffect, useCallback, useRef } from "react";

function DivvyUp() {
  const DivvyUpBanner = process.env.PUBLIC_URL + "images/DivvyUp-banner.png";

  return (
    <div>
      <Navigation className="projectsnav" />
      <div className="construction-msg">
        <h1> This page is under construction! 🔧👷🏻‍♀️</h1>
      </div>
      {/* <div className="DivvyUp-header">
        <img src={DivvyUpBanner} alt="background" />
      </div>
      <div className="cs-section1">
        <div className="cs-overview">
          <h1>Background</h1>
          <h2>
            As someone who frequently plans outings and trips with friends, I
            recognized a recurring set of frustrations in managing group
            schedules and expenses. My friends and I often relied on text
            messages, Google Docs, or even mental notes to organize our plans
            and track who paid for what. By the end of each outing, determining
            how much everyone owed and ensuring timely payments became a hassle.
            The lack of a streamlined solution resulted in scattered
            information, forgotten payments, and accountability issues due to
            messages getting buried in group chats.
          </h2>
          <h2>
            To address these needs, I designed DivvyUp, an all-in-one group
            planning and bill-splitting app. DivvyUp allows users to coordinate
            events, track expenses, and manage payments seamlessly in one
            platform, solving the pain points around planning, cost-sharing, and
            accountability.{" "}
          </h2>
        </div>
        <div className="subbud-intro">
          <div className="subbud-skills">
            <h1>SKILLS</h1>
            <h2>User research</h2>
            <h2>App architecture</h2>
            <h2>Interaction design</h2>
          </div>
          <div className="project-duration">
            <h1>TOOLS</h1>
            <h2>Figma</h2>
          </div>
          <div className="project-duration">
            <h1>DURATION</h1>
            <h2>September 2024 - Now</h2>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default DivvyUp;
