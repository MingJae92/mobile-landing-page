"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  return (
    <header className="bg-black text-white w-full py-3">
      {/* Full width mobile container */}
      <div className="flex justify-between items-center w-full px-4">
        
        {/* Logo + Home */}
        <button
          onClick={() => router.push("/")}
          className="flex items-center gap-2 active:opacity-70 transition"
        >
          <div className="w-7 h-7 bg-pink-500 flex items-center justify-center text-white font-bold text-sm rounded">
            ✓
          </div>
          <span className="font-bold text-lg">PCP Pal</span>
        </button>

        {/* Trust + Secure */}
        <div className="flex items-center gap-3 text-[11px]">
          
          {/* Trust */}
          <div className="flex items-center gap-1">
            <span className="text-green-400">★★★★★</span>
            <span>4.9</span>
          </div>

          {/* Secure */}
          <div className="flex items-center gap-1">
            <span className="text-red-400">🛡️</span>
            <span>SECURE</span>
          </div>
        </div>

      </div>
    </header>
  );
}
