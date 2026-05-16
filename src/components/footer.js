// import "../static/footer.css";

// const titleImg = process.env.PUBLIC_URL + "images/getconnected.png";

// const Footer = ({ className }) => {
//   const linkedInClick = () => {
//     window.open("https://www.linkedin.com/in/sun-katie/");
//   };

//   const emailClick = () => {
//     window.location.href = "mailto:k6sun@uwaterloo.ca";
//   };

//   return (
//     <div className={`footer-container ${className}`}>
//   <div className="footer-left">
//   <img src={titleImg} alt="Get connected" className="footer-title-img" />
//     <button onClick={linkedInClick}>LinkedIn</button>
//     <button onClick={emailClick}>Email</button>
//   </div>

//   <p className="copyright">© {new Date().getFullYear()} Katie Sun</p>
// </div>
//   );
// };

// export default Footer;



import "../static/footer.css";

const Footer = ({ className }) => {
  const linkedInClick = () => {
    window.open("https://www.linkedin.com/in/sun-katie/");
  };

  const emailClick = () => {
    window.location.href = "mailto:k6sun@uwaterloo.ca";
  };

  return (
    <div className={`footer-container ${className}`}>
      <div className="footer-left">
        <h1 className="footer-heading">
          Let's Get <span className="footer-script">Connected</span>
        </h1>
        <div className="footer-links">
          <button onClick={emailClick}>Email ↗</button>
          <button onClick={linkedInClick}>LinkedIn ↗</button>
        </div>
      </div>
      <p className="copyright">© {new Date().getFullYear()} Katie Sun</p>
    </div>
  );
};

export default Footer;
