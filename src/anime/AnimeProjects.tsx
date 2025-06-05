import React from 'react';

const AnimeProjects = () => {
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
      {/* Bleach Manga Panel */}
      <img 
        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/13063f2e-0b67-444b-b12a-4b5d46eb1f3f/d3i4yxf-ae4aee51-60e7-4b59-b06b-9c70b86c8d3e.jpg/v1/fill/w_3008,h_2200,q_70,strp/lineart_bleach_350_by_bankai_no_jutsu_d3i4yxf-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjIwMCIsInBhdGgiOiJcL2ZcL2UzYjkzNWU4LTJhNWUtNDZiMy1iYjA3LTVlZmJlNWFmNzg1NlwvZDNpNHl4Zi1hZTRhZWU1MS02MGU3LTRiNTktYjA2Yi05YzcwYjg2YzhkM2UuanBnIiwid2lkdGgiOiI8PTMwMDgifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.J7uKgAC0YZFHRfNhpxqRZN5P0nzVOSqH7VL-kJ_7yO0"
        alt="Bleach Ichigo Panel"
        style={{
          width: '100%',
          maxWidth: 600,
          height: 'auto',
          marginBottom: '2rem',
          border: '8px solid #000',
          filter: 'contrast(1.3) brightness(0.9)',
        }}
      />
      
      {/* Manga SFX */}
      <div style={{
        position: 'absolute',
        top: '12%',
        right: '15%',
        fontSize: '3rem',
        fontWeight: 'bold',
        color: '#111',
        textShadow: '2px 2px 0 #fff',
        transform: 'rotate(-25deg)',
        zIndex: 10,
      }}>
        ズバッ!
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
        "Bankai!"
        <div style={{
          position: 'absolute',
          bottom: '-20px',
          left: '40%',
          width: 0,
          height: 0,
          borderLeft: '20px solid transparent',
          borderRight: '20px solid transparent',
          borderTop: '20px solid #111',
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-14px',
          left: '40%',
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

export default AnimeProjects; 