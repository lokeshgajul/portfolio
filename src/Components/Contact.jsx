import { FaLinkedin } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";
import { IoMdCall } from "react-icons/io";
function Contact() {
  return (
    <div>
      <div className="p-2 bg-slate-300" id="Contact">
        <div className=" col-span-5  font-semibold">
          <h2 className="text-center py-5 text-2xl">Lokesh Santosh Gajaul </h2>
          <h2 className="text-center">Copyright ©2023. All Rights Reserved.</h2>
        </div>
        <div>
          <div className="flex justify-center lg:justify-end items-end text-white">
            <div className="flex px-3 py-5 text-[#0a66c2] hover:text-[#0a38c2] cursor-pointer">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/lokesh-gajul-697069237/"
                rel="noreferrer"
              >
                {" "}
                <FaLinkedin size={30} />
              </a>
            </div>
            <div className="flex px-3 py-5 text-[#26313f] hover:text-[#1b222c] cursor-pointer">
              <a
                target="_blank"
                href="https://github.com/lokeshgajul/"
                rel="noreferrer"
              >
                <VscGithub size={30} />{" "}
              </a>
            </div>
            <div className="flex px-3 py-5 text-[#1b222c] cursor-pointer">
              <span>
                <a
                  target="_blank"
                  href="https://github.com/lokeshgajul/"
                  rel="noreferrer"
                >
                  {" "}
                  <IoMdCall size={30} />
                </a>
              </span>
              <span> +91 9321531486 </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
