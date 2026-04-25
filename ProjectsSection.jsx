import React from 'react';

const projects = [
  {
    title: 'NBA Player Performance Prediction System',
    date: 'Mar 2026',
    tags: ['Python', 'Flask', 'React', 'Machine Learning', 'SQL', 'REST APIs'],
    bullets: [
      'Architected an end-to-end ML prediction platform integrating a Flask REST backend, SQLAlchemy-managed database, and React frontend to forecast player points with >85% model accuracy.',
      'Engineered a feature pipeline processing multi-season NBA statistics, enabling real-time inference through RESTful API endpoints consumed by an interactive analytics dashboard.',
      'Built an interactive React-based UI to display prediction results and enable user-driven queries for player performance.',
    ],
    img: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=220&fit=crop',
  },
  {
    title: 'Mastermind – Multiplayer Web Game',
    date: 'Oct 2025',
    tags: ['Java', 'React', 'WebSockets', 'Multithreading'],
    bullets: [
      'Designed a full-stack real-time multiplayer game with a multi-threaded Java server managing concurrent player sessions and synchronized game state via custom WebSocket protocol.',
      'Implemented server-side message parsing and game-state management logic using Java multithreading and synchronization primitives.',
      'Built a responsive, state-driven React frontend with synchronized lobby, connection, and gameplay panels — featuring real-time chat, turn indicators, and interactive color-peg selection.',
    ],
    img: 'https://images.unsplash.com/photo-1611996575749-79a3a250f948?w=400&h=220&fit=crop',
  },
  {
    title: 'FPGA Multifunctional Stopwatch',
    date: 'Mar 2026',
    tags: ['Verilog', 'FPGA', 'Xilinx Vivado'],
    bullets: [
      'Designed and implemented a programmable FPGA-based stopwatch using RTL design methodology and dataflow modeling to develop modular Verilog components.',
      'Verified module functionality with testbenches before integrating the system and generating bitstream files for deployment on an Artix-7 FPGA.',
    ],
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=220&fit=crop',
  },
  {
    title: 'Space Invaders Video Game',
    date: 'Nov 2024',
    tags: ['ARM Assembly', 'C', 'C++'],
    bullets: [
      'Engineered a complete Space Invaders game on an ARM Cortex-M embedded system, integrating LCD display rendering, ADC slide potentiometer input for player movement, and DAC-driven real-time audio feedback.',
      'Implemented interrupt-driven I/O to decouple user input and game event handling from the main game loop, achieving sub-16ms input response latency using hardware timer interrupts.',
    ],
    img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=220&fit=crop',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl font-black text-[#BF5700] tracking-widest uppercase mb-8">PROJECTS</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <div key={i} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <img src={p.img} alt={p.title} className="w-full h-44 object-cover" />
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-1">
                  <h3 className="text-sm font-black text-[#BF5700] uppercase tracking-wide leading-tight">{p.title}</h3>
                  <span className="text-xs text-gray-400 shrink-0 ml-3 mt-0.5">{p.date}</span>
                </div>
                <div className="flex flex-wrap gap-1 mb-3 mt-1">
                  {p.tags.map(tag => (
                    <span key={tag} className="text-[10px] border border-gray-300 rounded px-1.5 py-0.5 text-gray-600">{tag}</span>
                  ))}
                </div>
                <ul className="space-y-2 flex-1">
                  {p.bullets.map((b, j) => (
                    <li key={j} className="text-xs text-gray-600 flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#BF5700] shrink-0 opacity-60" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}