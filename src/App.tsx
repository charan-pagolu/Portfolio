import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { ThemeProvider } from './components/theme-provider';
import "@fontsource/inter";

const App = () => {
  const location = useLocation();

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen relative text-foreground">
        {/* Animated Gradient Background */}
        <div className="fixed inset-0 -z-10 animate-gradient bg-gradient-to-br from-[#23243a] via-[#2e335a] to-[#1b1c2a] opacity-95" />
        {/* Glassmorphism Overlay */}
        <div className="fixed inset-0 -z-10 pointer-events-none">
          <div className="absolute left-1/2 top-1/3 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 rounded-3xl blur-[120px] opacity-40 bg-gradient-to-tr from-[#6366f1] via-[#a5b4fc] to-transparent" />
          <div className="absolute right-0 bottom-0 w-[400px] h-[400px] rounded-full blur-[100px] opacity-30 bg-gradient-to-br from-[#f472b6] via-[#facc15] to-transparent" />
        </div>
        <div className="fixed bottom-4 right-4 z-40 pointer-events-none opacity-30 select-none">
          <svg width="90" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 30 Q12 6 18 18 Q24 30 30 6" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <text x="8" y="28" fontFamily="'Neue Montreal',sans-serif" fontSize="12" fill="currentColor">Charan</text>
          </svg>
        </div>
        
        <Navbar />
        <main>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </main>
      </div>
    </ThemeProvider>
  );
};

export default App; 