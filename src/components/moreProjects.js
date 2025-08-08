import "../static/moreProjects.css";
import Navigation from "./Navigation";
import "../static/Navigation.css";
import Footer from "./footer";
import "../static/footer.css";
import { useState, useEffect, useCallback, useRef } from "react";

const frameTeam = process.env.PUBLIC_URL + "images/frame.jpeg";
const uwuxPosts = process.env.PUBLIC_URL + "images/uwuxPosts.png";
const csIllustrations1 = process.env.PUBLIC_URL + "images/Artboard 5@4x.png";
const csIllustrations2 = process.env.PUBLIC_URL + "images/Artboard 6@4x.png";
const angryGoose = process.env.PUBLIC_URL + "images/angrygoose.png";
const gooseRender = process.env.PUBLIC_URL + "images/FullSizeRender.png";
const gooseStruggle = process.env.PUBLIC_URL + "images/goosestruggle.png";
const gooseGIF = process.env.PUBLIC_URL + "images/IMB_kRrPVQ (1).gif";
const scooby = process.env.PUBLIC_URL + "images/scooby.png";

function MoreProjects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navigation className="navhome" />
      <div className="uw-ux">
        <div className="uwux-intro">
          <div className="uwux-introText">
            <h1>UW/UX</h1>
            <h2>
              {" "}
              For the past 4 terms, I was apart of the UW/UX team creating
              branding for our club events and initiatives, including 3 designathons.
              Earlier in the year, we rebranded our club to align closer to our values and growing vision.
             Recently, I led the branding for our FLOW designathon and merch!
            </h2>
          </div>

          <img src={frameTeam} alt="frame designathon" />
        </div>
        <div className="uwux-posts">
          {/* <img src={uwuxPosts} alt="UW/UX posts" /> */}
        </div>
      </div>

      <div className="clear-Spider">
        <div className="cs-intro">
          <div className="clearSpider-Text">
            <h1>Clear Spider Illustrations</h1>
            <h2>
              One of my tasks as a digital designer co-op was to create
              illustrations for the company website and marketing campaigns. I
              especially loved this part of my role as it was really fun for me
              to bring out my artistic side and get more comfortable with
              Illustrator.
            </h2>
          </div>
          <img src={csIllustrations1} alt="Clear Spider Illustrations" />
        </div>
        <div className="cs-secondimg">
          {" "}
          <img src={csIllustrations2} alt="Clear Spider Illustrations" />
        </div>
      </div>
      <div className="angryGoose">
        <div className="goose-intro">
          <div className="goose-text">
            <h1>Angry Goose Puzzle</h1>
            <h2>
              In my visual communications class, our team of 4 designed a 3D
              goose puzzle with a flapping wings mechanism using Solidworks. We
              were inspired by the angry geese that roam campus, attacking
              innocent students, including myself 😔.{" "}
            </h2>
          </div>
          <div className="goose-pic">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://youtu.be/lgG3JvcJjBw"
            >
              <img src={angryGoose} alt="goose puzzle" />
            </a>
            <h2>tap the goose!</h2>
          </div>
        </div>
        <div className="goose-process">
          <img src={gooseRender} alt="Solidworks model of goose" />
          <h2>
            Our team originally designed a mechanism where you pull a stick from
            the goose's beak and the wings would flap outwards. However, once we
            started 3D printing our design, we dealt with various complications
            and had to pivot, simplifying our mechanism.
          </h2>
        </div>
        <div className="goose-struggles">
          <h2>the struggle was real... 😫</h2>
          <img src={gooseStruggle} alt="the struggle of making the goose" />
        </div>
        <div className="goose-final">
          <img src={gooseGIF} alt="the struggle of making the goose" />
          <h2>
            After an all-nighter and multiple emails to our prof, we finally had
            a working goose puzzle! yippee!!
          </h2>
        </div>
      </div>
      <div className="scoobyMobile">
        <div className="scooby-Text">
          <h1>Scooby-Doo Mystery Machine</h1>
          <h2>
            For a class project, I 3D-modelled the Scooby-Doo mobile using
            Solidworks.
          </h2>
        </div>
        <img src={scooby} alt="Scooby doo mobile in solidworks" />
      </div>
      <Footer className="footerSubBud" />
    </div>
  );
}

export default MoreProjects;
