import React from 'react';

function RegulatorInfo() {
  return (
    <div className="w-full bg-white mb-4">
      <div className="flex items-center gap-2 mb-2 px-4 py-2">
        <div className="w-10 h-10 bg-red-100 rounded flex items-center justify-center text-red-600 text-xl">
          🛡️
        </div>
        <div className="text-xs text-gray-600">
          <div className="font-semibold">SOLICITORS</div>
          <div>REGULATION</div>
          <div>AUTHORITY</div>
        </div>
      </div>

      <div className="px-4">
        <p className="text-xs text-gray-600 mb-2">
          PCP Pal is a trading style of Courmacs Legal Limited. Registered in
          England and Wales, Company No. 13185387 Authorised and regulated by
          the Solicitors Regulation Authority (SRA) – SRA Reg No: 819044.
          Registered with the Information Commissioner's Office (ICO) – ICO
          Reg No: ZA886741.
        </p>

        <p className="text-xs text-gray-600 mb-2">
          The outcome of your claim will depend on the specific circumstances
          of your case. Results may vary, and past performance does not indicate
          future results.
        </p>

        <p className="text-xs text-gray-600 mb-2">
          *£5,318.25 is the average claim value as of 29/05/2024.
          <br />
          *£10,446.46 is the most significant claim value as of 29/05/2024.
          <br />
          *Based on industry research, industry results may vary.
        </p>
      </div>
    </div>
  );
}

export default RegulatorInfo;
