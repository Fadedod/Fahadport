import React, { useState } from 'react';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! Fahad will get back to you soon.');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl font-black text-[#BF5700] tracking-widest uppercase mb-8">GET IN TOUCH</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                value={form.name}
                onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                className="border border-gray-200 rounded px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#BF5700]"
              />
              <input
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                className="border border-gray-200 rounded px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#BF5700]"
              />
            </div>
            <textarea
              placeholder="Message"
              rows={5}
              value={form.message}
              onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
              className="w-full border border-gray-200 rounded px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#BF5700] resize-none"
            />
            <button
              type="submit"
              className="w-full bg-[#BF5700] text-white text-xs font-black tracking-widest uppercase py-4 hover:bg-[#a34900] transition-colors"
            >
              SUBMIT
            </button>
          </form>

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-4">
            <div>
              <span className="text-sm text-gray-500">Email: </span>
              <a href="mailto:mohammedfahadq25@gmail.com" className="text-sm text-[#BF5700] hover:underline">
                mohammedfahadq25@gmail.com
              </a>
            </div>
            <div>
              <span className="text-sm text-gray-500">Phone: </span>
              <span className="text-sm text-gray-700">817-908-5943</span>
            </div>
            <a
              href="https://linkedin.com/in/fahad-qureshi-9a35a3340"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#BF5700] hover:underline"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Fadedod"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#BF5700] hover:underline"
            >
              GitHub
            </a>
            <a
              href="https://media.base44.com/files/public/69ebb5a8554fbe1bce3d1f10/530af4ae7_Fahad_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[#BF5700] text-[#BF5700] text-xs font-bold tracking-widest px-5 py-3 hover:bg-[#BF5700] hover:text-white transition-colors uppercase w-fit"
            >
              Download Resume →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
