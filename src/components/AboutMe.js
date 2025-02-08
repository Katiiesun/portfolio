import "../static/AboutMe.css";
import Navigation from "./Navigation";
import Footer from "./footer";
import "../static/footer.css";

function AboutMe() {
  const aboutmephoto = process.env.PUBLIC_URL + "/images/meincali.png";
  const breezeblocks = process.env.PUBLIC_URL + "images/Group 2.png";
  const everseen = process.env.PUBLIC_URL + "images/Group 1171276156.png";
  const ivy = process.env.PUBLIC_URL + "/images/Group 1171276155.png";
  const selfietwo = process.env.PUBLIC_URL + "images/IMG_9177.jpeg";


  return (
    <div>
      <Navigation className="aboutmenav" />
      <div className="aboutmesection">
        <div className="aboutme">
          <h1>About Me</h1>
          <p>
            Hey! I'm an aspiring product designer with a background in visual
            arts, design and engineering 🎨 ⚙️ Creating art since I was young
            helped me discover that I love communicating ideas through visuals.
            Having been immersed in art and design my entire life, I find I work
            best in environments that foster creativity and innovation while
            also valuing grounded, evidence-based approaches. Problem-solving is
            at the heart of my work, and I am committed to bringing both
            creativity and reasoning to the design process 💪
          </p>
          <p>
            Outside of designing, you'll likely find me sipping a matcha latte,
            learning my favourite songs on the piano, or binge watching modern
            family for the 10th time.{" "}
          </p>
        </div>
        <img src={aboutmephoto} alt="pic of me" />
      </div>
      <div className="music">
        <h1> Songs on repeat 🎧...</h1>
        {/* <img
          className="musicbackground"
          src={musicbackground}
          alt="background"
        /> */}

        <div className="musicvinyls">
          <div className="breezeblocks">
            {" "}
            <a
              target="_blank"
              href="https://youtu.be/tjuIzZ8uldo"
            >
              <img
                className="breezeblocksVinyl"
                src={breezeblocks}
                alt="homemade dynamite vinyl"
              />
            </a>
            <h2>Homemade Dynamite - Lorde</h2>
          </div>

          <div className="everseen">
            <a
              target="_blank"
              href="https://youtu.be/e7b5hbWvWEQ?list=OLAK5uy_m4ef9CbQVqNjomB_Jps9wYIzgyP7Agsdk"
            >
              <img
                className="everseenVinyl"
                src={everseen}
                alt="Freudian vinyl"
              />
            </a>
            <h2>Freudian - Danial Caesar</h2>
          </div>
          <div className="ivy">
            <a
              target="_blank"
              href="https://youtu.be/9ZozITxuNKo"
            >
              <img className="ivyVinyl" src={ivy} alt="love lost vinyl" />
            </a>
            <h2>Love Lost - Mac Miller</h2>
          </div>
        </div>
      </div>
      <Footer className="footerAboutMe" />
    </div>
  );
}

export default AboutMe;
