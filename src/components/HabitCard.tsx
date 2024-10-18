import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const habitExamples = [
  "Read for 20 minutes",
  "Meditate for 5 minutes",
  "Write a page",
  "Do Homework for an hour",
  "Garden for 45 minutes",
  "Wake Up at 6:00",
  "Run a mile",
  "Code for 30 minutes",
  "Make 3 sketches"
];

interface HabitSelectionCardProps {
  onNext: (habit: string) => void;
}

const HabitSelectionCard: React.FC<HabitSelectionCardProps> = ({ onNext }) => {
  const [habitInput, setHabitInput] = useState('');

  const handleExampleClick = (example: string) => {
    setHabitInput(example);
  };

  const handleNext = () => {
    if (habitInput.trim()) {
      onNext(habitInput);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white/20 backdrop-blur-lg rounded-3xl shadow-xl ring-1 ring-black/5">
      <h2 className="text-4xl font-bold mb-4">Choose A <span className="text-primary">Habit:</span></h2>
      <p className="text-xl mb-6">What Habit do you want to focus on for this sprint?</p>
      <p className="text-lg text-dark/70 mb-4">
        Make sure your habit is measurable by adding a specific metric you can track your progress with
      </p>
      <input
        type="text"
        value={habitInput}
        onChange={(e) => setHabitInput(e.target.value)}
        placeholder="I want to..."
        className="w-full p-4 rounded-lg bg-white/50 backdrop-blur-sm shadow-inner mb-6 text-lg focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-3">Struggling for ideas? Try one of our Examples:</h3>
        <div className="flex flex-wrap gap-2">
          {habitExamples.map((example, index) => (
            <button
              key={index}
              onClick={() => handleExampleClick(example)}
              className="bg-white/30 hover:bg-white/50 backdrop-blur-sm text-dark px-3 py-2 rounded-full text-sm transition duration-300"
            >
              {example}
            </button>
          ))}
        </div>
      </div>
      <button 
        onClick={handleNext}
        className="bg-dark text-white px-6 py-3 rounded-full font-bold text-lg flex items-center justify-center w-full hover:bg-primary transition duration-300"
      >
        Next step
        <ArrowRight size={20} className="ml-2" />
      </button>
    </div>
  );
};

export default HabitSelectionCard;