import "../static/subbud.css";
import Navigation from "./Navigation";
import "../static/Navigation.css";
import Footer from "./footer";
import "../static/footer.css";

const subbudBanner = process.env.PUBLIC_URL + "images/subbud-banner.png";

function Subbud() {
  return (
    <div className="subbud-header">
        <Navigation className="projectsnav" />
        <img src={subbudBanner} alt= "subbud banner" />
    </div>
  );
}

export default Subbud;
