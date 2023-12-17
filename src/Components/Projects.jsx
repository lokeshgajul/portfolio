import moviemates from "../assets/moviemates.png";
import exblore from "../assets/exblore.png";
import textUtils from "../assets/textUtils.png";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
function Projects() {
  const [expandProject, setExpandProject] = useState(null);

  const toggleExpand = (index) => {
    setExpandProject(expandProject === index ? null : index);
  };
  const projects = [
    {
      name: "MovieMates",
      image: moviemates,
      link: "https://moviemates1.netlify.app/",
      github: "https://github.com/lokeshgajul/MovieMates",
      description: ` Movie Mates, a React app using Vite and the OMDB API to get movie details. I used a fetch API for smooth requests. The app features a user-friendly interface for searching and exploring movies.`,
    },
    {
      name: "Exblore",
      image: exblore,
      link: "https://exblore.netlify.app/",
      github: "https://github.com/lokeshgajul?tab=repositories",
      description: `A blog website where users can create and view blogs in various categories.
       The platform also offers the
       functionality to create and join communities, with an added feature of a dark mode for user customization.`,
    },
    {
      name: "TextUtils",
      image: textUtils,
      link: "https://lokeshgajul.github.io/my-app/",
      github: "https://github.com/lokeshgajul/my-app",
      description: `A TextUtils app empowering users to manipulate text effortlessly. Users can perform actions such as uppercase,
      lowercase, clear, copy, and remove extra spaces.The app also estimates the time required to read the text.`,
    },
    // Add more projects as needed
  ];
  return (
    <div
      className="flex justify-center flex-col items-center p-4 mb-14"
      id="Projects"
    >
      <h1 className="flex justify-center items-center text-4xl font-semibold mb-6">
        Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {projects.map((item, index) => (
          <div
            className="max-w-[20rem] rounded overflow-hidden shadow-lg m-4 bg-slate-200 transition-opacity"
            key={index}
          >
            <img
              className={`w-fit `}
              src={item.image}
              alt="Project Screenshot"
            />
            <div className="px-4" onClick={() => toggleExpand(index)}>
              <div className="font-bold text-xl my-2">{item.name}</div>
              <p className="text-gray-700 text-base">
                {index === expandProject
                  ? item.description
                  : `${item.description.slice(0, 140)} `}
                <span className="text-blue-600 cursor-pointer">
                  {index == expandProject ? "less..." : "more..."}
                </span>
              </p>
            </div>
            <div className="flex justify-end items-end p-4 space-x-3 text-[1.3rem]">
              <a
                href={item.link}
                className="text-gray-700 hover:text-gray-800"
                target="_blank"
                rel="noreferrer"
              >
                {<FaLink />}
              </a>
              <a
                href={item.github}
                className="text-gray-700 hover:text-gray-800"
                target="_blank"
                rel="noreferrer"
              >
                {<FaGithub />}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
