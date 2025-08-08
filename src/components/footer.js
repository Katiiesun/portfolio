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
      <h1>Get connected!</h1>
      <button onClick={linkedInClick}>LinkedIn</button>
      <button onClick={emailClick}>Email</button>
    </div>
  );
};

export default Footer;
