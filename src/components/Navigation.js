// import { useNavigate } from "react-router-dom";
// import "../static/Navigation.css";

// const Navigation = ({ className }) => {
//   const navigate = useNavigate();

//   const aboutMeClick = () => {
//     navigate("/about-me");
//   };

//   const homeClick = () => {
//     navigate("/");
//   };

//   const navBackground =
//   process.env.PUBLIC_URL + "images/Artboard 2@2x.png";

//   return (
//     <div className={`container ${className}`}>
//     <button onClick={homeClick}>My Work</button>
//     <button onClick={aboutMeClick}>About Me</button>
//   </div>
  
//   );
// };
// export default Navigation;

import { useNavigate, useLocation } from "react-router-dom";
import "../static/Navigation.css";

const Navigation = ({ className }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const aboutMeClick = () => {
    navigate("/about-me");

    // force scroll to top on route change
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  const resumeClick = () => {
    window.open(
      "https://drive.google.com/file/d/1YVCJ6VOETy-hnQGFbq9hB7BULz9hQKrx/view"
    );
  };
  

  const myWorkClick = () => {
    if (location.pathname === "/") {
      // only scroll if already on home
      document
        .getElementById("my-work")
        ?.scrollIntoView({ behavior: "smooth" });
    } else {
      // go to home and start at top
      navigate("/");
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  };

  return (
    <div className={`container ${className}`}>
      <button onClick={myWorkClick}>My Work</button>
      <button onClick={aboutMeClick}>About Me</button>
      <button onClick={resumeClick}>Resume</button>
    </div>
  );
};

export default Navigation;
