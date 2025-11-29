"use client";

import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Lender from "./Lender";
import PrivacyInfo from "./PrivacyInfo";
import RegulatorInfo from "./RegulatorInfo";
import Trustindicator from "./TrustIndicator";
import AddressLender from "./AddressLender";

export default function Landingpage() {
  const [showAddressLender, setShowAddressLender] = useState<boolean>(false);

  const handleLogoClick = () => {
    setShowAddressLender(false);
  };

  if (showAddressLender) {
    return <AddressLender onLogoClick={handleLogoClick} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header onLogoClick={handleLogoClick} />
      <main className="max-w-md mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <Hero />
        <Trustindicator />
        <Lender onViewLenders={() => setShowAddressLender(true)} />
        <RegulatorInfo />
        <PrivacyInfo />
      </main>
      <Footer />
    </div>
  );
}