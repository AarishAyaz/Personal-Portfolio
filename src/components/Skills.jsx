import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CoreTechnologies from './CoreTechnologies';

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const skillCategories = [
    { id: 'all', label: 'All Skills' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'database', label: 'Database' },
    { id: 'devops', label: 'DevOps' },
    { id: 'tools', label: 'Tools & Others' },
  ];

  const skills = [
    // Frontend
    { name: 'HTML5', category: 'frontend', icon: 'devicon-html5-plain colored', proficiency: 95 },
    { name: 'CSS3', category: 'frontend', icon: 'devicon-css3-plain colored', proficiency: 90 },
    { name: 'JavaScript', category: 'frontend', icon: 'devicon-javascript-plain colored', proficiency: 90 },
    { name: 'React', category: 'frontend', icon: 'devicon-react-original colored', proficiency: 85 },
    { name: 'Tailwind CSS', category: 'frontend', icon: 'devicon-tailwindcss-plain colored', proficiency: 80 },
    { name: 'Bootstrap', category: 'frontend', icon: 'devicon-bootstrap-plain colored', proficiency: 85 },
    { name: 'Redux', category: 'frontend', icon: 'devicon-redux-original colored', proficiency: 75 },
    
    // Backend
    { name: 'Node.js', category: 'backend', icon: 'devicon-nodejs-plain colored', proficiency: 80 },
    { name: 'Express', category: 'backend', icon: 'devicon-express-original', proficiency: 80 },
    { name: 'PHP', category: 'backend', icon: 'devicon-php-plain colored', proficiency: 70 },
    
    // Database
    { name: 'MongoDB', category: 'database', icon: 'devicon-mongodb-plain colored', proficiency: 85 },
    { name: 'MySQL', category: 'database', icon: 'devicon-mysql-plain colored', proficiency: 75 },
    
    // DevOps
    { name: 'Git', category: 'devops', icon: 'devicon-git-plain colored', proficiency: 85 },
    { name: 'Docker', category: 'devops', icon: 'devicon-docker-plain colored', proficiency: 70 },

    
    // Tools & Others
    { name: 'VS Code', category: 'tools', icon: 'devicon-vscode-plain colored', proficiency: 90 },
    { name: 'Figma', category: 'tools', icon: 'devicon-figma-plain colored', proficiency: 75 },
    { name: 'npm/yarn', category: 'tools', icon: 'devicon-npm-original-wordmark colored', proficiency: 85 },
    { name: 'Webpack', category: 'tools', icon: 'devicon-webpack-plain colored', proficiency: 65 },
  ];

  // Filter skills based on active category
  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  // Stagger animation for skills
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  return (
    <section id="skills" className="py-20 ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">My Skills</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I specialize in MERN stack development with expertise in various technologies
            including frontend frameworks, backend systems, databases, and DevOps tools.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {skillCategories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-blue-500 text-white shadow-md'
                  : 'bg-gray-400 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={activeCategory} // Re-trigger animation when category changes
        >
          {filteredSkills.map((skill, index) => (
            <motion.div 
              key={skill.name} 
              className="bg-gray-500 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center"
              variants={itemVariants}
            >
              <div className="text-4xl mb-4">
                <i className={skill.icon}></i>
              </div>
              <h3 className="font-medium text-gray-800 mb-2">{skill.name}</h3>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
                <div 
                  className="bg-blue-500 h-2 rounded-full" 
                  style={{ width: `${skill.proficiency}%` }}
                ></div>
              </div>
              <span className="text-xs text-gray-800">{skill.proficiency}%</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Stack Highlight */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-6">Core Technologies</h3>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            <div className="flex flex-col items-center">
              <div className="text-5xl mb-2"><i className="devicon-mongodb-plain colored"></i></div>
              <span className="text-sm text-gray-600">MongoDB</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-5xl mb-2"><i className="devicon-express-original"></i></div>
              <span className="text-sm text-gray-600">Express</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-5xl mb-2"><i className="devicon-react-original colored"></i></div>
              <span className="text-sm text-gray-600">React</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-5xl mb-2"><i className="devicon-nodejs-plain colored"></i></div>
              <span className="text-sm text-gray-600">Node.js</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;