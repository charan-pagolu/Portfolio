import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AnimeNavbar from './AnimeNavbar';
import AnimeHome from './AnimeHome';
import AnimeAbout from './AnimeAbout';
import AnimeProjects from './AnimeProjects';
import AnimeContact from './AnimeContact';

const AnimeRouter = () => {
  return (
    <BrowserRouter basename="/">
      <AnimeNavbar />
      <Routes>
        <Route path="/" element={<AnimeHome />} />
        <Route path="/about" element={<AnimeAbout />} />
        <Route path="/projects" element={<AnimeProjects />} />
        <Route path="/contact" element={<AnimeContact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AnimeRouter; 