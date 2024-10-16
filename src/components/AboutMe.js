import "../static/AboutMe.css";
import Navigation from "./Navigation";

function AboutMe() {
  const aboutmephoto = process.env.PUBLIC_URL + "/images/meincali.jpg";
  const breezeblocks = process.env.PUBLIC_URL + "/images/vinyl1.png";
  const everseen = process.env.PUBLIC_URL + "/images/vinyl2.png";
  const ivy = process.env.PUBLIC_URL + "/images/vinyl3.png";
  const musicbackground =
    process.env.PUBLIC_URL + "/images/musicbackground.png";

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
            creativity and reasoning to the design process 💪 Outside of
            designing, you'll likely find me sipping a matcha latte, learning my
            favourite songs on the piano, or binge watching modern family for
            the 10th time.{" "}
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
            <img
              className="breezeblocksVinyl"
              src={breezeblocks}
              alt="breezeblocks vinyl"
            />
            <h2>Breezeblocks - alt-J</h2>
          </div>

          <div className="everseen">
            <img
              className="everseenVinyl"
              src={everseen}
              alt="ever seen vinyl"
            />
            <h2>Ever Seen - Beabadoobee</h2>
          </div>
          <div className="ivy">
            <img className="ivyVinyl" src={ivy} alt="ivy vinyl" />
            <h2>Ivy - Taylor Swift</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
