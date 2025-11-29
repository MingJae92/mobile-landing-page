"use client";

import Header from "./Header";
import Footer from "./Footer";
import RegulatorInfo from "./RegulatorInfo";
import PrivacyInfo from "./PrivacyInfo";

export default function AddressLender() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Mobile-optimized Main Content Wrapper */}
      <main className="max-w-md mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Info Banner */}
        <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-700 mb-4 sm:mb-6 pb-4 sm:pb-6 border-b">
          <span>👤</span>
          <span>22.43 million households in UK could be affected</span>
        </div>

        {/* Address Section */}
        <div className="mb-6 sm:mb-8">
          <div className="flex items-start justify-between mb-3 sm:mb-4">
            <div className="flex-1">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
                Your Current Address
              </h1>
              <p className="text-gray-600 text-xs sm:text-sm md:text-base">
                We need your current address to find your finance agreements
              </p>
            </div>
            <div className="flex-shrink-0 ml-3 sm:ml-4">
              <svg className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20" viewBox="0 0 100 100" fill="none">
                <rect x="20" y="40" width="60" height="50" fill="#ff1744" />
                <rect x="20" y="40" width="60" height="10" fill="#d50000" />
                <rect x="42" y="60" width="16" height="30" fill="#00bcd4" />
                <path d="M50 20 L80 40 L20 40 Z" fill="#ff1744" />
              </svg>
            </div>
          </div>

          <p className="text-gray-700 text-sm sm:text-base mb-3 sm:mb-4">
            Enter your postcode and tap 'Search'.
          </p>

          <div className="flex gap-2 mb-4 sm:mb-6">
            <input
              type="text"
              placeholder="Postcode"
              className="flex-1 px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-100 rounded-lg text-sm sm:text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <button className="px-6 sm:px-8 py-2.5 sm:py-3 bg-gray-400 text-white text-sm sm:text-base font-semibold rounded-full hover:bg-gray-500 transition whitespace-nowrap">
              Search
            </button>
          </div>
        </div>

        {/* Trust Section */}
        <div className="bg-white border-t pt-4 sm:pt-6 mb-4 sm:mb-6">
          <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4 flex-wrap text-xs sm:text-sm">
            <span className="text-green-500">★★★★★</span>
            <span className="font-semibold">Trustpilot</span>
            <span className="text-gray-600">4.6</span>
            <div className="flex items-center gap-1 ml-2 sm:ml-4">
              <span className="text-green-500">🛡️</span>
              <span className="font-semibold">SECURE</span>
              <span>SSL ENCRYPTION</span>
            </div>
          </div>

          <div className="text-center mb-4 sm:mb-6">
            <p className="text-xs sm:text-sm text-gray-600 mb-1">Average claim value:</p>
            <p className="text-xl sm:text-2xl font-bold text-gray-900">£5,318.25* per vehicle</p>
          </div>
        </div>

        {/* Regulatory Info Component */}
        <RegulatorInfo />

        {/* Privacy Info Component */}
        <PrivacyInfo />
      </main>

      <Footer />
    </div>
  );
}