import "../static/clearSpider.css";
import Navigation from "./Navigation";
import "../static/Navigation.css";
import Footer from "./footer";
import "../static/footer.css";
import { useState, useEffect, useCallback, useRef } from "react";

const clearSpider1 = process.env.PUBLIC_URL + "images/Group 27.png";
const clearSpider2 = process.env.PUBLIC_URL + "images/csoriginal.jpeg";
const clearSpider3 = process.env.PUBLIC_URL + "images/IMB_EJ5Cnf 2 (1) (1).gif";
const clearSpider4 = process.env.PUBLIC_URL + "images/cs-screen.jpeg";
const clearSpider5 = process.env.PUBLIC_URL + "images/Group 16.png";
const clearSpider6 = process.env.PUBLIC_URL + "images/Group 20.png";
const clearSpider7 = process.env.PUBLIC_URL + "images/clientcards.jpeg";
const clearSpider8 = process.env.PUBLIC_URL + "images/footer-cta.jpeg";
const clearSpider9 = process.env.PUBLIC_URL + "images/footer-cta2.jpeg";

function ClearSpider() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navigation className="projectsnav" />
      <div className="csHeader">
        <h1>
          Redesigning a product landing page for enhanced visual engagement
        </h1>
        <img src={clearSpider1} alt="clear spider redesign landing" />
      </div>
      <div className="cs-section1">
        <div className="cs-overview">
          <h1>Context</h1>
          <h2>
            As a designer working with the marketing team, I was tasked with
            redesigning the UI of the internal 'Barcode Inventory Management'
            product landing page. The goal for the project was to keep a similar
            structure with the content but create a more pleasing interface as
            well as an alternate solution to the 'Start Demo' interactions.
          </h2>
        </div>
        <div className="subbud-intro">
          <div className="subbud-skills">
            <h1>SKILLS</h1>
            <h2>Web design</h2>
            <h2>Illustrations</h2>
          </div>
          <div className="project-duration">
            <h1>TOOLS</h1>
            <h2>Figma</h2>
            <h2>Illustrator</h2>
          </div>
          <div className="project-duration">
            <h1>DURATION</h1>
            <h2>March 2024</h2>
          </div>
        </div>
      </div>
      <div className="cs-section2">
        <div className="section2-text">
          <h1> Original Design Issues</h1>
          <h2>01. disorienting 'start demo' interaction</h2>
          <h2>02. outdated visuals</h2>
          <h2>03. lack of page structure</h2>
        </div>
        <img
          src={clearSpider2}
          alt="clear spider landing page original design"
        />
      </div>
      <div className="cs-section3">
        <img src={clearSpider3} alt="clear spider original design start demo" />
        <div className="section3-text">
          <h1>Disorienting 'Start Demo' Interaction</h1>
          <h2>
            One of the issues with the original page design was the 'Start Demo'
            interactions. The page consisted of 4 'Start Demo' buttons that
            would scroll you down or up to the form in the middle of the page,
            which is an unnecessary and disorienting way of accessing the form.
          </h2>
        </div>
      </div>
      <div className="cs-section4">
        <div className="cs-iteration">
          <div className="section4-text">
            <h1>Final Design</h1>
            <h2>
              The new design consists of a 'Start Demo' form to the left of the
              illustration. Rather than clicking a button and it scrolling you
              down the page in order to fill out the form, it is now visible
              right as the user navigates onto the page.
            </h2>
          </div>
          <img src={clearSpider1} alt="clear spider redesign landing" />
        </div>
        <div className="final-screens">
          <img src={clearSpider4} alt="clear spider redesign screen" />
          <img src={clearSpider5} alt="clear spider redesign screen" />
        </div>
      </div>
      <div className="cs-section5">
        <img src={clearSpider6} alt="clear spider redesign screen" />
        <div className="section5-text">
          <h1>New Illustrations</h1>
          <h2>
            Along with the new illustration seen as you first land on the page,
            I updated the visuals for the product flow example to make the
            process easier to follow without having to read all of the text.
          </h2>
        </div>
      </div>
      <div className="cs-section6">
        <div className="section6-text">
          <h1>Client Review Cards</h1>
          <h2>
            The original design for this section had all three client review
            cards side by side. This caused information overload and in turn
            made it difficult to comprehend information at first glance. There
            was also no title for the section in the original design.
          </h2>
          <h2>
            I redesigned this section for it to be displayed through a carousal
            in order to allow readers to focus on each company at a time.
            Moreover, I added a title fit for the section to help ease users
            into the information shown.
          </h2>
        </div>
        <img src={clearSpider7} alt="clear spider client review cards" />
      </div>
      <div className="cs-section7">
        <div className="section7-text">
          <h1>Footer CTA</h1>
          <h2>
            In the CTA at the bottom of the page, there is a 'Start Demo' button
            which when clicked on, a popup for the form is shown on the screen.
            The user can now either fill out the form at the bottom when they
            finish scrolling through the content or at the top of the page.
          </h2>
        </div>
        <div className="section7-img">
          {" "}
          <img src={clearSpider8} alt="clear spider footer CTA" />
          <img src={clearSpider9} alt="clear spider footer CTA" />
        </div>
      </div>
      <Footer className="footerSubBud" />
    </div>
  );
}

export default ClearSpider;
