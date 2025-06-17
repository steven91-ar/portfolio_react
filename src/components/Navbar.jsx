
import logo from '../assets/Logo_SS.png'; 
import { FaLinkedin, FaGithub,  } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6"> 
    <div className ="flex-shrink-0 items-center">
      <img className="mx-2 w-10" src={logo} alt="Logo" ></img>
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/steven-sinprasith/" 
           target="_blank" 
           rel="noopener noreferrer" 
           className="text-blue-600 hover:text-blue-800">
          <FaLinkedin />
        </a>

        <a href="https://github.com/steven91-ar" 
           target="_blank" 
           rel="noopener noreferrer" 
           className="text-black hover:text-gray-700">
          <FaGithub />
        </a>

        <a href="/cv.pdf" 
           target="_blank" 
           rel="noopener noreferrer" 
           className="text-sm font-medium border px-3 py-1 rounded hover:bg-neutral-200">
          Mon CV
        </a>
      </div>
    </nav>
  )
}

export default Navbar
