import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Education from "./Components/Education";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import ScrollUp from "./Components/ScrollUp";
import Skills from "./Components/Skills";
import { PortfolioProvider } from "./context/PortfolioContext";

function App() {
  return (
    <div className="App">
      <PortfolioProvider>
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Contact />
        <ScrollUp />
      </PortfolioProvider>
    </div>
  );
}

export default App;
