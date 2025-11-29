"use client";

import React from 'react';

interface HeaderProps {
  onLogoClick?: () => void;
}

export default function Header({ onLogoClick }: HeaderProps) {
  return (
    <header className="bg-black text-white px-6 py-4 flex justify-between items-center">
      <button 
        onClick={onLogoClick}
        className="flex items-center gap-2 hover:opacity-80 transition cursor-pointer"
      >
        <div className="w-6 h-6 bg-pink-500 flex items-center justify-center text-white font-bold">✓</div>
        <span className="font-bold text-xl">PCP Pal</span>
      </button>
      <div className="flex items-center gap-4 text-sm">
        <span className="flex items-center gap-1">
          ★ Trustpilot
          <span className="text-green-400">★★★★★</span>
          <span className="text-xs">4.9</span>
        </span>
        <div className="flex items-center gap-1">
          <span className="text-green-400">🛡️</span>
          <span className="text-xs">SECURE<br/>GDPR CERTIFIED</span>
        </div>
      </div>
    </header>
  );
}