import React from 'react'

 export default function Trustindicator() {
  return (
    <div className="bg-gray-50 rounded-lg p-6 mb-6">
      <div className="flex items-center justify-center gap-2 mb-4">
        <span className="text-green-500">★★★★★</span>
        <span className="text-sm font-semibold">Trustpilot</span>
        <span className="text-xs text-gray-600">4.9</span>
        <div className="ml-4 flex items-center gap-1">
          <span className="text-green-500">🛡️</span>
          <span className="text-xs font-semibold">SECURE</span>
        </div>
      </div>

      <div className="text-center mb-4">
        <p className="text-sm text-gray-600 mb-1">Average claim value:</p>
        <p className="text-2xl font-bold text-gray-900">
          £5,318.25* per vehicle
        </p>
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2 text-sm">
          <span className="text-green-500">✓</span>
          <span>
            Check in under <strong>60 seconds</strong>
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <span className="text-green-500">✓</span>
          <span>
            <strong>Free</strong> agreement finder
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <span className="text-green-500">✓</span>
          <span>
            <strong>1 Million+</strong> drivers signed up
          </span>
        </div>
      </div>
    </div>
  );
  
}

