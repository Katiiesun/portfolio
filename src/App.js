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

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/subbud" element={<Subbud />} /> 
          <Route path="/clear-spider" element={<ClearSpider />} /> 
          <Route path="/moreProjects" element={<MoreProjects />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
