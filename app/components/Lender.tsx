"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import PcpDropdown from "./PcpDropdown";

export default function Lender() {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const router = useRouter();

  return (
    <div className="mb-4">
      <div className="bg-gray-100 rounded-lg p-4">
        <p className="text-sm text-gray-700 mb-3">
          We will locate all of your vehicle finance agreements with the
          following 73 lenders.
        </p>
        <button 
          onClick={() => router.push("/address")}
          className="w-full bg-white text-gray-900 font-semibold py-3 px-4 rounded-lg mb-2 hover:bg-gray-50 transition"
        >
          View Lenders
        </button>
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="w-full bg-gray-700 text-white font-semibold py-3 px-4 rounded-lg hover:bg-gray-800 transition"
        >
          See More About PCP
        </button>
      </div>

      {isDropdownOpen && <PcpDropdown />}
    </div>
  );
}