import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Values } from "./pages/Values";
import { Watch } from "./pages/Watch";
import { Give } from "./pages/Give";
import { Visit } from "./pages/Visit";

import "./App.css";
import { TextureBG } from "./components/TextureBG";

function App() {
  //only for github pages routing
  const baseName = process.env.REPO_NAME ? `/${process.env.REPO_NAME}` : "";
  return (
    <Router basename={baseName}>
      <div className="relative w-full min-h-screen">
        <TextureBG />
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />

          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/values" element={<Values />} />
              <Route path="/give" element={<Give />} />
              <Route path="/watch" element={<Watch />} />
              <Route path="/visit" element={<Visit />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
