import React, {useState} from 'react';
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import Logo from '../assets/logo.png';
import {Link} from 'react-scroll';
import CV from '../assets/Aleksandrov_CV_EN.pdf';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#7c3333]  text-gray-300'>
            <div>
                <img src={Logo} alt="Logo" style={{width: '50px'}} />
            </div>

            {/*menu*/}
            <ul className='hidden md:flex'> {/*when under 750px it removes the names */}
                <li>
                  <Link to="home" smooth={true}  duration={500}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="about" smooth={true}  duration={500}>
                    About
                  </Link>
                </li>
                <li>
                  <Link to="skills" smooth={true}  duration={500}>
                    Skills
                  </Link>
                </li>
                <li>
                  <Link to="work" smooth={true}  duration={500}>
                    Projects
                  </Link>
                </li>
                <li>
                  <Link to="contact" smooth={true}  duration={500}>
                    Contact
                  </Link>
                </li>
            </ul>

            {/*hamburger menu*/}
            <div onClick = {handleClick} className='md:hidden z-10'>
                {!nav  ?  <FaBars /> : <FaTimes />}
            </div>
            
            {/*mobile menu*/}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#7c3333] flex flex-col justify-center items-center'}>
                <li className="py-6 text-4xl">
                  <Link onClick={handleClick} to="home" smooth={true}  duration={500}>
                    Home
                  </Link>
                </li>
                <li className="py-6 text-4xl">
                  <Link onClick={handleClick} to="about" smooth={true}  duration={500}>
                    About
                  </Link>
                </li>
                <li className="py-6 text-4xl">
                  <Link onClick={handleClick} to="skills" smooth={true}  duration={500}>
                    Skills
                  </Link>
                </li>
                <li className="py-6 text-4xl">
                  <Link onClick={handleClick} to="work" smooth={true}  duration={500}>
                    Projects
                  </Link>
                </li>
                <li className="py-6 text-4xl">
                  <Link onClick={handleClick} to="contact" smooth={true}  duration={500}>
                    Contact
                  </Link>
                </li>
            </ul>

            {/*social icons*/}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'> {/* hidden until large 1024px*/}
                <ul>
                  <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a className='flex justify-between items-center w-full text-gray-300' href='https://www.linkedin.com/in/daniel-aleksandrov-93b6ba291' target="_blank" rel="noopener noreferrer" >
                      Linkedin <FaLinkedin size={30}/>
                    </a>
                  </li>
                  <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                    <a className='flex justify-between items-center w-full text-gray-300' href='https://github.com/DanielAleks22?tab=repositories' target="_blank" rel="noopener noreferrer">
                      GitHub <FaGithub size={30}/>
                    </a>
                  </li>
                  <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#704c1c]'>
                    <a className='flex justify-between items-center w-full text-gray-300' href='mailto:daniel.al123@outlook.com'>
                      Email <HiOutlineMail size={30}/>
                    </a>
                  </li>
                  <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#7e2c2c]'>
                  <a className='flex justify-between items-center w-full text-gray-300' href={CV} target="_blank" rel="noopener noreferrer">
                      Resume <BsFillPersonLinesFill size={30}/>
                    </a>
                  </li>
                </ul>

            </div>
            
    </div>
  )
}

export default Navbar