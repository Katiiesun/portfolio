import "../static/AboutMe.css";
import Navigation from "./Navigation";
import Footer from "./footer";
import "../static/footer.css";

function AboutMe() {
  const aboutmephoto = process.env.PUBLIC_URL + "/images/meincali.png";
  const breezeblocks = process.env.PUBLIC_URL + "/images/vinyl1.png";
  const everseen = process.env.PUBLIC_URL + "/images/vinyl2.png";
  const ivy = process.env.PUBLIC_URL + "/images/vinyl3.png";
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
              href="https://www.youtube.com/watch?v=rVeMiVU77wo&ab_channel=alt-J"
            >
              <img
                className="breezeblocksVinyl"
                src={breezeblocks}
                alt="breezeblocks vinyl"
              />
            </a>
            <h2>Breezeblocks - alt-J</h2>
          </div>

          <div className="everseen">
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=-VEpcGrCOWY&ab_channel=beabadoobeeVEVO"
            >
              <img
                className="everseenVinyl"
                src={everseen}
                alt="ever seen vinyl"
              />
            </a>
            <h2>Ever Seen - Beabadoobee</h2>
          </div>
          <div className="ivy">
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=9nIOx-ezlzA&ab_channel=TaylorSwiftVEVO"
            >
              <img className="ivyVinyl" src={ivy} alt="ivy vinyl" />
            </a>
            <h2>Ivy - Taylor Swift</h2>
          </div>
        </div>
      </div>
      <Footer className="footerAboutMe" />
    </div>
  );
}

export default AboutMe;
