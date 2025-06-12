import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Netflix1 from "../assets/Netflix-1.png";
import Netflix2 from "../assets/Netflix-2.png";
import Netflix3 from "../assets/Netflix-3.png";
import Netflix4 from "../assets/Netflix-4.png";
import { motion } from "framer-motion";
import AMS1 from "../assets/AMS-1.png";
import AMS2 from "../assets/AMS-2.png";
import AMS3 from "../assets/AMS-3.png";
import AMS4 from "../assets/AMS-4.png";
import AMS5 from "../assets/AMS-5.png";
import AMS6 from "../assets/AMS-6.png";
import AMS7 from "../assets/AMS-7.png";
import AMS8 from "../assets/AMS-8.png";
import E1 from "../assets/E-1.png";
import E2 from "../assets/E-2.png";
import E3 from "../assets/E-3.png";
import E4 from "../assets/E-4.png";
import E5 from "../assets/E-5.png";

// Icons
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaJs, FaPhp, FaBootstrap } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress, SiFirebase, SiMysql } from "react-icons/si";

const projects = [
  {
    id: 1,
    title: "Netflix Clone",
    description: "A feature-rich Netflix clone built using React JS with TMDB API for real-time movie data. It offers user-friendly UI, dynamic content filtering, and a seamless streaming experience with responsive design.",
    images: [Netflix1, Netflix2, Netflix3, Netflix4],
    link: "https://netflix-clone-xi-silk-88.vercel.app/",
    github: "https://github.com/yourusername/netflix-clone",
    technologies: ["react", "tailwind"]
  },
  {
    id: 2,
    title: "Attendance Management System",
    description: "The Attendance Management System is a web-based application developed using PHP and Bootstrap to streamline the process of tracking and managing student attendance within an academic environment. The system is designed to offer a user-friendly interface for both administrators and students, ensuring efficient management of attendance records.",
    images: [AMS1,AMS2,AMS3,AMS4,AMS5,AMS6,AMS7,AMS8],
    link: "https://github.com/AarishAyaz/Attendance_management-system.git",
    github: "https://github.com/AarishAyaz/Attendance_management-system.git",
    technologies: ["HTML5"," CSS3", "javascript", "bootstrap", "php", "mysql"]
  },
  {
    id: 3,
    title: "Evolve Solutions",
    description:"Evolve Solutions transforms businesses with expert technology consulting and custom development services. We specialize in software solutions, cloud migration, and data analytics that drive innovation and help organizations reach their full potential.",
    images: [E1, E2,E3,E4,E5],
    link: "https://evolve-solutions.vercel.app/",
    github: "https://github.com/AarishAyaz/Evolve-Solutions.git",
    technologies: ["react", "tailwind"]
  },
];

const TechIcon = ({ tech }) => {
  switch (tech) {
    case "react":
      return <FaReact className="text-blue-400" title="React" />;
    case "node":
      return <FaNodeJs className="text-green-600" title="Node.js" />;
    case "mongodb":
      return <SiMongodb className="text-green-500" title="MongoDB" />;
    case "express":
      return <SiExpress className="text-gray-600" title="Express.js" />;
    case "tailwind":
      return <SiTailwindcss className="text-cyan-400" title="Tailwind CSS" />;
    case "firebase":
      return <SiFirebase className="text-yellow-500" title="Firebase" />;
    case "javascript":
      return <FaJs className="text-yellow-400" title="JavaScript" />;
    case "php":
      return <FaPhp className="text-purple-500" title="PHP" />;
    case "bootstrap":
      return <FaBootstrap className="text-purple-600" title="Bootstrap" />;
    case "mysql":
      return <SiMysql className="text-blue-500" title="MySQL" />;
    default:
      return null;
  }
};

const Projects = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 flex justify-center items-center h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Explore some of my recent work showcasing my skills and expertise in web development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="relative bg-white rounded-xl shadow-xl overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: project.id * 0.1 }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image Carousel */}
              <div className="relative h-56 overflow-hidden">
                <Swiper
                  modules={[Navigation, Pagination, Autoplay, EffectFade]}
                  effect="fade"
                  navigation
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  className="h-full"
                >
                  {project.images.map((image, index) => (
                    <SwiperSlide key={index}>
                      <div className="relative w-full h-56">
                        <img 
                          src={image} 
                          alt={`${project.title} screenshot ${index + 1}`} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                
                {/* Hover overlay with links */}
                <div className={`absolute inset-0 bg-blue-600/80 flex items-center justify-center gap-6 transition-opacity duration-300 ${hoveredId === project.id ? 'opacity-100' : 'opacity-0'}`}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-gray-900 p-3 rounded-full transform transition-transform hover:scale-110"
                    aria-label={`Github repository for ${project.title}`}
                  >
                    <FaGithub className="text-xl" />
                  </a>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-gray-900 p-3 rounded-full transform transition-transform hover:scale-110"
                    aria-label={`Live demo for ${project.title}`}
                  >
                    <FaExternalLinkAlt className="text-xl" />
                  </a>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
                
                {/* Tech stack icons */}
                <div className="flex gap-3 mb-3">
                  {project.technologies.map((tech) => (
                    <div key={tech} className="text-xl">
                      <TechIcon tech={tech} />
                    </div>
                  ))}
                </div>
                
                <p className="text-gray-700 mb-4 line-clamp-3">{project.description}</p>
                
                <div className="flex justify-between items-center">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 font-medium flex items-center gap-1 group"
                  >
                    View Project
                    <span className="inline-block transform transition-transform group-hover:translate-x-1">→</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;