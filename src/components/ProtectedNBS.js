


// import "../static/ProtectedNBS.css";
// import { useState, useEffect } from "react";
// import Navigation from "./Navigation";
// import "../static/Navigation.css";
// import Footer from "./footer";
// import "../static/footer.css";
// import { Link } from "react-router-dom";

// export default function ProtectedNBS() {


//     useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   return (
//     <>
//       <Navigation className="navhome" />

//       <div className="password-screen">
//         <h2>Private Case Study</h2>

//         <p>
//           This case study is available upon request due to sensitive healthcare
//           context. If you’d like to view the full project, shoot me an email.
//         </p>

//         {/* BUTTON ROW */}
//         <div className="password-buttons">

//           {/* secondary button */}
//           <Link
//             to="/NewbornScreening"
//             className="secondary-btn"
//           >
//             Read Reflection <span className="arrow">→</span>
//           </Link>

//           {/* primary button */}
//           <a
//             href="mailto:k6sun@uwaterloo.ca?subject=Request%20Access%20-%20NBS%20Case%20Study"
//             className="primary-btn"
//           >
//             Request Access
//           </a>

//         </div>
//       </div>

//       <Footer className="footerHome" />
//     </>
//   );
// }


import { useState, useEffect } from "react";
import "../static/ProtectedNBS.css";
import Navigation from "./Navigation";
import "../static/Navigation.css";
import Footer from "./footer";
import "../static/footer.css";
import NBSTool from "./NBSTool";
import { Link } from "react-router-dom";

export default function ProtectedNBS() {
  const [authorized, setAuthorized] = useState(false);
  const [input, setInput] = useState("");

  const correctPassword = "ksun86239029";

  useEffect(() => {
    setAuthorized(false);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = () => {
    if (input === correctPassword) {
      setAuthorized(true);
    } else {
      alert("Incorrect password");
    }
  };

  if (!authorized) {
    return (
      <>
        <Navigation className="navhome" />

        <div className="password-screen">
          <h2>Protected Case Study</h2>
          <p>
            Unfortunately, I'm unable to share my work publicly. Please find
            the password in my resume or shoot me an email.
          </p>

          <input
            type="password"
            value={input}
            placeholder="Enter password"
            onChange={(e) => setInput(e.target.value)}
          />

          {/* BUTTON ROW */}
          <div className="password-buttons">

              {/* secondary button */}
              <Link to="/NewbornScreening" className="secondary-btn">
              Read Reflection <span className="arrow">→</span>
            </Link>

            {/* primary button */}
            <button onClick={handleSubmit} className="primary-btn">
              Enter
            </button>

          

          </div>
        </div>

        <Footer className="footerHome" />
      </>
    );
  }

  return <NBSTool />;
}
