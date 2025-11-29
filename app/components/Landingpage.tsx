"use client";

export default function Landingpage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-blue-400 to-blue-600 px-4">
      <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
        Welcome to Our App
      </h1>
      <p className="text-white text-base sm:text-lg mb-6">
        Build amazing experiences with Next.js and Tailwind CSS. Mobile-first
        and responsive!
      </p>
      <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition">
        Get Started
      </button>
    </div>
  );
}
