import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaServer, FaDatabase, FaTools } from "react-icons/fa";

const About = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <section id="about" className="py-20 px-6 md:px-8  dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Passionate MERN stack developer specializing in creating seamless web experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Professional Background */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="bg-gray-500 dark:bg-gray-800 rounded-xl shadow-lg p-8"
          >
            <motion.h3 
              variants={itemVariants}
              className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center"
            >
              <span className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-3">
                <FaLaptopCode className="text-blue-600 dark:text-blue-400" />
              </span>
              Professional Background
            </motion.h3>

            <div className="space-y-5 text-gray-700 dark:text-gray-300">
              <motion.p variants={itemVariants}>
                I am a <span className="text-black dark:text-blue-400 font-medium">MERN Stack Developer</span> with a Bachelor's degree in Computer Science,
                specializing in designing and developing scalable, high-performance web applications.
              </motion.p>
              
              <motion.p variants={itemVariants}>
                With expertise in MongoDB, Express.js, React, and Node.js, I create seamless,
                efficient, and user-centric digital solutions that solve real-world problems.
              </motion.p>
              
              <motion.p variants={itemVariants}>
                My professional journey includes developing RESTful APIs, optimizing database performance, and
                crafting responsive and intuitive front-end interfaces. I'm passionate about creating clean,
                maintainable code that scales with business needs.
              </motion.p>
            </div>
          </motion.div>

          {/* Skills & Approach */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="bg-gray-500 dark:bg-gray-800 rounded-xl shadow-lg p-8"
          >
            <motion.h3 
              variants={itemVariants}
              className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center"
            >
              <span className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-3">
                <FaTools className="text-blue-600 dark:text-blue-400" />
              </span>
              My Approach
            </motion.h3>

            <div className="space-y-5 text-gray-700 dark:text-gray-300">
              <motion.p variants={itemVariants}>
                I approach each project with a focus on <span className="text-black dark:text-blue-400 font-medium">user experience</span> and 
                <span className="text-black dark:text-blue-400 font-medium"> performance optimization</span>. Understanding the end-user's needs
                is central to my development process.
              </motion.p>
              
              <motion.p variants={itemVariants}>
                Committed to continuous learning, I stay current with emerging technologies and best practices.
                I thrive in collaborative environments and excel at problem-solving complex technical challenges.
              </motion.p>
              
              <motion.p variants={itemVariants}>
                I'm always eager to take on new challenges that push the boundaries of web development and
                create solutions that make a meaningful impact.
              </motion.p>
            </div>
          </motion.div>
        </div>

        {/* Core Competencies */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16"
        >
          <motion.h3 
            variants={itemVariants}
            className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center"
          >
            Core Competencies
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div 
              variants={itemVariants}
              className="bg-gray-500 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-blue-600 dark:text-blue-400 text-xl mb-4">
                <FaLaptopCode className="text-3xl mb-2" />
                <h4 className="font-bold text-gray-900 dark:text-white">Frontend Development</h4>
              </div>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  React.js component architecture
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  State management with Redux
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  Responsive design with Tailwind & Bootstrap
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  Modern JavaScript (ES6+)
                </li>
              </ul>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="bg-gray-500 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-blue-600 dark:text-blue-400 text-xl mb-4">
                <FaServer className="text-3xl mb-2" />
                <h4 className="font-bold text-gray-900 dark:text-white">Backend Development</h4>
              </div>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  Node.js & Express framework
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  RESTful API development
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  Authentication & authorization
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  PHP application development
                </li>
              </ul>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="bg-gray-500 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-blue-600 dark:text-blue-400 text-xl mb-4">
                <FaDatabase className="text-3xl mb-2" />
                <h4 className="font-bold text-gray-900 dark:text-white">Database & DevOps</h4>
              </div>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  MongoDB database design
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  Docker containerization
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  Git version control & collaboration
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  CI/CD pipeline implementation
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-16 text-center"
        >
          <a 
            href="#projects" 
            className="inline-block py-3 px-8 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
          >
            Explore My Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;