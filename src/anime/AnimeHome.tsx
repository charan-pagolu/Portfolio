import React from 'react';

const AnimeHome = () => {
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
      {/* One Piece Manga Panel */}
      <img 
        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e3b935e8-2a5e-46b3-bb07-5efbe5af7856/ddabkx5-c2cb5242-eb1e-4a2a-87d8-5be2cf88ab44.jpg/v1/fill/w_1192,h_670,q_70,strp/one_piece_manga_964_by_babill1695_ddabkx5-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTMyIiwicGF0aCI6IlwvZlwvZTNiOTM1ZTgtMmE1ZS00NmIzLWJiMDctNWVmYmU1YWY3ODU2XC9kZGFia3g1LWMyY2I1MjQyLWViMWUtNGEyYS04N2Q4LTViZTJjZjg4YWI0NC5qcGciLCJ3aWR0aCI6Ijw9MTUwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.bhKsYcGR6n0QLZGhWXmKA0PwC5Y3H8fmmCq6mKn_zLo"
        alt="One Piece Manga Panel"
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
        top: '10%',
        right: '10%',
        fontSize: '3rem',
        fontWeight: 'bold',
        color: '#111',
        textShadow: '2px 2px 0 #fff',
        transform: 'rotate(-15deg)',
        zIndex: 10,
      }}>
        ゴゴゴゴ
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
        maxWidth: 400,
        textAlign: 'center',
        marginTop: '1rem',
      }}>
        Welcome to the Anime Universe!
        <div style={{
          position: 'absolute',
          bottom: '-20px',
          left: '30%',
          width: 0,
          height: 0,
          borderLeft: '20px solid transparent',
          borderRight: '20px solid transparent',
          borderTop: '20px solid #111',
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-14px',
          left: '30%',
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

export default AnimeHome; 