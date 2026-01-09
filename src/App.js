// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import AboutMe from "./components/AboutMe";
import Subbud from "./components/subbud"; 
import ClearSpider from "./components/clearSpider";
import MoreProjects from "./components/moreProjects";
import Artwork from "./components/Artwork";
import DivvyUp from "./components/DivvyUp";
import HeyMilo from "./components/heymilo";
import WealthApp from "./components/wealthApp";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/subbud" element={<Subbud />} /> 
          <Route path="/clearSpider" element={<ClearSpider />} /> 
          <Route path="/moreProjects" element={<MoreProjects />} /> 
          <Route path="/Artwork" element={<Artwork />} /> 
          <Route path="/DivvyUp" element={<DivvyUp />} /> 
          <Route path="/heymilo" element={<HeyMilo />} /> 
          <Route path="/wealthApp" element={<WealthApp />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useEffect, useState } from "react";


// import Home from "./components/home";
// import AboutMe from "./components/AboutMe";
// import Subbud from "./components/subbud";
// import ClearSpider from "./components/clearSpider";
// import MoreProjects from "./components/moreProjects";
// import Artwork from "./components/Artwork";
// import DivvyUp from "./components/DivvyUp";
// import HeyMilo from "./components/heymilo";
// import WealthApp from "./components/wealthApp";
// import LoadingScreen from "./components/loading";

// function App() {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 2000); // adjust duration here

//     return () => clearTimeout(timer);
//   }, []);

//   if (loading) {
//     return <LoadingScreen />;
//   }

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about-me" element={<AboutMe />} />
//         <Route path="/subbud" element={<Subbud />} />
//         <Route path="/clearSpider" element={<ClearSpider />} />
//         <Route path="/moreProjects" element={<MoreProjects />} />
//         <Route path="/Artwork" element={<Artwork />} />
//         <Route path="/DivvyUp" element={<DivvyUp />} />
//         <Route path="/heymilo" element={<HeyMilo />} />
//         <Route path="/wealthApp" element={<WealthApp />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

