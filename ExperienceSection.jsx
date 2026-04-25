import React from 'react';

const experiences = [
  {
    org: 'Texas MSA',
    role: 'Lead Full Stack Developer',
    period: 'Dec 2024 – Sep 2025 | Austin, TX',
    bullets: [
      'Designed and launched the official Texas MSA website, improving page load speed by 40% through asset optimization and responsive layout engineering.',
      'Architected a modular content system decoupling presentation from data, reducing maintenance time by 30%.',
      'Automated CI/CD pipelines with Netlify, cutting deployment turnaround by 75%.',
    ],
  },
  {
    org: 'Makka Auto Sales',
    role: 'Software Developer',
    period: 'May 2024 – Jul 2024 | Dallas, TX',
    bullets: [
      'Built a web-based appointment scheduling system, replacing a manual phone process and improving customer booking efficiency by 30%.',
      'Engineered a C++ database system to centralize vehicle inventory, sales, inspection, and customer records.',
      'Implemented GitHub Actions and AWS deployment pipelines, accelerating release cycles by 75%.',
    ],
  },
  {
    org: 'Cockrell School of Engineering',
    role: 'Undergraduate ECE Teacher Assistant',
    period: 'Aug 2025 – Dec 2025 | Austin, TX',
    bullets: [
      'Mentored 30+ first-year ECE students on computing fundamentals, debugging workflows, and engineering problem-solving.',
      'Collaborated with faculty to redesign course assignments and rubrics, increasing overall student engagement by ~20%.',
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl font-black text-[#BF5700] tracking-widest uppercase mb-8">EXPERIENCE</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {experiences.map((exp, i) => (
            <div key={i} className="border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-1">
                <h3 className="font-bold text-gray-900 text-sm leading-tight">{exp.org}</h3>
                <svg viewBox="0 0 24 24" fill="none" stroke="#BF5700" strokeWidth="1.5" className="w-5 h-5 shrink-0 ml-2">
                  <circle cx="12" cy="8" r="4"/>
                  <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
                </svg>
              </div>
              <p className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">{exp.role}</p>
              <p className="text-[11px] text-gray-400 mb-3">{exp.period}</p>
              <ul className="space-y-1.5">
                {exp.bullets.map((b, j) => (
                  <li key={j} className="text-xs text-gray-600 flex items-start gap-2">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0"/>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}