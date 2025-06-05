import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];

const AnimeNavbar = () => {
  const location = useLocation();
  return (
    <nav style={{
      width: '100%',
      background: '#111',
      borderBottom: '8px solid #fff',
      boxShadow: '0 8px 0 #111',
      display: 'flex',
      alignItems: 'center',
      padding: '0 2rem',
      height: 80,
      zIndex: 100,
      position: 'relative',
      fontFamily: 'Bangers, Zen Maru Gothic, M PLUS Rounded 1c, sans-serif',
      letterSpacing: '2px',
    }}>
      {/* Manga SFX/Logo */}
      <div style={{ fontSize: '2.5rem', color: '#fff', marginRight: '2rem', textShadow: '2px 2px 0 #e11d48, 4px 4px 0 #fff' }}>
        ドン!!
      </div>
      <div style={{ display: 'flex', gap: '2.5rem', flex: 1 }}>
        {navItems.map(item => (
          <Link
            key={item.path}
            to={item.path}
            style={{
              color: location.pathname === item.path ? '#e11d48' : '#fff',
              fontSize: '1.5rem',
              textDecoration: 'none',
              textShadow: '2px 2px 0 #fff',
              borderBottom: location.pathname === item.path ? '4px solid #e11d48' : 'none',
              padding: '0.5rem 0',
              transition: 'color 0.2s, border-bottom 0.2s',
            }}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default AnimeNavbar; 