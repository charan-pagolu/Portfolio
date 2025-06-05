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
        {easterEgg && (
          <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center">
            <div className="bg-primary text-background px-6 py-3 rounded-xl shadow-lg font-bold text-lg animate-bounce">Konami Unlocked! 🚀</div>
            <div className="relative w-full h-16">
              {[...Array(32)].map((_,i) => (
                <span key={i} className="absolute w-2 h-2 rounded-full"
                  style={{
                    left: `${Math.random()*100}%`,
                    top: `${Math.random()*100}%`,
                    background: `hsl(${Math.random()*360},80%,60%)`,
                    opacity: 0.7,
                    animation: 'confetti 1.2s ease-out',
                    animationDelay: `${Math.random()}s`
                  }} />
              ))}
            </div>
          </div>
        )}
        {/* One Piece Anime Mode Global Background */}
        <div className="fixed inset-0 -z-20 pointer-events-none select-none anime:bg-none">
          {/* Only show in Anime Mode (when .anime class is on root) */}
          <div className="hidden anime:block absolute inset-0 w-full h-full">
            {/* Manga speed lines background (SVG) */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1920 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="1920" height="1080" fill="url(#manga-bg)" />
              <defs>
                <radialGradient id="manga-bg" cx="0.5" cy="0.5" r="0.7">
                  <stop offset="0%" stopColor="#fff" stopOpacity="0.12" />
                  <stop offset="100%" stopColor="#23243a" stopOpacity="0.95" />
                </radialGradient>
              </defs>
              {/* Speed lines */}
              {[...Array(24)].map((_,i) => (
                <line key={i} x1="960" y1="540" x2={960+900*Math.cos(i*Math.PI/12)} y2={540+500*Math.sin(i*Math.PI/12)} stroke="#fff" strokeWidth="6" strokeDasharray="32 32" opacity="0.13" />
              ))}
            </svg>
            {/* Halftone overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:18px_18px] opacity-40" />
            {/* Jolly Roger watermark (SVG) */}
            <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] opacity-10" viewBox="0 0 128 128" fill="none">
              <circle cx="64" cy="64" r="60" stroke="#fff" strokeWidth="8" />
              <ellipse cx="64" cy="64" rx="36" ry="28" fill="#fff" opacity="0.12" />
              <circle cx="64" cy="64" r="24" fill="#fff" opacity="0.18" />
              <rect x="44" y="44" width="40" height="40" rx="20" fill="#fff" opacity="0.18" />
              {/* Straw Hat */}
              <ellipse cx="64" cy="54" rx="28" ry="10" fill="#fbbf24" opacity="0.7" />
              <rect x="36" y="50" width="56" height="8" fill="#ef4444" opacity="0.7" />
            </svg>
            {/* Straw Hat Crew chibi/silhouette overlays (SVGs or divs) */}
            {/* Example: Luffy, Zoro, Nami, Usopp, Sanji, Chopper, Robin, Franky, Brook, Jinbe */}
            <div className="absolute left-12 top-1/3 w-24 h-24 animate-crew-float">
              <img src="/images/crew/luffy-chibi.png" alt="Luffy" className="w-full h-full object-contain opacity-80" />
            </div>
            <div className="absolute right-24 top-1/4 w-20 h-20 animate-crew-float2">
              <img src="/images/crew/zoro-chibi.png" alt="Zoro" className="w-full h-full object-contain opacity-70" />
            </div>
            <div className="absolute left-1/4 bottom-16 w-20 h-20 animate-crew-float3">
              <img src="/images/crew/nami-chibi.png" alt="Nami" className="w-full h-full object-contain opacity-70" />
            </div>
            <div className="absolute right-1/3 bottom-24 w-16 h-16 animate-crew-float4">
              <img src="/images/crew/chopper-chibi.png" alt="Chopper" className="w-full h-full object-contain opacity-80" />
            </div>
            {/* Add more crew as desired */}
          </div>
        </div>
        <Navbar />
        <main className="relative container mx-auto px-6 pt-32 sm:pt-40 pb-16">
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
      <style>{`
        @keyframes confetti {
          0% { transform: translateY(0) scale(1); opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateY(80px) scale(0.7); opacity: 0; }
        }
        .anime .anime\:block { display: block !important; }
        .anime .anime\:bg-none { background: none !important; }
        @keyframes crew-float { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-18px);} }
        .animate-crew-float { animation: crew-float 7s ease-in-out infinite; }
        @keyframes crew-float2 { 0%,100%{transform:translateY(0);} 50%{transform:translateY(12px);} }
        .animate-crew-float2 { animation: crew-float2 8s ease-in-out infinite; }
        @keyframes crew-float3 { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-10px);} }
        .animate-crew-float3 { animation: crew-float3 6s ease-in-out infinite; }
        @keyframes crew-float4 { 0%,100%{transform:translateY(0);} 50%{transform:translateY(16px);} }
        .animate-crew-float4 { animation: crew-float4 9s ease-in-out infinite; }
      `}</style>
    </ThemeProvider>
  );
};

export default App; 