"use client";

import Image from "next/image";
import TrustLogo from "../../public/reviews.png";

export default function Trustindicator() {
  return (
    <div className="bg-gray-50 rounded-lg p-6 mb-6">
      <div className="space-y-2">
        <div className="relative w-full h-48 sm:h-64">
          <Image
            src={TrustLogo}
            alt="Trust Logo"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
