import React from 'react';

const AnimeAbout = () => {
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
      {/* Naruto Manga Panel */}
      <img 
        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e3b935e8-2a5e-46b3-bb07-5efbe5af7856/d5rwtzd-23e4c0c8-c0fb-4a2e-a66c-c5c9f8eb6a2a.jpg/v1/fill/w_1527,h_1664,q_70,strp/hokage_lineart_by_narutoan98_d5rwtzd-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTY2NCIsInBhdGgiOiJcL2ZcL2UzYjkzNWU4LTJhNWUtNDZiMy1iYjA3LTVlZmJlNWFmNzg1NlwvZDVyd3R6ZC0yM2U0YzBjOC1jMGZiLTRhMmUtYTY2Yy1jNWM5ZjhlYjZhMmEuanBnIiwid2lkdGgiOiI8PTE1MjcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.8s0Pk6hm8xZnRbE7W30pWmyUwXzr9EsAGaGlBG0fGBc"
        alt="Naruto Hokage Panel"
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
        top: '15%',
        left: '10%',
        fontSize: '3rem',
        fontWeight: 'bold',
        color: '#111',
        textShadow: '2px 2px 0 #fff',
        transform: 'rotate(20deg)',
        zIndex: 10,
      }}>
        バーン!
      </div>
      
      {/* Speech Bubble */}
      <div style={{
        background: '#fff',
        border: '6px solid #111',
        borderRadius: '50px',
        padding: '1.5rem 2rem',
        position: 'relative',
        fontSize: '1.6rem',
        fontWeight: 'bold',
        color: '#111',
        maxWidth: 400,
        textAlign: 'center',
        marginTop: '1rem',
      }}>
        "My dream is to become Hokage!"
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

export default AnimeAbout; 