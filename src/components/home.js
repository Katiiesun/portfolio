import "../static/home.css";
import Navigation from "./Navigation";
import "../static/Navigation.css";
import Footer from "./footer";
import "../static/footer.css";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { initializeScrollAnimation } from "./animationInView";

function Home() {
  const [text, setText] = useState("");
  const imgRef = useRef(null);
  const handRef = useRef(null);

  const background = process.env.PUBLIC_URL + "images/websitebackground-min (1).png";
  const selfie = process.env.PUBLIC_URL + "images/selfie.png";
  const matchaSpill =
    process.env.PUBLIC_URL + "images/matchabottom-removebg-preview.png";
  const subbudImg = process.env.PUBLIC_URL + "images/subbud-ver2.png";
  const clearSpider = process.env.PUBLIC_URL + "images/clearspiderBarcode.png";
  const moodCraft = process.env.PUBLIC_URL + "images/moodcraft.png";
  const artwork = process.env.PUBLIC_URL + "images/artwork.png";
  const otherProjects = process.env.PUBLIC_URL + "images/moreProjects.png";
  const folkloreCD = process.env.PUBLIC_URL + "images/folkloreCD.png";
  const divvyUp = process.env.PUBLIC_URL + "images/Artboard 6.png";
  const selfietwo = process.env.PUBLIC_URL + "images/IMG_9177.jpeg";
  const heyMilo = process.env.PUBLIC_URL + "images/heymilo-mockup.png";
  const wealthApp = process.env.PUBLIC_URL + "images/wealthApp.png";

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

  // scroll animation
  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         console.log("Observed:", entry.target, "visible?", entry.isIntersecting);

  //         if (entry.isIntersecting) {
  //           entry.target.classList.add("scroll-rotate");
  //         } else {
  //           entry.target.classList.remove("scroll-rotate");
  //         }
  //       });
  //     },
  //     { threshold: 0.6 } // make it easier to trigger
  //   );

  //   if (imgRef.current) {
  //     console.log("Observing image:", imgRef.current);
  //     observer.observe(imgRef.current);
  //   } else {
  //     console.warn("⚠️ imgRef.current was null!");
  //   }

  //   return () => observer.disconnect();
  // }, []);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           // if it's the image
  //           if (entry.target === imgRef.current) {
  //             entry.target.classList.add("scroll-rotate");
  //           }

  //           // if it's the waving hand
  //           if (entry.target === handRef.current) {
  //             entry.target.classList.add("wave-hand");
  //           }
  //         } else {
  //           // image should rotate back
  //           if (entry.target === imgRef.current) {
  //             entry.target.classList.remove("scroll-rotate");
  //           }

  //           // hand should not remove the class — only wave once
  //         }
  //       });
  //     },
  //     { threshold: 0.6 }
  //   );

  //   if (imgRef.current) observer.observe(imgRef.current);
  //   if (handRef.current) observer.observe(handRef.current);

  //   return () => observer.disconnect();
  // }, []);

  const [handWaved, setHandWaved] = useState(false); // track if hand has already waved

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // image tilt
            if (entry.target === imgRef.current) {
              entry.target.classList.add("scroll-rotate");
            }

            // hand wave, only if it hasn't waved yet
            if (entry.target === handRef.current && !handWaved) {
              setHandWaved(true);
            }
          } else {
            // image rotate back when scrolling away
            if (entry.target === imgRef.current) {
              entry.target.classList.remove("scroll-rotate");
            }
            // do NOT remove hand class — wave only once
          }
        });
      },
      { threshold: 0.6 }
    );

    if (imgRef.current) observer.observe(imgRef.current);
    if (handRef.current) observer.observe(handRef.current);

    return () => observer.disconnect();
  }, [handWaved]); // add handWaved to dependencies

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
          <img ref={imgRef} src={selfietwo} alt="self pic" />
          {/* </div> */}
        </div>
        <div className="introtext">
          <h1>
            Hello I'm Katie{" "}
            <span ref={handRef} className={handWaved ? "wave-hand" : ""}>
              👋
            </span>
          </h1>
          <p>
            I'm a 2B Systems Design Engineering student @ UWaterloo and am
            passionate about tech and design ⚙️💡 I aspire to apply my design
            and systems thinking to create user-friendly solutions within
            various digital problem spaces.
          </p>
          <p>Currently designing @ UW Blueprint, Prev. @ Manulife</p>
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
        <div className="workTitle">
          <h1>My work</h1>
        </div>

        <div className="wealthApp">
          <Link to="/wealthApp">
            <img src={wealthApp} alt="wealth app cover" />
          </Link>
          <div className="wealthButtons">
            <button>A/B Testing</button>
            <button>Prototyping</button>
            <button>Product Thinking</button>
          </div>
          <h2>
            Designing a future-ready navigation solution for Canada’s #1
            insurance provider
          </h2>
        </div>

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

          <h1>Katie's art gallery!</h1>
        </div>
      </div>
      <Footer className="footerHome" />
    </div>
  );
}

export default Home;
