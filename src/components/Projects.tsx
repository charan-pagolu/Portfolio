import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FiGithub, FiExternalLink, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { useTheme } from './theme-provider';

const projects = [
  {
    id: 1,
    title: "NeuroVerse – Mental Wellness App",
    shortDescription: "A cross-platform AI mental wellness app with emotion-aware chatbot, mood tracking, and personalized recommendations. Built with Flutter, Firebase, and OpenAI API.",
    longDescription: [
      "Developed a comprehensive mental wellness application using Flutter for cross-platform compatibility across iOS and Android devices.",
      "Implemented emotion-aware chatbot with adaptive survey flows using OpenAI API for intelligent conversation management.",
      "Built mood pattern tracking system that analyzes user interactions to provide personalized mental health insights and recommendations.",
      "Integrated music recommendation system that suggests songs based on current mood context via YouTube API integration.",
      "Implemented secure authentication using Firebase Auth with SQLite for offline journaling support and data persistence.",
      "Designed beautiful user interface with dark mode support, typing animations, and smooth chat UX for optimal user experience."
    ],
    tech: ["Flutter", "Firebase", "OpenAI API", "Flask", "SQLite", "YouTube API", "JWT"],
    githubUrl: "https://github.com/charan-pagolu/NeuroVerse",
    gradient: "from-purple-400 to-pink-400"
  },
  {
    id: 2,
    title: "Mixed Image Generation (Stable Diffusion)",
    shortDescription: "Advanced image generation system using Stable Diffusion for creating realistic facial blends. Achieved 30% reduction in inference time through GPU optimization.",
    longDescription: [
      "Developed sophisticated image generation system using Stable Diffusion models for creating realistic facial blends and transformations.",
      "Implemented custom denoising algorithms to improve image quality and reduce artifacts in generated outputs.",
      "Optimized GPU utilization and memory management resulting in 30% reduction in inference time for real-time applications.",
      "Built comprehensive preprocessing pipeline using OpenCV for image enhancement and feature extraction.",
      "Created user-friendly interface for parameter tuning and batch processing of image generation tasks.",
      "Integrated advanced sampling techniques and custom loss functions to improve generation quality and consistency."
    ],
    tech: ["Python", "TensorFlow", "Stable Diffusion", "OpenCV", "CUDA", "NumPy"],
    githubUrl: "https://github.com/charan-pagolu/ImageGeneration-StableDiffusion",
    gradient: "from-blue-400 to-purple-400"
  },
  {
    id: 3,
    title: "Trip-to-Utopia",
    shortDescription: "Real-time travel search application with secure JWT authentication and integrated APIs. Features live travel data, booking capabilities, and responsive design.",
    longDescription: [
      "Built comprehensive travel search and booking platform using React.js for dynamic frontend and Node.js for robust backend architecture.",
      "Implemented secure JWT authentication system for user management with MongoDB for scalable data storage and retrieval.",
      "Integrated multiple travel APIs including RoadGoat, Aerodatabox, and Booking APIs for real-time travel data and pricing information.",
      "Developed responsive user interface with interactive maps, search filters, and booking management system.",
      "Implemented real-time data synchronization and caching mechanisms to improve application performance and user experience.",
      "Added comprehensive error handling, input validation, and security measures to ensure reliable and secure operations."
    ],
    tech: ["React.js", "Node.js", "MongoDB", "JWT", "Express", "RoadGoat API", "Aerodatabox API"],
    githubUrl: "https://github.com/charan-pagolu/Trip-To-Utopia",
    gradient: "from-green-400 to-blue-400"
  },
  {
    id: 4,
    title: "Tomato Leaf Disease Detection",
    shortDescription: "High-accuracy plant disease detection system using hybrid CNN + RDN model. Achieved 95% accuracy with advanced image preprocessing for robust classification.",
    longDescription: [
      "Developed state-of-the-art plant disease detection system using hybrid CNN and Residual Dense Network (RDN) architecture.",
      "Achieved 95% accuracy in disease classification through advanced deep learning techniques and extensive model optimization.",
      "Implemented comprehensive image preprocessing pipeline including data augmentation, noise reduction, and feature enhancement.",
      "Built robust classification system capable of identifying multiple disease types with high precision and recall rates.",
      "Published research findings in IJARCCE journal, contributing to the advancement of agricultural technology and precision farming.",
      "Designed user-friendly mobile interface for farmers to easily upload images and receive instant disease diagnosis and treatment recommendations."
    ],
    tech: ["Python", "TensorFlow", "Keras", "CNN", "RDN", "OpenCV", "scikit-learn"],
    githubUrl: "https://github.com/charan-pagolu/TLDD-RDN",
    gradient: "from-green-400 to-red-400"
  }
];

const Projects = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { theme } = useTheme();

  const toggleProject = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="noise" />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="relative min-h-screen w-full max-w-6xl mx-auto px-6 py-24 z-10"
      >
        {/* Header */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="space-y-2 mb-16"
        >
          <span className="text-sm text-muted-foreground uppercase tracking-wider">Portfolio</span>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient-move">
            Featured Projects
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Here are some of my featured projects that showcase my skills in AI, machine learning, 
            full-stack development, and mobile app engineering.
          </p>
        </motion.div>

        {/* Projects List */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2 }}
              className="card-3d group relative rounded-2xl border border-border bg-white/80 dark:bg-card/80 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-500"
              style={{ minHeight: openIndex === index ? 'auto' : '420px' }}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5 rounded-2xl`} />
              
              <div className="relative p-8 h-full flex flex-col">
                {/* Project Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                      {project.shortDescription}
                    </p>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm rounded-full bg-foreground/10 text-foreground hover:bg-foreground/20 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-4 shrink-0">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-foreground text-background hover:bg-foreground/90 transition-all duration-200 hover:scale-105"
                    >
                      <FiGithub className="w-4 h-4" />
                      <span className="text-sm font-medium">Code</span>
                    </a>
                  </div>
                </div>

                {/* Expandable Content */}
                <AnimatePresence mode="wait">
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-border pt-6 mt-6"
                    >
                      <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-primary">Project Details</h4>
                        <ul className="space-y-3">
                          {project.longDescription.map((point, pointIndex) => (
                            <motion.li
                              key={pointIndex}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: pointIndex * 0.1 }}
                              className="flex items-start gap-3 text-muted-foreground leading-relaxed"
                            >
                              <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                              {point}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Expand Button */}
                <div className="mt-auto pt-6">
                  <button
                    onClick={() => toggleProject(index)}
                    className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors group"
                  >
                    <span className="text-sm font-medium">
                      {openIndex === index ? 'Show Less' : 'Learn More'}
                    </span>
                    {openIndex === index ? (
                      <FiChevronUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
                    ) : (
                      <FiChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16 pt-16 border-t border-border"
        >
          <h3 className="text-2xl font-bold mb-4">Interested in working together?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and exciting projects. 
            Let's create something amazing together!
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all duration-200 hover:scale-105 shadow-lg"
          >
            Get In Touch
            <FiExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Projects; 