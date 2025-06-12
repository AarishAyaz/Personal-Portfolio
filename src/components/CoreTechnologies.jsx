import { motion } from "framer-motion";

const CoreTechnologies = () => {
  return (
    <div className="mt-16 text-center">
      <motion.h3 
        className="text-xl font-bold text-gray-800 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Core Technologies
      </motion.h3>

      <motion.div 
        className="flex flex-wrap justify-center gap-8 items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {[
          { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
          { name: "Express", icon: "devicon-express-original" },
          { name: "React", icon: "devicon-react-original colored" },
          { name: "Node.js", icon: "devicon-nodejs-plain colored" },
        ].map((tech, index) => (
          <motion.div 
            key={tech.name}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.1 }}
          >
            <div className="text-5xl mb-2">
              <i className={tech.icon}></i>
            </div>
            <span className="text-sm text-gray-600">{tech.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default CoreTechnologies;
