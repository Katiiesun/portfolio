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
  const hafb = process.env.PUBLIC_URL + "images/homeagain.png";

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
            Hello, I'm <span className="footer-script">Katie</span>{" "}
            {/* <span ref={handRef} className={handWaved ? "wave-hand" : ""}>
    👋
  </span> */}
          </h1>
          <p>
            I'm a <b className="keyword-underline">Product Designer</b> studying
            Systems Design Engineering @{" "}
            <b className="keyword-underline">
              <i>UWaterloo</i>
            </b>
            , driven by the goal of designing experiences that reduce friction,
            support real people, and make life a little easier.
          </p>

          <p className="intro-prev">
            previously @ <i>Revvity, Manulife</i>
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
          <Link to="ProtectedNBS" className="project-row">
            <div className="project-image">
              <img src={newborns} alt="Revvity" />
            </div>
            <div className="project-text">
              {/* <span className="coming-soon-btn">CASE STUDY COMING SOON</span> */}
              <h2>Newborn Screening Analysis Tool</h2>
              <p className="company">Revvity Health Sciences, 2026</p>

              <p>
                Reducing newborn screening analysis and reporting turnaround
                from weeks to days
              </p>

              <span className="case-study-btn">
                Learn more <span className="arrow">→</span>
              </span>
            </div>
          </Link>
        </div>

      

        <div className="project scroll-reveal">
          <Link to="/recruitment" className="project-row">
            <div className="project-image">
              <img src={heyMilo} alt="heyMilo" />
            </div>
            <div className="project-text">
              <h2>AI-powered Recruiting ATS</h2>
              <p className="company">Early-Stage AI Startup, 2024</p>
              <p>
                Improving the candidate evaluation and agent navigation
                experience
                <span className="highlight3"> in an AI-powered ATS</span>
              </p>
              {/* Read Case Study button */}
              <span className="case-study-btn">
                Read Case Study <span className="arrow">→</span>
              </span>

              {/* <span className="case-study-btn">Under Construction</span> */}
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
              <p className="company">Manulife Financial, 2025</p>
              <p>
              Designing scalable navigation for a new mobile wealth experience
              </p>
              {/* Read Case Study button */}
              <span className="case-study-btn">
                Read Case Study <span className="arrow">→</span>
              </span>
            </div>
          </Link>
        </div>

        <div className="project scroll-reveal">
          <Link to="/" className="project-row">
            <div className="project-image">
              <img src={hafb} alt="furniture bank cover" />
            </div>
            <div className="project-text">
              <h2>Furniture Bank Operations Portal</h2>
              <p className="company">
                UW Blueprint x Home Again Furniture Bank, 2026
              </p>
              <p>
                Designing the{" "}
                <span className="highlight3">
                  admin portal and donation intake experience for a non-profit
                </span>{" "}
                furniture bank <span className="highlight3"></span>
              </p>
              {/* Read Case Study button */}
              <span className="case-study-btn">
                Work in progress <span className="arrow"></span>
              </span>
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
              <p className="company">Personal Project, 2024</p>
              <p>
                Simplifying group planning and bill splitting with DivvyUp for a
                <span className="highlight3">
                  {" "}
                  seamless group outing experience
                </span>
              </p>
              {/* Read Case Study button */}
              <span className="case-study-btn">
                Read Case Study <span className="arrow">→</span>
              </span>
            </div>
          </Link>
        </div>
      </div>

      <Footer className="footerHome" />
    </div>
  );
}

export default Home;
