"use client";

import { ChangeEvent } from "react";
import { useRouter } from "next/navigation";

// Define props explicitly
type Address = {
  line1: string;
  line2: string;
  city: string;
  county: string;
};

type AddressFieldsProps = {
  address: Address;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function AddressFields({ address, onChange }: AddressFieldsProps) {
  const router = useRouter();

  const isAddressReady =
    address.line1.trim() &&
    address.line2.trim() &&
    address.city.trim() &&
    address.county.trim();

  return (
    <div className="space-y-4 mt-4">
      <input
        type="text"
        name="line1"
        placeholder="Address Line 1"
        value={address.line1}
        onChange={onChange}
        className="w-full px-4 py-3 bg-gray-100 rounded-none text-gray-900 placeholder-gray-500 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-pink-500"
      />
      <input
        type="text"
        name="line2"
        placeholder="Address Line 2"
        value={address.line2}
        onChange={onChange}
        className="w-full px-4 py-3 bg-gray-100 rounded-none text-gray-900 placeholder-gray-500 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-pink-500"
      />
      <input
        type="text"
        name="city"
        placeholder="Town/City"
        value={address.city}
        onChange={onChange}
        className="w-full px-4 py-3 bg-gray-100 rounded-none text-gray-900 placeholder-gray-500 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-pink-500"
      />
      <input
        type="text"
        name="county"
        placeholder="County"
        value={address.county}
        onChange={onChange}
        className="w-full px-4 py-3 bg-gray-100 rounded-none text-gray-900 placeholder-gray-500 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-pink-500"
      />

      <p className="text-sm sm:text-base text-gray-700 pt-2">
        Please check the details above are correct before continuing.
      </p>

      <button
        type="button"
        disabled={!isAddressReady}
        onClick={() => isAddressReady && router.push("/personal-details")}
        className={`w-full py-3 sm:py-4 rounded-lg font-semibold text-white text-sm sm:text-base
          ${isAddressReady ? "bg-[#FF004F]" : "bg-gray-400 cursor-not-allowed"}
        `}
      >
        Next &nbsp;›
      </button>
    </div>
  );
}
