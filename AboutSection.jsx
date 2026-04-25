import React from 'react';

const skills = {
  'Languages': 'C, C++, JavaScript, Python, SQL, Java, ARM Assembly, HTML/CSS, Verilog',
  'Platforms': 'MATLAB, LTspice, KiCad, Xilinx Vivado, FPGA, Microcontrollers',
  'Frameworks & Tools': 'React, Flask, Node.js, SQLAlchemy, REST APIs, Git, AWS, Netlify, Linux, MongoDB, Heroku',
};

export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="border border-gray-200 rounded-lg p-8 shadow-sm">
          <div className="flex items-start justify-between mb-6">
            <div className="flex-1">
              <h2 className="text-lg font-bold text-[#BF5700] tracking-widest uppercase mb-4">ABOUT ME</h2>
              <p className="text-gray-700 leading-relaxed max-w-2xl mb-2">
                BS in Electrical and Computing Engineering at UT Austin (GPA: 3.3/4.0, May 2027).
                Passionate about software engineering, embedded systems, and building full-stack products
                that solve real problems.
              </p>
              <p className="text-xs text-gray-500">
                Relevant Coursework: Data Structures & Algorithms · Software Design I & II · Embedded Systems · Digital Logic Design · Linear Controls & Signals · Discrete Mathematics · Probability · Linear Algebra
              </p>
            </div>
            <div className="ml-8 text-[#BF5700] opacity-80">
              <svg viewBox="0 0 40 60" fill="currentColor" className="w-10 h-14">
                <circle cx="20" cy="12" r="10"/>
                <path d="M5 45 C5 30, 35 30, 35 45 L35 58 L5 58 Z"/>
              </svg>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-6">
            <h3 className="text-xs font-bold text-[#BF5700] tracking-widest uppercase mb-4">SKILLS</h3>
            <div className="space-y-2">
              {Object.entries(skills).map(([label, value]) => (
                <div key={label} className="flex gap-2 text-xs">
                  <span className="font-bold text-gray-700 shrink-0 w-36">{label}:</span>
                  <span className="text-gray-500">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}