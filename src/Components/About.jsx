import logo from "../assets/portfolioImage.png";
import PortfolioHook from "../context/PortfolioContext";
function About() {
  const { theme } = PortfolioHook();

  return (
    <div
      className="flex flex-row-reverse max-md:flex-col justify-center items-center px-6 p-10 bg-[#303034]"
      id="About"
      style={{
        backgroundColor: theme === "dark" ? "#303034 " : "white",
        color: theme === "dark" ? "white " : "black",
      }}
    >
      <div className="p-3 md:w-[50%]">
        <h2 className="text-3xl font-semibold">About Me</h2>
        <h2 className="text-2xl py-1 text-blue-600">Web Developer</h2>
        <p className="text-md">
          Hello !!! I am I am Lokesh Santosh Gajul.Currently pursuing diploma in
          Information Technology from Government Polytechnic Mumbai.I am very
          much interested in programming and web development.Enthusiastic to
          improve my knowledge and learn new Technolgies.Programming Language
          and Frameworks known: Javascript React js Node js Express js Python C
          C++ Java
        </p>
      </div>
      <div className=" flex justify-center items-center">
        <img className="max-w-[70%]" src={logo} alt="" />
      </div>
    </div>
  );
}

export default About;
