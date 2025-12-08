import React from 'react'

export default function LandingpageHero() {
  return (
    <div className="pt-0 mt-0">  
      <div className="border-b px-4 py-2 text-sm flex items-center gap-2 mb-4">
        <span className="font-semibold">👤</span>
        <span className="text-gray-600">1,000,000+ drivers helped so far</span>
      </div>

      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        You could be owed up to £5,318.25* per car finance agreement.
      </h1>

      <p className="text-gray-600 mb-6">
        Check in under 60 seconds to see if you're owed compensation. Use the
        free agreement finder to start your claim.
      </p>

      <button className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 px-6 rounded-lg mb-6 flex items-center justify-center gap-2 transition">
        <span>🔍</span> Find My Agreements
      </button>
    </div>
  )
}
