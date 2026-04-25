import React, { useState } from 'react';

const links = ['Home', 'About', 'Experience', 'Projects', 'Contact'];

export default function NavBar() {
  const [active, setActive] = useState('Home');

  const scrollTo = (section) => {
    setActive(section);
    const el = document.getElementById(section.toLowerCase());
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-end gap-8">
        {links.map(link => (
          <button
            key={link}
            onClick={() => scrollTo(link)}
            className={`text-sm font-medium transition-colors ${
              active === link ? 'text-[#BF5700]' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {link}
          </button>
        ))}
      </div>
    </nav>
  );
}