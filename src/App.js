import "./App.css";
import { Routes, Route } from "react-router";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<h1>Page not found.</h1>} />
      </Routes>
    </div>
  );
}

export default App;
