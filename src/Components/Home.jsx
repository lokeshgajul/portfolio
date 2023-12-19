import { useState, useEffect } from "react";
import logo from "../assets/portfolioImage.png";
import resumePDF from "../assets/lokesh resume.pdf"; // Update with the actual path to your resume PDF

function Home() {
  const [animatedText, setAnimatedText] = useState("");
  const [animationProgress, setAnimationProgress] = useState(0);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const text = "I am Lokesh Santosh Gajul.";

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (animationProgress < text.length) {
        setAnimatedText(animatedText + text[animationProgress]);
        setAnimationProgress(animationProgress + 1);
      } else {
        clearInterval(intervalId);
        setIsAnimationComplete(true);
      }
    }, 200); // Adjust interval time as needed

    return () => clearInterval(intervalId);
  }, [text, animationProgress, animatedText]);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("Projects");
    projectsSection.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToHome = () => {
    const projectsSection = document.getElementById("Home");
    projectsSection.scrollIntoView({ behavior: "smooth" });
  };

  const openResume = () => {
    window.open(resumePDF);
  };

  return (
    <div>
      <div
        className="flex max-md:flex-col flex-row justify-center items-center bg-slate-300 p-3"
        id="Home"
      >
        <div className="py-3 px-10 md:p-24">
          <h2 className="text-2xl">Hey!</h2>
          {animatedText.length > 0 && (
            <p className="text-4xl font-medium py-2 ">{animatedText}</p>
          )}
          <h2 className="text-2xl py-1 text-blue-600">Web Developer</h2>
          <p className="text-md">
            I am a passionate web developer skilled in HTML, Tailwind CSS,
            JavaScript, React, Node, and MongoDB.
          </p>
          <button
            onClick={openResume}
            className="border-cyan-400 border-2 hover:bg-cyan-500 p-1.5 m-3.5 text-cyan-600 hover:text-white rounded-lg"
          >
            View Resume
          </button>
          <button
            className="border-cyan-400 border-2 hover:bg-cyan-500 p-1.5 m-3.5 text-cyan-600 hover:text-white rounded-lg"
            onClick={() => scrollToProjects()}
          >
            Projects
          </button>
        </div>

        <div className="flex justify-center items-center mb-7">
          <img className="max-w-[80%]" src={logo} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
