import React from 'react';
import NavBar from './NavBar.jsx';
import HeroSection from './HeroSection.jsx';
import AboutSection from './AboutSection.jsx';
import ExperienceSection from './ExperienceSection.jsx';
import ProjectsSection from './ProjectsSection.jsx';
import ContactSection from './ContactSection.jsx';

export default function App() {
  return (
    <div className="font-sans">
      <NavBar />
      <main className="pt-16">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <footer className="py-6 text-center text-xs text-gray-400 border-t border-gray-100">
        © {new Date().getFullYear()} Fahad Qureshi. Built with React & Vite.
      </footer>
    </div>
  );
}
