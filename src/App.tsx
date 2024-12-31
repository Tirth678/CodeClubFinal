import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navigation/NavBar';
import SocialBar from './components/Social/SocialBar';
import HomePage from './pages/HomePage';
import ContactPage from './components/Contact/ContactPage';
import EventsPage from './pages/BlogPage';
import ProjectsPage from './pages/PortfolioPage';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#1a1a1a] text-gray-100">
        <NavBar />
        
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/events" element={<EventsPage />} />
          </Routes>
        </main>
        
        <SocialBar />
      </div>
    </BrowserRouter>
  );
}

export default App;