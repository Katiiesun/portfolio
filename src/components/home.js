import "../static/home.css";
import Navigation from "./Navigation";
import "../static/Navigation.css";

function Home() {
  const background =
    process.env.PUBLIC_URL + "images/websitebackground.png";

  const selfie = process.env.PUBLIC_URL + "images/selfie.png";

  // const projectsBackground =
  //   process.env.PUBLIC_URL + "";

  return (
    <div>
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
      {/* <div className="projectsbackground">
        <img src={projectsBackground} alt="projects background" />
      </div> */}
    </div>
  );
}

export default Home;
