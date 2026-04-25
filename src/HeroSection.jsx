import React from 'react';

export default function HeroSection() {
  const scrollTo = (section) => {
    const el = document.getElementById(section);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen bg-white flex items-center">
      <div className="max-w-5xl mx-auto px-6 py-24">
        <p className="text-xs font-bold tracking-widest text-[#BF5700] uppercase mb-4">
          Electrical & Computing Engineering · UT Austin
        </p>
        <h1 className="text-5xl sm:text-6xl font-black text-gray-900 leading-tight mb-6">
          Fahad<br />Qureshi.
        </h1>
        <p className="text-lg text-gray-500 max-w-xl mb-10 leading-relaxed">
          Full-stack developer and ECE student passionate about building software
          that solves real problems — from web platforms to embedded systems.
        </p>
        <div className="flex gap-4 flex-wrap">
          <button
            onClick={() => scrollTo('projects')}
            className="bg-[#BF5700] text-white text-xs font-black tracking-widest uppercase px-8 py-4 hover:bg-[#a34900] transition-colors"
          >
            View Projects →
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="border border-[#BF5700] text-[#BF5700] text-xs font-black tracking-widest uppercase px-8 py-4 hover:bg-[#BF5700] hover:text-white transition-colors"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
}
