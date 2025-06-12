<<<<<<< HEAD
import { Link } from 'react-router-dom';
=======
import React from 'react';
>>>>>>> 3fe04712260363ed39b7115c46aeda467ed31f58
import Aarish from '../assets/Aarish.jpg';

const Home = () => {
  return (
    <div className=" flex flex-col md:flex-row items-center justify-center min-h-screen px-10">
      
      {/* Left Side - Text Content */}
      <div className="text-center md:text-left md:w-1/2 space-y-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
          Hello and Welcome to my Portfolio! 👋
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          I am <span className="font-semibold text-2xl text-gray-950">Aarish Ayaz</span>, a passionate 
          <span className="text-blue-600 text-2xl font-extrabold"> Web Developer</span> crafting modern experiences based in <span className="font-extrabold text-2xl">Pakistan</span>.
        </p>
        <a  href="#projects" 
        className="mt-4 px-6 py-3 scroll-smooth bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all">
         
          View My Work
        </a>
<<<<<<< HEAD
        <Link 
         to="/Coverletter"
        className="mt-4 ml-2 px-6 py-3 scroll-smooth bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all">
         
          View Cover Letter
        </Link>
         <a  href="/CV.pdf" 
         target='_blank'
         rel='noopener norefferer'
        className="mt-4 ml-2 px-6 py-3 scroll-smooth bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all">
         
          CV
        </a>
=======
>>>>>>> 3fe04712260363ed39b7115c46aeda467ed31f58
      </div>

      {/* Right Side - Image */}
      <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
        <img 
          src={Aarish} 
          alt="Aarish Ayaz" 
          className="h-90 w-90 rounded-full border-4 border-none shadow-lg object-cover"
        />
      </div>
    </div>
  );
};

export default Home;
