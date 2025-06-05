import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowUpRight, FiGithub, FiLinkedin } from 'react-icons/fi';
import { useRef, useEffect, useState } from 'react';

const taglines = [
  'AI Engineer',
  'Full-Stack Developer',
  'Open Source Enthusiast',
  'Creative Technologist',
  'Lifelong Learner'
];

const Home = () => {
  const textRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [displayedTagline, setDisplayedTagline] = useState('');
  const [typing, setTyping] = useState(true);

  // Typewriter effect for tagline
  useEffect(() => {
    let timeout: number;
    if (typing) {
      if (displayedTagline.length < taglines[taglineIndex].length) {
        timeout = window.setTimeout(() => {
          setDisplayedTagline(taglines[taglineIndex].slice(0, displayedTagline.length + 1));
        }, 60);
      } else {
        timeout = window.setTimeout(() => setTyping(false), 1200);
      }
    } else {
      timeout = window.setTimeout(() => {
        setTyping(true);
        setDisplayedTagline('');
        setTaglineIndex((taglineIndex + 1) % taglines.length);
      }, 800);
    }
    return () => clearTimeout(timeout);
  }, [displayedTagline, typing, taglineIndex]);

  // Magnetic button effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.querySelectorAll('.magnetic-btn').forEach((btn) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        (btn as HTMLElement).style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
      });
    };
    const handleMouseLeave = () => {
      document.querySelectorAll('.magnetic-btn').forEach((btn) => {
        (btn as HTMLElement).style.transform = '';
      });
    };
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Mouse-following gradient
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!textRef.current || !containerRef.current) return;
      const { clientX, clientY } = e;
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      const moveX = (x - 0.5) * 20;
      const moveY = (y - 0.5) * 20;
      textRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
      const gradientX = x * 100;
      const gradientY = y * 100;
      containerRef.current.style.setProperty('--x', `${gradientX}%`);
      containerRef.current.style.setProperty('--y', `${gradientY}%`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <div className="noise" />
      <div className="fixed inset-0 bg-dot-pattern opacity-[0.02] pointer-events-none" />
      
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24 overflow-hidden"
        style={{
          '--x': '50%',
          '--y': '50%',
        } as React.CSSProperties}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-[800px] h-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div 
              className="absolute inset-0 blur-[100px] opacity-20 dark:opacity-10"
              style={{
                background: 'radial-gradient(circle at var(--x) var(--y), rgba(99, 102, 241, 0.15), transparent 80%)',
              }}
            />
          </div>
        </div>
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr,1fr] gap-12 lg:gap-24">
            <div className="space-y-8">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="space-y-4"
              >
                <span className="text-sm text-muted-foreground uppercase tracking-wider">Creative Developer</span>
                <motion.h1
                  ref={textRef}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] tracking-tight"
                >
                  Hi, my name is{' '}
                  <span className="text-gradient-animate">Charan Pagolu</span>
                </motion.h1>
                <div className="h-8 mt-2">
                  <span className="text-lg sm:text-xl text-primary font-mono">
                    {'>'} {displayedTagline}
                    <span className="inline-block w-2 h-6 bg-primary align-middle animate-pulse ml-1" />
                  </span>
                </div>
              </motion.div>
              <motion.p
                className="text-lg sm:text-xl text-muted-foreground max-w-2xl text-balance leading-relaxed"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                I'm an independent creative developer specializing in AI-driven solutions
                and full-stack development. From machine learning models to scalable
                web applications, I help awesome people build ambitious yet accessible
                projects.
              </motion.p>
              <motion.div
                className="flex flex-wrap gap-6"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <Link
                  to="/projects"
                  className="magnetic-btn glow group relative inline-flex items-center"
                  style={{ willChange: 'transform' }}
                >
                  <span className="absolute inset-0 translate-y-[2px] bg-foreground rounded" />
                  <span className="relative px-6 py-3 bg-background border-2 border-foreground rounded inline-flex items-center gap-2 font-medium transition-transform group-hover:translate-y-0 translate-y-[-2px]">
                    View My Work
                    <FiArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </Link>
                <Link
                  to="/contact"
                  className="magnetic-btn group relative inline-flex items-center"
                  style={{ willChange: 'transform' }}
                >
                  <span className="absolute inset-0 translate-y-[2px] bg-foreground/20 rounded" />
                  <span className="relative px-6 py-3 bg-background border-2 border-foreground/20 rounded inline-flex items-center gap-2 font-medium text-muted-foreground transition-transform group-hover:translate-y-0 translate-y-[-2px]">
                    Get in Touch
                    <FiArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </Link>
              </motion.div>
              <motion.div
                className="flex items-center gap-6 text-muted-foreground"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <a
                  href="https://github.com/charan-pagolu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors hover-lift"
                >
                  <FiGithub className="w-6 h-6" />
                </a>
                <a
                  href="https://linkedin.com/in/charan-pagolu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors hover-lift"
                >
                  <FiLinkedin className="w-6 h-6" />
                </a>
              </motion.div>
            </div>
            {/* Avatar Card */}
            <div className="flex items-center justify-center h-full">
              <div
                className="relative w-[370px] h-[370px] flex items-center justify-center backdrop-blur-xl bg-white/30 dark:bg-card/40 border border-white/30 dark:border-border rounded-3xl shadow-2xl overflow-hidden"
                style={{
                  background: `url('/images/ghibli-avatar.jpg') center center / cover no-repeat`,
                }}
              >
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Home; 