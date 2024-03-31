import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Topbar from "./components/Topbar.jsx";
import TheAthmosphere from "./components/TheAthmosphere.jsx";
import CircuitousBodies from "./components/CircuitousBodies.jsx";
import MessMesh from "./components/MessMesh.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Works from "./components/Works.jsx";
import Notes from "./components/Notes.jsx";
import Emphatie from "./components/Emphatie.jsx";
import DatasetInBetween from "./components/DatasetInBetween.jsx";
import PixelWiseForgetting from "./components/PixelWiseForgetting.jsx";
import WashingThemes from "./components/WashingThemes.jsx";
const App = () => {
  const containerStyle = {
    backgroundColor: "white",
    minHeight: "100vh",
    color: "black",
    margin: 0,
    boxSizing: "border-box",
    overflowY: "hidden",
    width: "100%",
  };
  return (
    <div style={containerStyle}>
      <Router>
        <div className="app">
          <Topbar />

          <div className="main-content p-4">
            <Routes>
              <Route
                path="works/circuitous-bodies"
                element={<CircuitousBodies />}
              />
              <Route path="works/mess-mesh" element={<MessMesh />} />
              <Route
                path="works/the-athmosphere"
                element={<TheAthmosphere />}
              />
              <Route
                path="/works/dataset-in-between"
                element={<DatasetInBetween />}
              />
              <Route path="/works/emphatie" element={<Emphatie />} />
              <Route
                path="/works/pixelwise-forgetting"
                element={<PixelWiseForgetting />}
              />
              <Route path="/works/washing-themes" element={<WashingThemes />} />

              <Route path="notes" element={<Notes />} />
              <Route path="works" element={<Works />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route index path="behiyeerdemir" element={<Works />} />
              <Route index path="/" element={<Works />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;
