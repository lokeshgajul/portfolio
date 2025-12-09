import { useState, useEffect } from "react";
import logo from "../assets/portfolioImage.png";
import resumePDF from "../assets/lokesh resume.pdf"; // Update with the actual path to your resume PDF
import PortfolioHook from "../context/PortfolioContext";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
function Home() {
  const [animatedText, setAnimatedText] = useState("");
  const [animationProgress, setAnimationProgress] = useState(0);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const text = "I'm Lokesh";

  const { theme, toggleTheme } = PortfolioHook();

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

  const openResume = () => {
    window.open(resumePDF);
  };

  return (
    <div
      className={`  ${theme === "dark" ? "bg-[#252528]" : "bg-slate-400"} `}
      id="Home"
    >
      <div
        className={`  flex justify-end pr-7 transition-all duration-700 ease-in-out  ${
          theme === "dark" ? "text-white" : "text-gray-700"
        }`}
        onClick={toggleTheme}
      >
        {theme === "light" ? <MdDarkMode size={35} /> : <CiLight size={35} />}
      </div>
      <div
        className={`flex max-md:flex-col flex-row justify-center items-center`}
      >
        <div
          className={`py-3 px-10 md:p-24 ${
            theme === "dark" ? "text-white" : "text-black"
          } `}
        >
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
            className={` border-2  p-1.5 m-3.5  rounded-lg ${
              theme === "light"
                ? "hover:bg-cyan-500 text-cyan-800 font-medium hover:text-white"
                : " hover:bg-cyan-500 text-cyan-400 hover:text-white"
            } `}
          >
            View Resume
          </button>
          <button
            className={`  border-2 p-1.5 m-3.5 rounded-lg ${
              theme === "light"
                ? "hover:bg-cyan-500 text-cyan-800 font-medium hover:text-white"
                : " hover:bg-cyan-500 text-cyan-400 hover:text-white"
            }  `}
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
