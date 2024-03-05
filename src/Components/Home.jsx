// import React from 'react'
// import {HiArrowNarrowRight} from 'react-icons/hi'

// const Home = () => {
//   return (
// <div name='home' className='w-full h-screen bg-[#0a192f]'>
//         {/* container */}
//       <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
//          <p className='text-pink-600'>Hi  my name is</p>
//          <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Mohammed sahl vu</h1>
//          <h2 className='text-3xl sm:text-6xl font-bold text-[#8892b0]'> mern stack developer.</h2>
//          <p className='text-[#8892b0] py-4 max-w-[700px]'> I'm a passionate MERN stack developer with a keen eye for crafting seamless and intuitive web applications. With a foundation built on MongoDB, Express.js, React.js, and Node.js, I thrive on turning innovative ideas into robust and scalable digital solutions.</p>
//          <div>
//           <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>View work 
//           <span className=' group-hover:rotate-90 duration-300'>
//           <HiArrowNarrowRight className='ml-3'/>
//           </span>
//            </button>
//          </div>

//       </div>

//     </div>
//   )
// }

// export default Home
import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-gradient-to-b from-black to-red-900'>
      <div className='max-w-4xl mx-auto px-8 flex flex-col justify-center h-full text-center'>
        <p className='text-red-500 text-lg sm:text-xl'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-6xl font-bold text-white mt-2 mb-4'>Mohammed sahl vu</h1>
        <h2 className='text-2xl sm:text-4xl font-bold text-gray-200 mb-6'>MERN Stack Developer</h2>
        <p className='text-gray-300 py-4 max-w-lg mx-auto'>I'm a passionate MERN stack developer with a keen eye for crafting seamless and intuitive web applications. With a foundation built on MongoDB, Express.js, React.js, and Node.js, I thrive on turning innovative ideas into robust and scalable digital solutions.</p>
        <div>
          <button className='text-white border-2 border-white px-6 py-3 my-2 flex items-center justify-center rounded-full transition-colors duration-300 hover:bg-white hover:text-red-900'>
            View Work
            <span className='ml-2'>
              <HiArrowNarrowRight />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

