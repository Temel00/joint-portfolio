import React from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import {Home} from "./pages/Home";
import "./App.css";
import {Work} from "./pages/Work";
import {AnimatePresence} from "framer-motion";
import {Hire} from "./pages/Hire";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <div>
        <header className="App-header">
          <nav className="links">
            <Link to="/">Home</Link>
            <Link to="/work">Work</Link>
            <Link to="/hire">Hire Me</Link>
          </nav>
        </header>

        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} key="home" />
            <Route path="/work" element={<Work />} key="work" />
            <Route path="/hire" element={<Hire />} key="hire" />
          </Routes>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
