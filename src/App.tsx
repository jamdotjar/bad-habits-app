import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LogIn, ArrowRight } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-blue-600  to-blue-100  via-purple-400  text-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-white/30 backdrop-blur-xl z-0"></div>
      <div className="relative z-10">
        <header className="w-full bg-white/30 backdrop-blur-sm shadow-lg ring-1 ring-black/5 py-4 px-6 fixed top-0 left-0 right-0 z-50">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <h1 className="text-2xl font-bold">Bad Habits App</h1>
            </div>
            <nav>
              <button className="bg-sky-400/80 text-white px-4 py-2 rounded-full font-semibold hover:bg-sky-500 transition duration-300 flex items-center backdrop-blur-sm">
                <LogIn size={18} className="mr-2" />
                Sign In
              </button>
            </nav>
          </div>
        </header>
        <main className="container mx-auto px-4 py-32">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-6xl font-extrabold mb-6 mt-10 bg-gradient-to-b from-sky-500 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
              <i>Sprints</i>
            </h1>
            <p className="text-xl mb-10 text-white/90">
              Form new habits quickly, with a gamified method based on teachings
              from <i>Atomic Habits</i> by James Clear.
            </p>
            <div className="flex justify-center float-animation">
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-sky-600 to-fuchsia-500 via-purple-600 rounded-full blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-500"></div>
                <button className="relative bg-white px-8 py-4 rounded-full font-bold text-lg text-primary flex items-center hover:bg-white hover:text-black transition duration-300 ">
                  Get Started
                  <ArrowRight size={24} className="ml-2" />
                </button>{' '}
              </div>
            </div>
          </div>
          <div className="transition-all duration-500 transform"></div>
        </main>
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold text-center mb-10 text-white">
              How It Works
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: 'Set Your Sprint',
                  description:
                    'Create a specific, actionable habit with a simple framework',
                },
                {
                  title: 'Track Progress',
                  description:
                    'Log your habit, and receive all the numbers you could ever want',
                },
                {
                  title: 'Earn score',
                  description:
                    'Maintain your score, beat personal records, and more',
                },
                {
                  title: 'Stay Accountable',
                  description:
                    'Invite an accountability partner, to keep you motivated and on track (and to deal with you if you lose)',
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className="bg-white/30 backdrop-blur-sm p-6 rounded-lg text-center transform transition duration-300 hover:scale-105 hover:shadow-xl group shadow-lg ring-1 ring-black/5 "
                >
                  <div className="w-12 h-12 bg-transparent ring-2 ring-black/10 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold group-hover:bg-blue-600 group-hover:ring-blue-600/50 transition-colors duration-300">
                    {index + 1}
                  </div>
                  <h4 className="text-xl font-semibold mb-2 text-white group-hover:text-blue-500/80 transition-colors duration-300">
                    {step.title}
                  </h4>
                  <p className="text-white/80 group-hover:text-white transition-colors duration-300">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="bg-dark/80 text-white py-8 backdrop-blur-sm">
          <div className="container mx-auto px-4 text-center">
            <p>
              &copy; 2024 Finn. <i> A PLP project</i>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
