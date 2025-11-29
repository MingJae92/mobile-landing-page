"use client";

import AddressLender from "../components/AddressLender";

export default function AddressPage() {
  return (
    <div className="flex justify-center bg-white">
      <div className="flex justify-between items-center max-w-md mx-auto">
        <AddressLender />
      </div>
    </div>
  );
}