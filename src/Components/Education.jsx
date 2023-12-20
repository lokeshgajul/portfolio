import { FaSchool } from "react-icons/fa";
import { LuSchool } from "react-icons/lu";
import PortfolioHook from "../context/PortfolioContext";
function Education() {
  const { theme } = PortfolioHook();
  return (
    <div>
      <div
        className="flex flex-col justify-center items-center"
        id="Education"
        style={{
          backgroundColor: theme === "dark" ? "#303034 " : "white",
          color: theme === "dark" ? "white " : "black",
        }}
      >
        <h1 className="flex justify-center items-center text-4xl font-semibold ">
          Education
        </h1>
        <div className="grid grid-cols-4 px-7 py-7 gap-x-10 max-md:grid-cols-1 ">
          <div
            className={`flex justify-center items-center col-span-2  m-3 rounded-md p-5 shadow-xl cursor-pointer ${
              theme === "dark" ? "bg-[#43434b]" : "bg-slate-200"
            } `}
          >
            <LuSchool size={40} />
            <h2 className="text-xl font-semiBold mx-3">SSC </h2>
            <div className="pl-4">
              <span className=" font-medium text-lg">Vikas High School</span>{" "}
              <h2 className="pt-1.5">85.80%</h2>
            </div>
          </div>

          <div
            className={`flex justify-center items-center col-span-2  m-3 rounded-md p-5 shadow-xl cursor-pointer ${
              theme === "dark" ? "bg-[#43434b]" : "bg-slate-200"
            } `}
          >
            <FaSchool size={40} />
            <h2 className="text-xl font-semiBold mx-3"> Diploma </h2>
            <div className="p-4">
              <span className=" font-medium  text-lg"></span>{" "}
              <h2 className="pt-1.5">Information Technology</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
