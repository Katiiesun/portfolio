import "../static/home.css";
import Navigation from "./Navigation";
import "../static/Navigation.css";

function Home() {
  const background = process.env.PUBLIC_URL + "images/websitebackground.png";

  const selfie = process.env.PUBLIC_URL + "images/selfie.png";

  const matchaSpill = process.env.PUBLIC_URL + "images/matchabottom.png";
  const subbudImg = process.env.PUBLIC_URL + "images/subbud-ver2.png";
  const clearSpider = process.env.PUBLIC_URL + "images/clearspiderBarcode.png";
  const moodCraft = process.env.PUBLIC_URL + "images/moodcraft.png";
  const artwork = process.env.PUBLIC_URL + "images/artwork.png";

  // const projectsBackground =
  //   process.env.PUBLIC_URL + "";

  return (
    <div>
      {" "}
      <Navigation className="navhome" />
      <div className="home">
        <img src={background} alt="background" />
        <h1>Katie Sun</h1>
        <h2>Engineering Student, Digital Designer</h2>
      </div>
      <div className="intro">
        <div className="pic">
          {" "}
          <img src={selfie} alt="self pic" />
        </div>

        <div className="introtext">
          <h1>Hello I'm Katie 👋</h1>
          <p>
            I'm a 2A Systems Design Engineering student @ UWaterloo and am
            passionate about tech and design ⚙️💡 I aspire to apply my design
            and systems thinking to create user-friendly solutions within
            various digital problem spaces. 
          </p>
        </div>
      </div>
      <div className="matcha-spill">
        <img src={matchaSpill} alt="bottom of matcha" />
      </div>
      <div className="projectsSection">
        <div className="Subbud">
          <img src={subbudImg} alt="subbud" />
          <h1>Streamlining subscription management with SubBud.</h1>
        </div>
        <div className="clearSpider">
          <img src={clearSpider} alt="clear spider redesign" />
          <h1>
            Redesigning Clear Spider feature landing page for enhanced visual
            engagement.
          </h1>
        </div>
        <div className="moodCraft">
          <img src={moodCraft} alt="moodcraft" />
          <h1>
            Designing to promote emotional well-being through creative
            expressions
          </h1>
        </div>
      </div>
      <div className="moreProjects">
        <div className="moreProjectsText">
          <h1>Other projects I've worked on!</h1>
        </div>

        <div className="moodCraft">
          <img src={moodCraft} alt="moodcraft" />
          <h1>
            Designing to promote emotional well-being through creative
            expressions
          </h1>
        </div>
        <div className="moodCraft">
          <img src={artwork} alt="my artwork" />
          <h1>
            Designing to promote emotional well-being through creative
            expressions
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
