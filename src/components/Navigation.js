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
    <button onClick={homeClick}>My Work</button>
    <button onClick={aboutMeClick}>About Me</button>
  </div>
  
  );
};
export default Navigation;
