import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between  items-center px-4 bg-[#0d0606] text-gray-300'>
      <div> <h1 className=' text-white'>LOGO</h1></div>
      {/* menu */}

      <ul className='hidden md:flex'>
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>

      {/* hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* mobilemenu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 w-full f-screen bg-[#353f4d] flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'>Home</li>
        <li className='py-6 text-4xl'>About</li>
        <li className='py-6 text-4xl'>Skills</li>
        <li className='py-6 text-4xl'>Work</li>
        <li className='py-6 text-4xl'>Contact</li>
      </ul>
      {/* social icons */}

      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>


          

          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>

            <a className='flex justify-between items-center w-full text-gray-300'

              href="/">

              Linkedin <FaLinkedin size={30} />
              </a>

          </li>
          
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#272626]'>

            <a className='flex justify-between items-center w-full text-gray-300'

              href="/">

              Github <FaGithub size={30} />
              </a>

          </li>
          
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0b6331]'>

            <a className='flex justify-between items-center w-full text-gray-300'

              href="/">

              Email <HiOutlineMail  size={30} />
              </a>

          </li>
          
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#8a7c7c]'>

            <a className='flex justify-between items-center w-full text-gray-300'

              href="/">

              Resume <BsFillPersonLinesFill size={30} />
              </a>

          </li>
        </ul>


      </div>
    </div>
  );
}

export default Navbar;
// import React, { useState } from 'react';
// import { FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
// import { HiOutlineMail } from 'react-icons/hi';
// import { BsFillPersonLinesFill } from "react-icons/bs";

// const Navbar = () => {
//   const [nav, setNav] = useState(false);
//   const handleClick = () => setNav(!nav);

//   return (
//     <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-gradient-to-r from-red-600 to-red-900 text-gray-100'>
//       <div>
//         <h1 className='text-2xl font-bold text-white'>LOGO</h1>
//       </div>
      
//       {/* Desktop Menu */}
//       <ul className='hidden md:flex space-x-8 text-lg'>
//         <li>Home</li>
//         <li>About</li>
//         <li>Skills</li>
//         <li>Work</li>
//         <li>Contact</li>
//       </ul>

//       {/* Hamburger */}
//       <div className='md:hidden'>
//         <button onClick={handleClick} className='text-3xl text-white'>
//           {nav ? <FaTimes /> : <FaBars />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <ul className={`md:hidden absolute top-16 right-0 z-50 flex flex-col bg-gray-900 text-white w-40 text-lg ${nav ? 'flex' : 'hidden'}`}>
//         <li className='py-4'>Home</li>
//         <li className='py-4'>About</li>
//         <li className='py-4'>Skills</li>
//         <li className='py-4'>Work</li>
//         <li className='py-4'>Contact</li>
//       </ul>

//       {/* Social Icons */}
//       <div className='hidden lg:flex fixed flex-col top-1/2 right-4 transform -translate-y-1/2 space-y-4'>
//         <SocialLink bg="#0e76a8" icon={<FaLinkedin size={24} />} text="Linkedin" />
//         <SocialLink bg="#211F1F" icon={<FaGithub size={24} />} text="Github" />
//         <SocialLink bg="#0b6331" icon={<HiOutlineMail size={24} />} text="Email" />
//         <SocialLink bg="#8a7c7c" icon={<BsFillPersonLinesFill size={24} />} text="Resume" />
//       </div>
//     </div>
//   );
// };

// const SocialLink = ({ bg, icon, text }) => {
//   return (
//     <a href="/" className={`flex items-center justify-between w-40 h-12 rounded-lg px-4 text-gray-100 hover:translate-x-2 transition duration-300 bg-opacity-60 bg-${bg}`}>
//       <span>{text}</span>
//       {icon}
//     </a>
//   );
// };

// export default Navbar;
