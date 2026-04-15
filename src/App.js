

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
import NewbornScreening from "./components/NewbornScreening";
import ProtectedNBS from "./components/ProtectedNBS";
import NBSTool from "./components/NBSTool";


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
          <Route path="/NewbornScreening" element={<NewbornScreening />} />
          <Route path="/protectedNBS" element={<ProtectedNBS />} />
          <Route path="/NBSTool" element={<NBSTool />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

