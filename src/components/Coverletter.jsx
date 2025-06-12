import React, { useState } from 'react';
import { FileText, Download, Mail, Phone, MapPin, Linkedin, Github, Globe, Copy, Check } from 'lucide-react';

const CoverLetter = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('aarishk623@gmail.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email', err);
    }
  };

  const handleDownload = () => {
    const element = document.createElement('a');
    const file = new Blob([document.getElementById('cover-letter-content').innerText], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = 'Muhammad_Aarish_Ayaz_Cover_Letter.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="min-h-screen mt-10 bg-gray-300 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-gray-400 rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-600 rounded-lg">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-gray-800">Cover Letter</h1>
            </div>
            <button
              onClick={handleDownload}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Download</span>
            </button>
          </div>

          {/* Contact Info Bar */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 bg-gray-300 rounded-lg">
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-blue-600" />
              <span className="text-sm text-gray-600">aarishk623@gmail.com</span>
              <button
                onClick={handleCopyEmail}
                className="p-1 hover:bg-gray-200 rounded"
              >
                {copied ? <Check className="w-3 h-3 text-green-600" /> : <Copy className="w-3 h-3 text-gray-500" />}
              </button>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-blue-600" />
              <span className="text-sm text-gray-600">03023739939</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-blue-600" />
              <span className="text-sm text-gray-600">Mardan, Pakistan</span>
            </div>
            <div className="flex items-center space-x-4">
              <a href="https://linkedin.com/in/aarish-ayaz-1543011b9" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://github.com/AarishAyaz" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900">
                <Github className="w-4 h-4" />
              </a>
              <a href="https://personal-portfolio-three-rouge.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Cover Letter Content */}
        <div className="bg-gray-400 rounded-xl shadow-lg p-8" id="cover-letter-content">
          <div className="prose prose-lg max-w-none">
            {/* <div className="mb-8">
              <p className="text-gray-600 mb-2">[Date]</p>
              <p className="text-gray-600 mb-1">[Hiring Manager's Name]</p>
              <p className="text-gray-600 mb-1">[Company Name]</p>
              <p className="text-gray-600 mb-4">[Company Address]</p>
            </div> */}

            <p className="mb-6 font-medium">Dear Hiring Manager,</p>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                I am writing to express my strong interest in frontend developer, full-stack developer, and DevOps-related positions. As a fresh Computer Science graduate from the University of Engineering and Technology, Mardan, with practical experience in modern web development and a keen interest in DevOps practices, I am excited to begin my professional journey and contribute meaningfully to your organization.
              </p>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  <div className="w-1 h-6 bg-blue-600 rounded mr-3"></div>
                  MERN Stack Expertise & Frontend Specialization
                </h3>
                <p>
                  As a fresh graduate with hands-on freelancing experience, I have developed strong expertise in the MERN stack, with particular strength in frontend development using React.js. I have successfully built and deployed responsive web applications including e-commerce platforms, portfolio websites, landing pages, and admin dashboards. My proficiency in HTML5, CSS3, JavaScript ES6+, React.js, and Tailwind CSS enables me to create intuitive user interfaces with optimal performance. Additionally, my backend experience with Node.js and database management using MySQL provides me with full-stack capabilities when needed.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  <div className="w-1 h-6 bg-blue-600 rounded mr-3"></div>
                  DevOps Interest & Version Control Proficiency
                </h3>
                <p>
                  Beyond frontend development, I have cultivated a strong interest in DevOps practices and modern deployment workflows. My practical experience with Git for version control and collaborative development, combined with foundational knowledge of Docker containerization, demonstrates my understanding of modern software development lifecycle. I am particularly excited about expanding my skills in CI/CD pipelines, cloud deployment, and infrastructure automation as I transition into my professional career.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  <div className="w-1 h-6 bg-blue-600 rounded mr-3"></div>
                  Professional Development & Real-World Experience
                </h3>
                <p>
                  My freelancing experience has provided me with valuable exposure to real-world development challenges and client collaboration. From developing a Netflix UI clone to creating a personal journal application with full CRUD functionality, I have demonstrated my ability to work with different project requirements and deliver quality solutions. My internship at CodeAlpha further strengthened my skills in creating interactive prototypes and writing clean, maintainable code for production environments.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  <div className="w-1 h-6 bg-blue-600 rounded mr-3"></div>
                  Commitment to Continuous Learning
                </h3>
                <p>
                  As a recent graduate entering the tech industry, I bring a strong foundation built through formal education and practical experience, complemented by multiple industry certifications from IBM, Google, University of Michigan, and Udemy. These certifications span React development, technical support, digital marketing, and machine learning fundamentals, showcasing my commitment to staying current with emerging technologies and my eagerness to continuously expand my skill set in both development and DevOps domains.
                </p>
              </div>

              <p>
                As a fresh graduate ready to embark on my professional journey, I am eager to contribute my technical skills, fresh perspective, and enthusiasm for modern web development to your team. Whether in a frontend developer, full-stack developer, or DevOps-focused role, I am confident that my combination of academic foundation, practical experience, and passion for technology will enable me to make meaningful contributions while growing professionally within your organization.
              </p>

              <p>
                Thank you for considering my application. I would welcome the opportunity to discuss how my skills in React.js, MERN stack development, and interest in DevOps practices align with your team's needs and goals.
              </p>

              <p className="mt-8">
                Sincerely,<br />
                <span className="font-semibold">Muhammad Aarish Ayaz</span>
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-8 bg-gradient-to-r from-gray-400 to-gray-700 rounded-xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Connect?</h2>
          <p className="mb-6 opacity-90">
            I'm actively seeking developer and DevOps intern opportunities. Let's discuss how I can contribute to your team!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:aarishk623@gmail.com?subject=Job Opportunity&body=Hi Muhammad Aarish Ayaz, I would like to discuss a potential opportunity with you."
              className="px-6 py-3 bg-gray-400 text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Send Email
            </a>
            <a
              href="https://linkedin.com/in/aarish-ayaz-1543011b9"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border-2 border-white text-white rounded-lg font-medium hover:bg-gray-400 hover:text-blue-600 transition-colors"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverLetter;