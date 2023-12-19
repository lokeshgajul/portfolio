import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Education from "./Components/Education";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import ScrollUp from "./Components/ScrollUp";
import Skills from "./Components/Skills";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />

      <About />
      <Skills />
      <Education />
      <Projects />
      <Contact />
      <ScrollUp />
    </div>
  );
}

export default App;
