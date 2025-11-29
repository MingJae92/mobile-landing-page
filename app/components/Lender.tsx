import React from 'react'

export default function Lender() {
  return (
    <div className="bg-gray-100 rounded-lg p-4 mb-4">
      <p className="text-sm text-gray-700 mb-3">
        We will locate all of your vehicle finance agreements with the following
        73 lenders.
      </p>
      <button className="w-full bg-white text-gray-900 font-semibold py-3 px-4 rounded-lg mb-2 hover:bg-gray-50 transition">
        View Lenders
      </button>
      <button className="w-full bg-gray-700 text-white font-semibold py-3 px-4 rounded-lg hover:bg-gray-800 transition">
        See More About PCP
      </button>
    </div>
  );
  
}

