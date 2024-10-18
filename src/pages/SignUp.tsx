import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface SignUpPageProps {
  onBack: () => void;
}

const SignUp: React.FC<SignUpPageProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center px-4">
      <div className="max-w-md w-full p-8 bg-white/20 backdrop-blur-lg rounded-3xl shadow-xl ring-1 ring-black/5">
        <h2 className="text-4xl font-bold mb-6 text-white text-center">
          Sign Up
        </h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full p-3 rounded-lg bg-white/50 backdrop-blur-sm shadow-inner text-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-lg bg-white/50 backdrop-blur-sm shadow-inner text-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-lg bg-white/50 backdrop-blur-sm shadow-inner text-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            type="submit"
            className="w-full bg-dark text-white p-3 rounded-full font-bold text-lg hover:bg-primary transition duration-300"
          >
            Sign Up
          </button>
        </form>
        <button
          onClick={onBack}
          className="mt-6 text-white flex items-center hover:text-primary transition duration-300"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to habit setup
        </button>
      </div>
    </div>
  );
};

export default SignUpPage;
