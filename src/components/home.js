import "../static/home.css";
import Navigation from "./Navigation";
import "../static/Navigation.css";
import Footer from "./footer";
import "../static/footer.css";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

function Home() {
  const [text, setText] = useState("");
  const imgRef = useRef(null);
  const handRef = useRef(null);
  const deskRef = useRef(null);
  const location = useLocation();

  const snoopyOne = process.env.PUBLIC_URL + "images/snoop1.png";
  const snoopyTwo = process.env.PUBLIC_URL + "images/snoop2.png";
  const selfietwo = process.env.PUBLIC_URL + "images/introimg.png";
  const heyMilo = process.env.PUBLIC_URL + "images/heymilo-mockup.png";
  const wealthApp = process.env.PUBLIC_URL + "images/wealthApp.png";
  const divvyUp = process.env.PUBLIC_URL + "images/Artboard 6.png";
  const mywork = process.env.PUBLIC_URL + "images/mywork.png";
  const newborns = process.env.PUBLIC_URL + "images/newborns.png";

  const [currentImg, setCurrentImg] = useState(snoopyOne);
  const [handWaved, setHandWaved] = useState(false);

  // Toggle animated pic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImg((prev) => (prev === snoopyOne ? snoopyTwo : snoopyOne));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // Typing effect
  useEffect(() => {
    const phrases = [
      "is a product designer",
      "is an engineering student",
      "has a messy desk",
      "is a candle connoisseur",
      "is an arts & crafts enthusiast",
      "lovesssss matcha",
      "is probably listening to music rn",
    ];

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId;

    const type = () => {
      const currentPhrase = phrases[phraseIndex];
      if (!isDeleting) {
        setText(currentPhrase.substring(0, charIndex + 1));
        charIndex++;
        if (charIndex === currentPhrase.length) {
          timeoutId = setTimeout(() => {
            isDeleting = true;
            type();
          }, 1200);
          return;
        }
      } else {
        setText(currentPhrase.substring(0, charIndex - 1));
        charIndex--;
        if (charIndex === 0) {
          isDeleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
          timeoutId = setTimeout(type, 500);
          return;
        }
      }
      timeoutId = setTimeout(type, isDeleting ? 40 : 80);
    };
    type();
    return () => clearTimeout(timeoutId);
  }, []);

  // Desk scroll transform
  useEffect(() => {
    const handleScroll = () => {
      if (!deskRef.current) return;
      const scroll = window.scrollY;
      const maxScroll = 500;
      const progress = Math.min(scroll / maxScroll, 1);

      const rotateX = progress * 8;
      const rotateZ = progress * 30;
      const scale = 1 + progress * 0.05;
      const translateX = -5;

      deskRef.current.style.transform = `
        translateX(${translateX}%)
        rotateX(${rotateX}deg)
        rotateZ(${rotateZ}deg)
        scale(${scale})
      `;
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver for scroll reveal
  useEffect(() => {
    const elements = document.querySelectorAll(".scroll-reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Hand wave & selfie tilt
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === imgRef.current) {
              entry.target.classList.add("scroll-rotate");
            }
            if (entry.target === handRef.current && !handWaved) {
              setHandWaved(true);
            }
          } else if (entry.target === imgRef.current) {
            entry.target.classList.remove("scroll-rotate");
          }
        });
      },
      { threshold: 0.6 }
    );

    if (imgRef.current) observer.observe(imgRef.current);
    if (handRef.current) observer.observe(handRef.current);
    return () => observer.disconnect();
  }, [handWaved]);

  // Scroll to section from location
  useEffect(() => {
    if (location.state?.scrollTo === "my-work") {
      const el = document.getElementById("my-work");
      el?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <div className="home-wrapper">
      <Navigation className="navhome" />

      <div id="intro" className="intro scroll-reveal">
        <div className="pic">
          <img ref={imgRef} src={selfietwo} alt="self pic" />
        </div>
        <div className="introtext">
          <h1>
            Hello I'm Katie{" "}
            <span ref={handRef} className={handWaved ? "wave-hand" : ""}>
              👋
            </span>
          </h1>
          <p>
            I'm a <b>Product Designer</b> studying Systems Design Engineering @
            <i>UWaterloo</i>. I'm passionate about crafting meaningful
            experiences that simplify how people navigate the digital space ⚙️💡
          </p>

          <p>
            Currently designing @ <i>Revvity!</i>{" "}
          </p>
          <div className="intro-button">
            <button
              onClick={() => {
                const section = document.getElementById("my-work");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View my work <span className="arrow">↓</span>
            </button>
          </div>
        </div>
        <div className="animated-pic">
          <img src={currentImg} alt="animated pic" />
        </div>
      </div>

      <div id="my-work" className="projectsSection scroll-reveal">
        <div className="workTitle scroll-reveal">
          <img src={mywork} alt="my work text" />
        </div>

        <div className="project scroll-reveal">
          <Link to="#" className="project-row">
            <div className="project-image">
              <img src={newborns} alt="Revvity" />
            </div>
            <div className="project-text">
              <h2>Newborn Screening Analysis Tool</h2>
              <p className="company">Revvity</p>

              <p>
                Reducing newborn screening analysis and reporting turnaround
                from weeks to days
              </p>
              <span className="coming-soon-btn">In Progress</span>
            </div>
          </Link>
        </div>

        <div className="project scroll-reveal">
          <Link to="/heymilo" className="project-row">
            <div className="project-image">
              <img src={heyMilo} alt="heyMilo" />
            </div>
            <div className="project-text">
              <h2>AI-Powered Recruiter Dashboard</h2>
              <p className="company">HeyMilo AI</p>
              <p>
                Redesigning an ATS dashboard and navigation system to
                <span className="highlight3">
                  {" "}
                  streamline recruiter workflows
                </span>
              </p>
            </div>
          </Link>
        </div>

        <div className="project scroll-reveal">
          <Link to="/wealthApp" className="project-row">
            <div className="project-image">
              <img src={wealthApp} alt="wealth app cover" />
            </div>
            <div className="project-text">
              <h2>Wealth Management Mobile App</h2>
              <p className="company">Manulife Financial</p>
              <p>
                Designing a <span className="highlight3">future-ready</span>{" "}
                navigation solution for{" "}
                <span className="highlight3">
                  Canada’s #1 insurance provider
                </span>
              </p>
            </div>
          </Link>
        </div>

        <div className="project scroll-reveal">
          <Link to="/DivvyUp" className="project-row">
            <div className="project-image">
              <img src={divvyUp} alt="DivvyUp" />
            </div>
            <div className="project-text">
              <h2>Group Outings with DivvyUp</h2>
              <p>
                Simplifying group planning and bill splitting with DivvyUp for a
                <span className="highlight3">
                  {" "}
                  seamless group outing experience
                </span>
              </p>
            </div>
          </Link>
        </div>
      </div>

      <Footer className="footerHome" />
    </div>
  );
}

export default Home;
