"use client";

import { ChangeEvent } from "react";

type PostcodeInputProps = {
  postcode: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
};

export default function PostcodeInput({ postcode, onChange, onSearch }: PostcodeInputProps) {
  return (
    <div className="flex gap-2 mb-4 sm:mb-6">
      <input
        type="text"
        placeholder="Postcode"
        value={postcode}
        onChange={onChange}
        className="flex-1 px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-100 rounded-none text-sm sm:text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
      />

      <button
        onClick={onSearch}
        className={`
          px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-semibold rounded-full transition whitespace-nowrap
          ${postcode.trim() ? "bg-[#FF004F] text-white" : "bg-gray-400 text-white"}
        `}
        aria-pressed={!!postcode.trim()}
      >
        Search
      </button>
    </div>
  );
}
