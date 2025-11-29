"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

export default function Header() {
  const router = useRouter();

  return (
    <header className="bg-black text-white px-4 sm:px-6 py-3 sm:py-4">
      <div className="flex justify-between items-center max-w-md mx-auto">
        <button 
          onClick={() => router.push("/")}
          className="flex items-center gap-2 hover:opacity-80 transition cursor-pointer"
        >
          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-pink-500 flex items-center justify-center text-white font-bold text-sm sm:text-lg rounded">
            ✓
          </div>
          <span className="font-bold text-lg sm:text-xl">PCP Pal</span>
        </button>
        
        <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm">
          {/* Compact mobile view */}
          <div className="flex items-center gap-1">
            <span className="hidden sm:inline">★ Trustpilot</span>
            <span className="text-green-400">★★★★★</span>
            <span className="text-xs sm:text-sm">4.9</span>
          </div>
          
          <div className="flex items-center gap-1 sm:gap-2">
            <span className="text-red-400 text-sm sm:text-base">🛡️</span>
            <div className="text-xs leading-tight">
              <div>SECURE</div>
              <div className="hidden sm:block">GDPR CERTIFIED</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}