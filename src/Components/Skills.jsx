import { AiOutlineHtml5 } from "react-icons/ai";
import { FaNodeJs } from "react-icons/fa";
import {
  BiLogoCss3,
  BiLogoTailwindCss,
  BiLogoReact,
  BiLogoMongodb,
} from "react-icons/bi";
import PortfolioHook from "../context/PortfolioContext";
function Skills() {
  const { theme } = PortfolioHook();
  return (
    <>
      <div
        className="flex flex-col justify-center items-center"
        id="Skills"
        style={{
          backgroundColor: theme === "dark" ? "#303034" : "white",
          color: theme === "dark" ? "white " : "black",
        }}
      >
        <h1 className="flex justify-center items-center text-4xl font-semibold ">
          Skills
        </h1>
        <div className="grid grid-cols-4 px-7 py-7 gap-x-10 max-md:grid-cols-2 max-lg:grid-cols-3 ">
          <div className="flex flex-col items-center bg-[#E6F7FF] mt-5 rounded-md px-10 py-5 shadow-xl skill-div text-orange-500 hover:text-orange-600 cursor-pointer">
            <AiOutlineHtml5 size={60} />
            <h2 className="text-xl font-bold text-black">Html</h2>
          </div>
          <div className="flex flex-col items-center bg-[#E6F7FF] mt-5 rounded-md px-10 py-5 shadow-xl skill-div text-blue-500 hover:text-blue-600 cursor-pointer">
            <BiLogoCss3 size={60} />
            <h2 className="text-xl font-bold text-black">Css</h2>
          </div>
          <div className="flex flex-col items-center bg-[#E6F7FF] mt-5 rounded-md px-10 py-5 shadow-xl skill-div text-cyan-500 hover:text-cyan-600 cursor-pointer">
            <BiLogoTailwindCss size={60} />
            <h2 className="text-xl font-bold text-black">Tailwind Css</h2>
          </div>
          <div className="flex flex-col items-center bg-[#E6F7FF] mt-5 rounded-md px-10 py-5 shadow-xl skill-div  text-cyan-800 hover:text-cyan-600 cursor-pointer">
            <BiLogoReact size={60} />
            <h2 className="text-xl font-bold text-black">React </h2>
          </div>
          <div className="flex flex-col items-center bg-[#E6F7FF] mt-5 rounded-md px-10 py-5 shadow-xl skill-div text-green-500 hover:text-green-600 cursor-pointer">
            <BiLogoMongodb size={60} />
            <h2 className="text-xl font-bold text-black">Mongodb</h2>
          </div>
          <div className="flex flex-col items-center bg-[#E6F7FF] mt-5 rounded-md w-[100%] px-10 py-5 shadow-xl skill-div text-green-600 hover:text-green-800 cursor-pointer">
            <FaNodeJs size={60} />
            <h2 className="text-xl font-bold text-black">Node Js</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
