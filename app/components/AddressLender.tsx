"use client";

import { ChangeEvent } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
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

  const postcode = useSelector((state: RootState) => state.form.postcode);
  const address = useSelector((state: RootState) => state.form.address);
  const addressFieldsVisible = useSelector(
    (state: RootState) => state.form.addressFieldsVisible
  );

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

  return (
    <div className="bg-white">
      {/* HEADER */}
      <Header />

      {/* Info Banner */}
      <div className="bg-gray-50 px-4 py-2 border-b flex items-center gap-2 text-xs sm:text-sm text-gray-700">
        <span>👤</span>
        <span>22.43 million households in UK could be affected</span>
      </div>

      {/* MAIN CONTENT - compact height */}
      <main className="max-w-md mx-auto px-4 py-3 w-full space-y-3">
        {/* Address Section */}
        <section className="space-y-2">
          <h1 className="text-2xl font-extrabold text-gray-900">
            Your Current Address
          </h1>
          <p className="text-sm text-gray-600">
            We need your current address to find your finance agreements
          </p>

          {/* Postcode Input */}
          <PostcodeInput
            postcode={postcode}
            onChange={handlePostcodeChange}
            onSearch={handleSearch}
          />

          {/* Address Fields */}
          {addressFieldsVisible && (
            <AddressFields address={address} onChange={handleAddressChange} />
          )}
        </section>
      </main>

      {/* Full-width sections */}
      <div className="w-full bg-gray-50">
        <Trustindicator />
      </div>
      <div className="w-full bg-white">
        <RegulatorInfo />
      </div>
      <div className="w-full bg-white">
        <PrivacyInfo />
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
