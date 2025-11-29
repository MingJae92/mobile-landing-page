"use client";

import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Lender from "./Lender";
import PrivacyInfo from "./PrivacyInfo";
import RegulatorInfo from "./RegulatorInfo";
import Trustindicator from "./TrustIndicator";

export default function Landingpage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-md mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <Hero />
        <Trustindicator />
        <Lender />
        <RegulatorInfo />
        <PrivacyInfo />
      </main>
      <Footer />
    </div>
  );
}