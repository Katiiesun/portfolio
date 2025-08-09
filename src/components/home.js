import "../static/home.css";
import Navigation from "./Navigation";
import "../static/Navigation.css";
import Footer from "./footer";
import "../static/footer.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { initializeScrollAnimation } from "./animationInView";

function Home() {
  const [text, setText] = useState("");

  const background = process.env.PUBLIC_URL + "images/websitebackground.png";
  const selfie = process.env.PUBLIC_URL + "images/selfie.png";
  const matchaSpill = process.env.PUBLIC_URL + "images/matchabottom-removebg-preview.png";
  const subbudImg = process.env.PUBLIC_URL + "images/subbud-ver2.png";
  const clearSpider = process.env.PUBLIC_URL + "images/clearspiderBarcode.png";
  const moodCraft = process.env.PUBLIC_URL + "images/moodcraft.png";
  const artwork = process.env.PUBLIC_URL + "images/artwork.png";
  const otherProjects = process.env.PUBLIC_URL + "images/moreProjects.png";
  const folkloreCD = process.env.PUBLIC_URL + "images/folkloreCD.png";
  const divvyUp = process.env.PUBLIC_URL + "images/Artboard 6.png";
  const selfietwo = process.env.PUBLIC_URL + "images/IMG_9177.jpeg";
  const heyMilo = process.env.PUBLIC_URL + "images/heymilo-mockup.png";

  useEffect(() => {
    const initialText = "Product Designer, Engineering Student";
    let index = 0;

    const typeText = () => {
      if (index < initialText.length) {
        setText(initialText.substring(0, index + 1));
        index++;
      } else {
        clearInterval(intervalId);
      }
    };

    const intervalId = setInterval(typeText, 70);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <Navigation className="navhome" />
      <div className="home">
        <div className="homeBackground">
          <img src={background} alt="background" />
        </div>
        <div className="folkloreCD">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://open.spotify.com/album/1pzvBxYgT6OVwJLtHkrdQK?si=EH3Lcm63Rv2WQnhdeg7z4A"
          >
            <img src={folkloreCD} alt="folklore cd" />
          </a>
        </div>
        <h1>Katie Sun</h1>
        <h2 className="typing-text">{text}</h2>
      </div>
      <div className="intro">
        <div className="pic">
          {/* <div class="animated hidden"> */}{" "}
          <img src={selfietwo} alt="self pic" />
          {/* </div> */}
        </div>
        <div className="introtext">
          <h1>Hello I'm Katie 👋</h1>
          <p>
            I'm a 2B Systems Design Engineering student @ UWaterloo and am
            passionate about tech and design ⚙️💡 I aspire to apply my design
            and systems thinking to create user-friendly solutions within
            various digital problem spaces.
          </p>
          <p>Currently designing @ Manulife + UW Blueprint</p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://drive.google.com/file/d/1bzytw9H_uadyz3YfJ_5JD2jyIx5Im_iI/view?usp=sharing"
          >
            <div className="intro-button">
              <button>View Resume</button>
            </div>
          </a>
        </div>
      </div>

      <div className="matcha-spill">
        <img src={matchaSpill} alt="bottom of matcha" />
      </div>
      <div className="projectsSection">
        <div className="workTitle"><h1>My work</h1></div>
        
        <div className="heyMilo">
          <Link to="/heymilo">
          <img src={heyMilo} alt="heyMilo" />
          </Link>
          <div className="heyMiloButtons">
            <button>Interaction Design</button>
            <button>Competitor Analysis</button>
            <button>Interface Design</button>
          </div>
          <h2>
            Redesigning an ATS dashboard and navigation system to streamline
            recruiter workflows
          </h2>
        </div>

        <div className="DivvyUp">
          <Link to="/DivvyUp">
            <img src={divvyUp} alt="divvyUp" />
          </Link>
          <div className="DivvyUpButtons">
            <button>Product thinking</button>
            <button>App Architecture</button>
            <button>Interaction design</button>
          </div>
          <h2>
            Simplifying group planning and bill splitting with DivvyUp, for a
            seamless group outing experience.
          </h2>
        </div>

        {/* <div className="Subbud">
          <Link to="/subbud">
            <img src={subbudImg} alt="subbud" />
          </Link>
          <div className="SubbudButtons">
            <button>User research</button>
            <button>App Architecture</button>
            <button>Interaction design</button>
          </div>
          <h1>
            Streamlining subscription management and promoting discoverability
            with SubBud.
          </h1>
        </div> */}

        <div className="clearSpider">
          <Link to="/clearSpider">
            <img src={clearSpider} alt="clear spider redesign" />
          </Link>
          <div className="clearSpiderButtons">
            <button>Web design</button>
            <button>Illustrations</button>
          </div>
          <h2>
            Redesigning a product landing page for enhanced visual engagement
          </h2>
        </div>

        {/* <div className="moodCraft">
          <img src={moodCraft} alt="moodcraft" />
          <div className="moodcraftButtons">
            <button>Visual design</button>
          </div>
          <h1>
            Designing a mobile app to help foster emotional well-being through
            creative expressions
          </h1>
        </div> */}
      </div>
      <div className="moreProjects">
        <div className="moreProjectsText">
          <h1>More</h1>
        </div>
        <div className="otherProjects">
          <Link to="/moreProjects">
            <img src={otherProjects} alt="more projects" />
          </Link>

          <h1>Various projects from graphic design to 3D modelling</h1>
        </div>
        <div className="myArtwork">
          <Link to="/Artwork">
            <img src={artwork} alt="my artwork" />
          </Link>

          <h1>A few art pieces I've created over the past few years</h1>
        </div>
      </div>
      <Footer className="footerHome" />
    </div>
  );
}

export default Home;
