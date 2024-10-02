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

  return (
    <div className={className}>
      <button onClick={homeClick}>Portfolio</button>
      <button onClick={aboutMeClick}>About Me</button>
    </div>
  );
};
export default Navigation;
