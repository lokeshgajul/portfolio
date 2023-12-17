import { FaSchool } from "react-icons/fa";
import { LuSchool } from "react-icons/lu";
function Education() {
  return (
    <div>
      <div
        className="flex flex-col justify-center items-center py-10 px-24"
        id="Education"
      >
        <h1 className="flex justify-center items-center text-4xl font-semibold ">
          Education
        </h1>
        <div className="grid grid-cols-4 px-7 py-7 gap-x-10 max-md:grid-cols-2 max-lg:grid-cols-3 ">
          <div className="flex justify-center items-center col-span-2 bg-slate-200 mt-3 rounded-md px-10 py-5 shadow-xl cursor-pointer">
            <LuSchool size={40} />
            <h2 className="text-xl font-semiBold text-black mx-3">SSC </h2>
            <div className="p-4">
              <span className="text-gray-900 font-medium text-lg">
                Vikas High School
              </span>{" "}
              <h2 className="pt-1.5">85.80%</h2>
            </div>
          </div>
          <div className="flex justify-center items-center col-span-2 bg-slate-200 mt-3 rounded-md px-10 py-5 shadow-xl skill-div   cursor-pointer">
            <FaSchool size={40} />
            <h2 className="text-xl font-semiBold text-black mx-3"> Diploma </h2>
            <div className="p-4">
              <span className="text-gray-900 font-medium  text-lg">
                Government Polytechnic Mumbai
              </span>{" "}
              <h2 className="pt-1.5">Information Technology</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
