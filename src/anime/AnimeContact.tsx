import React from 'react';

const AnimeContact = () => {
  return (
    <div style={{
      minHeight: 'calc(100vh - 80px)',
      background: 'repeating-radial-gradient(circle, #fff 0, #fff 2px, #eee 3px, #fff 5px)',
      border: '12px solid #111',
      boxShadow: '0 0 0 8px #fff, 0 0 0 24px #111',
      margin: '2rem auto',
      maxWidth: 900,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: 'Bangers, Zen Maru Gothic, M PLUS Rounded 1c, sans-serif',
      letterSpacing: '2px',
    }}>
      {/* One Punch Man Manga Panel */}
      <img 
        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c3ad5d12-dc3b-4b6c-b92f-9d40f325e965/d919g4f-23ad4e9e-7b6e-4c40-b69e-5cc3a99a79d6.jpg/v1/fill/w_900,h_900,q_70,strp/one_punch_by_hiei_ishida_d919g4f-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAwIiwicGF0aCI6IlwvZlwvYzNhZDVkMTItZGMzYi00YjZjLWI5MmYtOWQ0MGYzMjVlOTY1XC9kOTE5ZzRmLTIzYWQ0ZTllLTdiNmUtNGM0MC1iNjllLTVjYzNhOTlhNzlkNi5qcGciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.xAZOdKjjy3FQ5q_-CjGQEgdoQiQdLdZqHjjwLqQq_9s"
        alt="One Punch Man Saitama Panel"
        style={{
          width: '100%',
          maxWidth: 500,
          height: 'auto',
          marginBottom: '2rem',
          border: '8px solid #000',
          filter: 'contrast(1.3) brightness(0.9)',
        }}
      />
      
      {/* Manga SFX */}
      <div style={{
        position: 'absolute',
        top: '8%',
        left: '12%',
        fontSize: '3rem',
        fontWeight: 'bold',
        color: '#111',
        textShadow: '2px 2px 0 #fff',
        transform: 'rotate(10deg)',
        zIndex: 10,
      }}>
        ドカン!
      </div>
      
      {/* Speech Bubble */}
      <div style={{
        background: '#fff',
        border: '6px solid #111',
        borderRadius: '50px',
        padding: '1.5rem 2rem',
        position: 'relative',
        fontSize: '1.8rem',
        fontWeight: 'bold',
        color: '#111',
        maxWidth: 300,
        textAlign: 'center',
        marginTop: '1rem',
      }}>
        "OK"
        <div style={{
          position: 'absolute',
          bottom: '-20px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 0,
          height: 0,
          borderLeft: '20px solid transparent',
          borderRight: '20px solid transparent',
          borderTop: '20px solid #111',
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-14px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 0,
          height: 0,
          borderLeft: '20px solid transparent',
          borderRight: '20px solid transparent',
          borderTop: '20px solid #fff',
          marginLeft: '6px',
        }} />
      </div>
    </div>
  );
};

export default AnimeContact; 