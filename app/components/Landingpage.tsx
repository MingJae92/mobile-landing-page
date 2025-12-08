"use client";

import Footer from "./Footer";
import Header from "./Header";
import LandingpageHero from "./LandingpageHero";
import Lender from "./Lender";
import PrivacyInfo from "./PrivacyInfo";
import RegulatorInfo from "./RegulatorInfo";
import Trustindicator from "./TrustIndicator";

export default function Landingpage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Removed top spacing */}
      <main className="max-w-md mx-auto pt-0 pb-6">
        <LandingpageHero />
        <Trustindicator />
        <Lender />
        <RegulatorInfo />
        <PrivacyInfo />
      </main>

      <Footer />
    </div>
  );
}
