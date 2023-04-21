import React from "react";
import {HashRouter as Router, Routes, Route, Link} from "react-router-dom";
import logo from "./logo.svg";
import {Home} from "./pages/Pages";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav></nav>
          <header className="App-header">
            <h1>
              T<span className="maine">e</span>mel
            </h1>
            <nav className="links">
              <Link to="/">Home</Link>
              <Link to="/foo">About</Link>
              <Link to="/bar">Hire Me</Link>
              <Link to="/foo">/</Link>
            </nav>
          </header>

          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route exact path="/foo" component={Foo} /> */}
            {/* <Route exact path="/bar" component={Bar} /> */}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
