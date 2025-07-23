import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1e293b] via-[#0f172a] to-[#0f172a] px-4">
      {/* Subtitle */}
      <div className="text-slate-400 text-sm mb-6">
        Exciting things are on the way
      </div>
      {/* Title */}
      <h1 className="text-white text-4xl md:text-6xl font-extrabold tracking-widest text-center mb-4 transition-all duration-300 hover:scale-105 hover:shadow-lg">
        COMING SOON
      </h1>
      {/* Description */}
      <p className="text-neutral-400 text-lg mb-8 max-w-md text-center">
        More amazing projects are in the works. Stay tuned for updates!
      </p>
      <div className="w-16 h-1 bg-white mx-auto mb-8"></div>
      <p className="text-neutral-500 text-sm mb-8">Expected: 2025</p>
      {/* Back Button */}
      <Link
        to="/"
        className="flex items-center space-x-2 px-6 py-2 border border-white rounded-full text-white font-semibold hover:bg-white hover:text-[#0f172a] transition-all duration-300 hover:scale-110 hover:shadow-lg mb-4"
      >
        <FaArrowLeft />
        <span>Back to Portfolio</span>
      </Link>
    </div>
  );
}
