import { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { TfiClose } from "react-icons/tfi";

function Navbar() {
  const [menu, setMenu] = useState(false);

  const handleClick = () => {
    console.log("handleClick triggered");
    setMenu(!menu);
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("Projects");
    projectsSection.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToSkills = () => {
    const skillsSection = document.getElementById("Skills");
    skillsSection.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToEducation = () => {
    const skillsSection = document.getElementById("Education");
    skillsSection.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToAbout = () => {
    const skillsSection = document.getElementById("About");
    skillsSection.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    const skillsSection = document.getElementById("Contact");
    skillsSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div className="flex justify-between overflow-x-auto p-8 bg-slate-300">
        <div>
          <li className="font-bold text-2xl text-blue-500 list-none">Lokesh</li>
        </div>
        <div>
          <div
            onClick={handleClick}
            className="text-3xl absolute right-8 top-9 cursor-pointer md:hidden"
          >
            {menu ? <TfiClose size={20} /> : <RiMenu3Fill size={20} />}
          </div>
          <ul
            className={`md:flex max-md:absolute max-md:bg-slate-300 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-700 ease-in-out top-16 md:space-x-4 ${
              menu ? "left-0" : "translate-x-fit max-md:-translate-x-full"
            }`}
          >
            <li className="cursor-pointer hover:text-blue-400 max-md:p-1">
              Home
            </li>
            <li
              className="cursor-pointer hover:text-blue-400 max-md:p-1"
              onClick={() => scrollToAbout()}
            >
              About
            </li>
            <li
              className="cursor-pointer hover:text-blue-400 max-md:p-1"
              onClick={() => scrollToSkills()}
            >
              Skills
            </li>
            <li
              className="cursor-pointer hover:text-blue-400 max-md:p-1"
              onClick={() => scrollToProjects()}
            >
              Projects
            </li>
            <li
              className="cursor-pointer hover:text-blue-400 max-md:p-1"
              onClick={() => scrollToEducation()}
            >
              Education
            </li>
            <li
              className="cursor-pointer hover:text-blue-400 max-md:p-1"
              onClick={() => scrollToContact()}
            >
              Contact
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
