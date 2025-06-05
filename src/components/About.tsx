import { motion, AnimatePresence } from 'framer-motion';
import { FiCalendar, FiMapPin, FiArrowUpRight } from 'react-icons/fi';
import { useEffect, useState } from 'react';

const education = [
  {
    school: "University of Dayton",
    degree: "MS in Computer Science",
    period: "2023 – 2025 (Graduated)",
    location: "Dayton, Ohio",
    description: "Specialized in AI, Deep Learning, OS, Algorithm Design, DBMS."
  },
  {
    school: "Matrusri Engineering College",
    degree: "BE in Information Technology",
    period: "2019 – 2023",
    location: "Hyderabad, India",
    description: "Published research: Tomato Leaf Disease Detection (IJARCCE)."
  }
];

const experience = [
  {
    role: "Full Stack Developer",
    company: "Crio (QTrip Travel Platform)",
    period: "Jan 2022 – Jan 2023",
    location: "Bengaluru & Hyderabad",
    description: "Improved site performance by 40% with lazy loading & DOM optimization. Boosted UX with interactive filters, carousels, and pagination. Designed REST APIs to automate city data sync (reduced update cycles by 80%). Reduced form errors 50% via client-side validation. Shipped features 30% faster using GitHub Projects, Agile, and Figma."
  },
  {
    role: "Graduate Student",
    company: "University of Dayton",
    period: "2023 – Present",
    location: "Dayton, Ohio",
    description: "Research in AI-driven applications and full-stack systems."
  }
];

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "Java", level: 80 },
      { name: "C++", level: 75 },
      { name: "Dart", level: 70 },
      { name: "SQL", level: 85 }
    ]
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "React", level: 88 },
      { name: "Node.js", level: 82 },
      { name: "Express", level: 80 },
      { name: "TensorFlow", level: 85 },
      { name: "Keras", level: 83 },
      { name: "Flutter", level: 75 }
    ]
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "AWS", level: 78 },
      { name: "Firebase", level: 80 },
      { name: "MongoDB", level: 85 },
      { name: "PostgreSQL", level: 82 },
      { name: "Docker", level: 70 }
    ]
  }
];

const profileImg = 'https://avatars.githubusercontent.com/u/62790500?v=4';

const funFacts = [
  'The first computer bug was an actual moth found in a computer in 1947.',
  'The first computer mouse was made of wood.',
  'More than 700 programming languages exist today.',
  'The "Hello, World!" program is often the first thing people learn to code.',
  'The Apollo 11 guidance computer had less processing power than a modern smartphone.',
  'The first website is still online: info.cern.ch.',
  'The word "robot" comes from a Czech word meaning "forced labor."',
  'The original Nintendo Game Boy had more computing power than the computers used for the first moon landing.',
  'The first email was sent in 1971 by Ray Tomlinson to himself.',
  'The QWERTY keyboard layout was designed to slow down typing to prevent jams on mechanical typewriters.'
];

const About = () => {
  const [factIdx, setFactIdx] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setFactIdx((prev) => (prev + 1) % funFacts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

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
          <span className="text-sm text-muted-foreground uppercase tracking-wider">Get to know me</span>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient-move">
            About Me
          </h1>
        </motion.div>

        {/* Profile Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {/* Profile Image & Intro */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-1 text-center lg:text-left"
          >
            <div className="relative w-48 h-48 mx-auto lg:mx-0 mb-6">
              <img
                src={profileImg}
                alt="Charan Pagolu profile"
                className="w-full h-full rounded-2xl object-cover shadow-2xl"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/20 to-secondary/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="space-y-3">
              <h2 className="text-2xl font-bold">Charan Pagolu</h2>
              <p className="text-muted-foreground">MS Computer Science Graduate</p>
              <div className="flex items-center justify-center lg:justify-start gap-2 text-sm text-muted-foreground">
                <FiMapPin className="w-4 h-4" />
                <span>📍 Dublin, CA</span>
              </div>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            <h3 className="text-xl font-semibold mb-4">Hello! 👋</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a <span className="text-primary font-medium">Computer Science graduate</span> with a Master's 
                degree from the University of Dayton, specializing in AI and machine learning. 
                Currently based in <span className="text-foreground font-medium">Dublin, CA</span>, 
                I'm passionate about developing innovative solutions that leverage cutting-edge technology 
                to solve real-world problems.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                projects, or diving deep into the latest AI research papers. I believe in continuous learning 
                and sharing knowledge with the developer community.
              </p>
            </div>

            {/* Fun Fact Card */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-8"
            >
              <div className="card-3d rounded-2xl bg-white/80 dark:bg-card/80 backdrop-blur-xl border border-border p-6 shadow-lg">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">💡</span>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg mb-2">Fun Fact</h4>
                    <AnimatePresence mode='wait'>
                      <motion.p
                        key={factIdx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.5 }}
                        className="text-muted-foreground"
                      >
                        {funFacts[factIdx]}
                      </motion.p>
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Experience & Education */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Experience */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold mb-8">Experience</h3>
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="relative pl-8 border-l-2 border-border"
                >
                  <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-primary -translate-x-[9px] shadow-lg" />
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-lg font-semibold">{exp.role}</h4>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <FiCalendar className="w-4 h-4" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1 text-foreground">
                        <FiMapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold mb-8">Education</h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="relative pl-8 border-l-2 border-border"
                >
                  <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-secondary -translate-x-[9px] shadow-lg" />
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-lg font-semibold">{edu.degree}</h4>
                      <p className="text-secondary font-medium">{edu.school}</p>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <FiCalendar className="w-4 h-4" />
                        {edu.period}
                      </span>
                      <span className="flex items-center gap-1 text-foreground">
                        <FiMapPin className="w-4 h-4" />
                        {edu.location}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="space-y-12"
        >
          <h3 className="text-2xl font-bold text-center">Skills & Technologies</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9 + categoryIndex * 0.1 }}
                className="card-3d bg-white/80 dark:bg-card/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-border"
              >
                <h4 className="text-lg font-semibold mb-6 text-center">{category.title}</h4>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ delay: 1 + categoryIndex * 0.1 + skillIndex * 0.05, duration: 0.8 }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ delay: 1.2 + categoryIndex * 0.1 + skillIndex * 0.05, duration: 1 }}
                          className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-center mt-20 pt-16 border-t border-border"
        >
          <h3 className="text-2xl font-bold mb-4">Let's build something amazing together!</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm always excited to work on new projects and collaborate with fellow developers. 
            Whether it's AI, web development, or something completely new - let's talk!
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all duration-200 hover:scale-105 shadow-lg"
          >
            Get In Touch
            <FiArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </motion.div>
    </>
  );
};

export default About; 