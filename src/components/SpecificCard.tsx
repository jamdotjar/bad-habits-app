import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, Clock } from 'lucide-react';

interface MakeItSpecificCardProps {
  habit: string;
  onNext: () => void;
  onBack: () => void;
}

const MakeItSpecificCard: React.FC<MakeItSpecificCardProps> = ({ habit, onNext, onBack }) => {
  const [triggerType, setTriggerType] = useState('At');
  const [triggerValue, setTriggerValue] = useState('');
  const [location, setLocation] = useState('');

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white/20 backdrop-blur-lg rounded-3xl shadow-xl ring-1 ring-black/5">
      <h2 className="text-4xl font-bold mb-4">Make it <span className="text-primary">Specific</span></h2>
      <p className="text-xl mb-6">Now that you've chosen your habit, it's time to refine it.</p>
      <p className="text-lg text-dark/70 mb-4">
        Fill out the implementation intention to create a plan.
      </p>
      <div className="mb-6">
        <p className="text-lg font-semibold mb-2">I will {habit}</p>
        <div className="flex items-center gap-2 mb-4">
          <select
            value={triggerType}
            onChange={(e) => setTriggerType(e.target.value)}
            className="bg-white/50 backdrop-blur-sm rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="At">At</option>
            <option value="After">After</option>
            <option value="When">When</option>
          </select>
          {triggerType === 'At' ? (
            <div className="relative flex-1">
              <input
                type="time"
                value={triggerValue}
                onChange={(e) => setTriggerValue(e.target.value)}
                className="w-full p-2 rounded-lg bg-white/50 backdrop-blur-sm shadow-inner text-lg focus:outline-none focus:ring-2 focus:ring-primary pl-10"
              />
              <Clock size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
          ) : (
            <input
              type="text"
              value={triggerValue}
              onChange={(e) => setTriggerValue(e.target.value)}
              placeholder={triggerType === 'After' ? 'e.g., after breakfast' : 'e.g., when I get home'}
              className="flex-1 p-2 rounded-lg bg-white/50 backdrop-blur-sm shadow-inner text-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          )}
        </div>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location (e.g., in my living room)"
          className="w-full p-2 rounded-lg bg-white/50 backdrop-blur-sm shadow-inner text-lg focus:outline-none focus:ring-2 focus:ring-primary mb-4"
        />
      </div>
      <p className="text-lg text-dark/70 mb-6">
        By making your habit specific, measurable, and time-bound, you'll be setting yourself up for success on your habit-building journey
      </p>
      <div className="flex justify-between">
        <button
          onClick={onBack}
          className="bg-white/30 text-dark px-6 py-3 rounded-full font-bold text-lg flex items-center hover:bg-white/50 transition duration-300"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back
        </button>
        <button
          onClick={onNext}
          className="bg-dark text-white px-6 py-3 rounded-full font-bold text-lg flex items-center hover:bg-primary transition duration-300"
        >
          Next step
          <ArrowRight size={20} className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default MakeItSpecificCard;