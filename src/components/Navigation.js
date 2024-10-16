import { useNavigate } from "react-router-dom";
import "../static/Navigation.css";

const Navigation = ({ className }) => {
  const navigate = useNavigate();

  const aboutMeClick = () => {
    navigate("/about-me");
  };

  const homeClick = () => {
    navigate("/");
  };

  const navBackground =
  process.env.PUBLIC_URL + "images/Artboard 2@2x.png";

  return (
    <div className={`container ${className}`}>
    <img src={navBackground} alt="navigation background" />
    <button onClick={homeClick}>Portfolio</button>
    <button onClick={aboutMeClick}>About Me</button>
  </div>
  
  );
};
export default Navigation;
