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

// Icons
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress, SiFirebase } from "react-icons/si";

const projects = [
  {
    id: 1,
    title: "Netflix Clone",
    description: "A feature-rich Netflix clone built using React JS with TMDB API for real-time movie data. It offers user-friendly UI, dynamic content filtering, and a seamless streaming experience with responsive design.",
    images: [Netflix1, Netflix2, Netflix3, Netflix4],
    link: "https://netflix-clone-xi-silk-88.vercel.app/",
    github: "https://github.com/yourusername/netflix-clone",
    technologies: ["react", "firebase", "tailwind"]
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A modern personal portfolio showcasing my skills & projects. Built with React and Tailwind CSS featuring responsive design, dark mode, and smooth animations.",
    images: ["/assets/portfolio-1.jpg", "/assets/portfolio-2.jpg", "/assets/portfolio-3.jpg"],
    link: "https://your-portfolio.com",
    github: "https://github.com/yourusername/portfolio",
    technologies: ["react", "tailwind", "framer-motion"]
  },
  {
    id: 3,
    title: "Chat Application",
    description: "Real-time chat app using React, Node.js, Socket.io & MongoDB. Features include user authentication, private messaging, group chats, and file sharing capabilities.",
    images: ["/assets/chatapp-1.jpg", "/assets/chatapp-2.jpg", "/assets/chatapp-3.jpg"],
    link: "https://your-chatapp.com",
    github: "https://github.com/yourusername/chat-app",
    technologies: ["react", "node", "mongodb", "express"]
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
    default:
      return null;
  }
};

const Projects = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 dark:from-gray-900 dark:to-gray-800 flex justify-center items-center h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            Explore some of my recent work showcasing my skills and expertise in web development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="relative bg-gray-500 dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden group"
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
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                
                {/* Tech stack icons */}
                <div className="flex gap-3 mb-3">
                  {project.technologies.map((tech) => (
                    <div key={tech} className="text-xl">
                      <TechIcon tech={tech} />
                    </div>
                  ))}
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">{project.description}</p>
                
                <div className="flex justify-between items-center">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 font-medium flex items-center gap-1 group"
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