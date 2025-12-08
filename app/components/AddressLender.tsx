"use client";

import { ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import Header from "./Header";
import Footer from "./Footer";
import RegulatorInfo from "./RegulatorInfo";
import PrivacyInfo from "./PrivacyInfo";
import PostcodeInput from "./PostcodeInput";
import AddressFields from "./AddressFields";
import {
  setPostcode,
  setAddress,
  showAddressFields,
} from "../store/formSlice";
import type { RootState } from "../store";
import Trustindicator from "./TrustIndicator";

export default function AddressLender() {
  const router = useRouter();
  const dispatch = useDispatch();

  // ✅ Redux state
  const postcode = useSelector((state: RootState) => state.form.postcode);
  const address = useSelector((state: RootState) => state.form.address);
  const addressFieldsVisible = useSelector(
    (state: RootState) => state.form.addressFieldsVisible
  );

  // ✅ Handlers
  const handlePostcodeChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setPostcode(e.target.value));
  };

  const handleAddressChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(setAddress({ [name]: value }));
  };

  const handleSearch = () => {
    if (postcode.trim().length > 0) {
      dispatch(showAddressFields());
    }
  };

  // ✅ Check if all address fields are filled
  const isAddressReady =
    address.line1.trim() &&
    address.line2.trim() &&
    address.city.trim() &&
    address.county.trim();

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Centered form section */}
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
              <svg
                className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
                viewBox="0 0 100 100"
                fill="none"
                aria-hidden
              >
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

          {/* INPUT + BUTTON */}
          <div className="flex-1 max-w-md">
            <PostcodeInput
              postcode={postcode}
              onChange={handlePostcodeChange}
              onSearch={handleSearch}
            />
          </div>

          {/* ADDRESS FIELDS SHOWN AFTER SEARCH */}
          {addressFieldsVisible && (
            <AddressFields address={address} onChange={handleAddressChange} />
          )}
        </div>
      </main>

      {/* Full width informational sections */}
      <div className="w-full bg-gray-50">
        <Trustindicator />
      </div>

      <div className="w-full bg-white">
        <RegulatorInfo />
      </div>

      <div className="w-full bg-white">
        <PrivacyInfo />
      </div>

      <Footer />
    </div>
  );
}
