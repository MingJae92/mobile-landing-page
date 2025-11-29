"use client";

export default function Landingpage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-black text-white px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-pink-500 flex items-center justify-center text-white font-bold">✓</div>
          <span className="font-bold text-xl">PCP Pal</span>
        </div>
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

      {/* Main Content */}
      <main className="max-w-md mx-auto px-6 py-8">
        <p className="text-sm text-gray-600 mb-4">👤 1,000,000+ drivers helped so far</p>
        
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          You could be owed up to £5,318.25* per car finance agreement.
        </h1>
        
        <p className="text-gray-600 mb-6">
          Check in under 60 seconds to see if you're owed compensation. Use the free agreement finder to start your claim.
        </p>

        <button className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 px-6 rounded-lg mb-6 flex items-center justify-center gap-2 transition">
          <span>🔍</span> Find My Agreements
        </button>

        {/* Trust Indicators */}
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
            <p className="text-2xl font-bold text-gray-900">£5,318.25* per vehicle</p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <span className="text-green-500">✓</span>
              <span>Check in under <strong>60 seconds</strong></span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-green-500">✓</span>
              <span><strong>Free</strong> agreement finder</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-green-500">✓</span>
              <span><strong>1 Million+</strong> drivers signed up</span>
            </div>
          </div>
        </div>

        {/* Lenders Section */}
        <div className="bg-gray-100 rounded-lg p-4 mb-4">
          <p className="text-sm text-gray-700 mb-3">
            We will locate all of your vehicle finance agreements with the following 73 lenders.
          </p>
          <button className="w-full bg-white text-gray-900 font-semibold py-3 px-4 rounded-lg mb-2 hover:bg-gray-50 transition">
            View Lenders
          </button>
          <button className="w-full bg-gray-700 text-white font-semibold py-3 px-4 rounded-lg hover:bg-gray-800 transition">
            See More About PCP
          </button>
        </div>

        {/* Regulatory Info */}
        <div className="bg-gray-50 rounded-lg p-6 mb-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 bg-red-100 rounded flex items-center justify-center text-red-600 text-xl">🛡️</div>
            <div className="text-xs text-gray-600">
              <div className="font-semibold">SOLICITORS</div>
              <div>REGULATION</div>
              <div>AUTHORITY</div>
            </div>
          </div>
          
          <p className="text-xs text-gray-600 mb-3">
            PCP Pal is a trading style of Cou­rmacs Legal Limited. Registered in England and Wales, Company No. 13185387 Authorised and regulated by the Solicitors Regulation Authority (SRA) – SRA Reg No: 819044. Registered with the Information Commissioner's Office (ICO) – ICO Reg No: ZA886741.
          </p>
          
          <p className="text-xs text-gray-600 mb-3">
            The outcome of your claim will depend on the specific circumstances of your case. Results may vary, and past performance does not indicate future results.
          </p>
          
          <p className="text-xs text-gray-600 mb-3">
            *£5,318.25 is the average claim value as of 29/05/2024.<br/>
            *£10,446.46 is the most significant claim value as of 29/05/2024.<br/>
            *Based on industry research, industry results may vary.
          </p>
        </div>

        {/* Privacy Section */}
        <div className="text-xs text-gray-600 mb-4">
          <h3 className="font-semibold mb-2">Privacy and Complaints</h3>
          <p className="mb-3">
            By submitting this form, you consent to Cou­rmacs Legal Limited processing your data in accordance with our Privacy Policy. For concerns, please review our Complaints Procedure.
          </p>
          <p>
            The agreements identified are subject to verification. This means that while agreement details are found online, they must go through a verification process to confirm eligibility.
          </p>
        </div>

        {/* Footer Links */}
        <div className="flex gap-4 text-xs text-gray-600 border-t pt-4">
          <a href="#" className="hover:underline">Terms & Conditions</a>
          <a href="#" className="hover:underline">Complaints Procedure</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
        </div>
      </main>
    </div>
  );
}
