import React from "react";

const About = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-6 md:px-20  dark:bg-gray-900 ">
      <h1 className="text-left text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white ">
        Know More About Me!
      </h1>
      <div className="max-w-7xl mt-6 text-lg md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed ">
        <p>
          I am a MERN Stack Developer with a Bachelor’s degree in Computer Science, 
          specializing in designing and developing scalable, high-performance web applications. 
          With expertise in MongoDB, Express.js, React, and Node.js, I create seamless, 
          efficient, and user-centric digital solutions.
        </p>
        <p className="mt-4">
          My skills include developing RESTful APIs, optimizing database performance, and 
          crafting responsive and intuitive front-end interfaces. Passionate about modern 
          web technologies, I strive to build innovative and impactful applications while ensuring 
          clean, maintainable, and efficient code.
        </p>
        <p className="mt-4">
          Committed to continuous learning, I thrive in collaborative environments and 
          excel at problem-solving. I am always eager to take on new challenges that push 
          the boundaries of web development.
        </p>
      </div>
    </section>
  );
};

export default About;
