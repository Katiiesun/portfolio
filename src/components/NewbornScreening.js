import "../static/NewbornScreening.css";
import Navigation from "./Navigation";
import "../static/Navigation.css";
import Footer from "./footer";
import "../static/footer.css";
import { useState, useEffect, useCallback, useRef } from "react";

const newborns = process.env.PUBLIC_URL + "images/newborns.png";

function NewbornScreening() {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  return (
    <div className="ns-page">
      <Navigation className="navhome" />
<main className="ns-container">
  {/* HERO */}
  <section className="ns-hero">
  <div className="ns-hero-text">
  <button className="ns-coming-soon">Case Study Coming Soon</button>
    <h1>
      Newborn Screening Analysis Tool
    </h1>

    <p className="ns-subtitle">
      Reducing newborn screening analysis and reporting turnaround from
      <span className="highlight2"> weeks to days</span>
    </p>
   
  </div>

    {/* Image placeholder */}
    <div className="ns-image-wrapper">
      <div className="ns-image">
     <img src={newborns} alt="Newborn screening tool" />
      </div>
    </div>

    <div className="ns-meta">
      <div className="ns-meta-item">
        <span className="ns-label">Timeline</span>
        <p>Q1 2026</p>
      </div>

      <div className="ns-meta-item">
        <span className="ns-label">Team</span>
        <p>UX Designer (me)</p>
        <p>2 UX Researchers</p>
        <p>Product Manager</p>
        <p>Team of Engineers</p>
      </div>

      <div className="ns-meta-item">
        <span className="ns-label">Status</span>
        <p>Pilot released to partner lab for testing</p>
      </div>
    </div>
  </section>


        {/* OVERVIEW */}
        <section className="ns-section">
          <h2>0 → 1 Platform Design for Newborn Screening Workflows</h2>
        </section>

        {/* PROBLEM */}
        <section className="ns-section">
          <h3>The Problem</h3>
          <p>
            During my internship, I served as the sole designer for a cutoff
            analysis and report-generation tool for newborn screening labs.
            Cutoff analysis is a complex and high-stakes process used to
            determine thresholds for detecting rare disorders in newborns.
          </p>

          <p>
            Scientists had to move between multiple platforms, manually import,
            stratify, and graph data by various demographics in Excel, analyze those graphs, and compile findings into reports for leadership.
          </p>

          <p>
            Because cutoff values are continuously reviewed and updated, this
            workflow had to be repeated multiple times a year across 60+
            analytes.
          </p>
        </section>

        {/* SOLUTION */}
        <section className="ns-section">
          <h3>Our Solution</h3>
          <p>
            We built an all-in-one platform that streamlines the entire
            workflow. The tool allows users to visualize and manipulate graphs,
            analyze cutoff values, validate them against diagnosed cases, and
            generate reports directly within the platform.
          </p>
        </section>

        {/* OUTCOME */}
        <section className="ns-section">
          <h3>Outcome</h3>
          <p>
            The product was developed from my designs and released as a pilot,
            allowing a partner newborn screening lab to begin testing the tool in
            their workflow. Seeing it reach real users was incredibly rewarding :)
          </p>

    
        </section>

       {/* TAKEAWAYS */}
<section className="ns-takeaways">
  <h3 className="ns-takeaways-title">Key Takeaways</h3>

  {/* SECTION 01 */}
  <div className="ns-takeaway-block">
    <h4 className="ns-takeaway-heading">01. Designing for Trust & Transparency</h4>

    <p>
      One of the biggest lessons I took away was the importance of designing for
      trust. Scientists don’t want a black box that simply outputs results. They
      need to understand the data behind a new cutoff value recommendation and
      feel confident in how conclusions are reached.
    </p>

    <p>
      Throughout the project, this meant prioritizing clarity by making all data
      configurations and cutoff decision rules visible, ensuring analysis steps
      were easy to follow, and designing interfaces that supported careful
      exploration rather than quick guesses.
    </p>

    <p>
      This became especially important as I explored the role of generative AI
      within the tool. While AI could help surface patterns or manipulate the
      data for analysis, it was equally important that users could review,
      adjust, and configure the data themselves.
    </p>

    <p>
      Rather than replacing the scientist’s judgment, the goal was to design AI
      as a collaborator. One that assists with complex analysis while keeping
      all data, assumptions, and configurations fully transparent and
      controllable.
    </p>
  </div>

  {/* SECTION 02 */}
  <div className="ns-takeaway-block">
    <h4 className="ns-takeaway-heading">02. Redefining Impact in Healthcare</h4>

    <p>
      Working in a healthcare context reshaped how I think about impact, as
      real-world outcomes are what measure it. On this project, success meant
      giving time back while not compromising precision and accuracy.
    </p>

    <p>
      Parts of the cutoff analysis workflow that once required weeks of manual
      work could now be completed in days.
    </p>

    <p>
      But that improvement wasn’t just a productivity metric. It meant scientists
      spending less time wrestling with spreadsheets and more time focusing on
      research and interpretation. It meant labs being able to respond faster when disorder screening panels
      change. And sometimes, it simply meant scientists getting their evenings
      back.
    </p>
  </div>

  <p className="ns-closing">
    I’m incredibly grateful for my time as an intern at Revvity. This project
    sparked my interest in designing for health tech and I’m excited for what’s
    next!
  </p>
</section>
      </main>

      <Footer className="footerHome" />
    </div>
  );
}

export default NewbornScreening;
