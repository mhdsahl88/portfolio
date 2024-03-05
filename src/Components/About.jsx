
// import React from 'react';
// const About = () => {
//     return (
//         <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
//             <div className='flex flex-col justify-center items-center w-full h-full'> <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
//                 <div className='sm:text-right pb-8 pl-4'>
//                     <p className='text-4xl font-bold inline border-b-4border-pink-600'>
//                         About
//                     </p>
//                 </div>
//                 <div></div>
//             </div>
//                 <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
//                     <div className='sm:text-right text-4xl font-bold'>
//                         <p>Hi. I'am mohammed sahl , nice to meet you. Please take a look around.</p>
//                     </div>
//                     <div>
//                         <p>I am a dedicated and creative web developer with six month of experience in designing and building responsive, user-friendly websites and web applications. My passion for technology and problem-solving drives me to stay updated with the latest trends and best practices in web development. With a strong foundation in front-end and back-end technologies, I excel at translating client requirements into high-quality, scalable solutions</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };
// export default About;
import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-black to-red-900 text-gray-100'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-4xl w-full grid grid-cols-1 sm:grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8'>
            <h2 className='text-4xl font-bold border-b-4 border-pink-600'>About</h2>
          </div>
          <div className='px-4'>
            <p className='text-2xl leading-relaxed'>
              Hi, I'm Mohammed Sahl, nice to meet you. Please take a look around.
            </p>
          </div>
        </div>

        <div className='max-w-4xl w-full grid sm:grid-cols-2 gap-8 px-4 mt-8'>
          <div className='sm:text-right'>
            <h3 className='text-3xl font-bold mb-4'>Experience & Skills</h3>
            <p className='text-lg leading-relaxed'>
              I am a dedicated and creative web developer with six months of experience in designing and building responsive, user-friendly websites and web applications. My passion for technology and problem-solving drives me to stay updated with the latest trends and best practices in web development. With a strong foundation in front-end and back-end technologies, I excel at translating client requirements into high-quality, scalable solutions.
            </p>
          </div>
          <div>
            <h3 className='text-3xl font-bold mb-4'>Education</h3>
            <p className='text-lg leading-relaxed'>
              I hold a degree in Computer Science from [Your University], where I gained a solid understanding of data structures, algorithms, and software engineering principles. Throughout my education, I actively participated in various coding competitions and projects, honing my problem-solving and coding skills.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
