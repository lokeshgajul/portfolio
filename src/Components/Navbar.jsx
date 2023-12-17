import { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { TfiClose } from "react-icons/tfi";

function Navbar() {
  const [menu, setMenu] = useState(false);

  const handleClick = () => setMenu(!menu);

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
      <div className="shadow-lg overflow-x-auto bg-slate-300">
        <nav className="flex justify-between mx-12 py-7 text-lg">
          <li className="font-bold text-2xl text-blue-500 list-none">Lokesh</li>
          <div
            onClick={handleClick}
            className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
          >
            {menu ? <TfiClose size={20} /> : <RiMenu3Fill size={20} />}
          </div>
          <ul
            className={`md:flex max-md:absolute p-3 max-md:bg-slate-300 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-700 ease-in-out top-16 md:space-x-4  ${
              menu ? "left-0" : "-left-full"
            }`}
          >
            <li className="cursor-pointer hover:text-blue-400 p-1">Home</li>
            <li
              className="cursor-pointer hover:text-blue-400 p-1"
              onClick={() => scrollToAbout()}
            >
              About
            </li>
            <li
              className="cursor-pointer hover:text-blue-400 p-1"
              onClick={() => scrollToSkills()}
            >
              Skills
            </li>
            <li
              className="cursor-pointer hover:text-blue-400 p-1"
              onClick={() => scrollToProjects()}
            >
              Projects
            </li>
            <li
              className="cursor-pointer hover:text-blue-400 p-1"
              onClick={() => scrollToEducation()}
            >
              Education
            </li>
            <li
              className="cursor-pointer hover:text-blue-400 p-1"
              onClick={() => scrollToContact()}
            >
              Contact
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
