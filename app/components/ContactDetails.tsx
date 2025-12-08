"use client";

import { ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import Header from "./Header";
import Footer from "./Footer";
import { contactDetailsSchema } from "../schemas/formSchemas";
import { RootState, AppDispatch } from "../store";
import { setField } from "../store/contactDetailsSlice";
import Trustindicator from "./TrustIndicator";
import RegulatorInfo from "./RegulatorInfo";
import PrivacyInfo from "./PrivacyInfo";

export default function ContactDetails() {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  const form = useSelector((state: RootState) => state.contactDetails);

  const [errors, setErrors] = useState<Partial<typeof form>>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    dispatch(setField({ field: name as keyof typeof form, value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = () => {
    const validation = contactDetailsSchema.safeParse(form);

    if (!validation.success) {
      const newErrors: Partial<typeof form> = {};
      validation.error.issues.forEach((issue) => {
        const key = issue.path[0] as keyof typeof form;
        newErrors[key] = issue.message;
      });
      setErrors(newErrors);
      return;
    }

    setErrors({});
    router.push("/signature");
  };

  const isReady = form.mobile.trim() !== "" && form.email.trim() !== "";

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Banner */}
      <div className="border-b px-4 py-2 text-sm flex items-center gap-2">
        <span>👤</span>
        <span>32.62 million drivers at risk of losing out on compensation</span>
      </div>

      <main className="max-w-md mx-auto px-4 py-6">
        <h1 className="text-xl font-bold text-gray-900 mb-2">
          Enter Mobile Number <br /> and Email Address
        </h1>

        <p className="text-gray-600 text-sm mb-6">
          We will use these details to cross reference any car finance agreements you've had.
        </p>

        {/* PHONE + EMAIL ICONS */}
        <div className="flex items-center justify-center gap-10 mb-6">
          {/* Phone */}
          <div className="flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 text-pink-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5l2-2 4 4-2 2a14 14 0 006 6l2-2 4 4-2 2c-1 .5-3 .5-4 0-3-1-7-5-8-8-.5-1-.5-3 0-4z"
              />
            </svg>
            <p className="text-xs text-gray-500 mt-1">Mobile</p>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 text-pink-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 4h16v16H4V4zm0 0l8 8 8-8"
              />
            </svg>
            <p className="text-xs text-gray-500 mt-1">Email</p>
          </div>
        </div>

        {/* Mobile Input */}
        <h2 className="font-semibold text-gray-900 mb-1">Your Mobile Number</h2>
        <p className="text-sm text-gray-600 mb-2">For example: 07123456789</p>
        <input
          type="tel"
          name="mobile"
          placeholder="Enter Mobile Number"
          value={form.mobile}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-gray-100 rounded-lg mb-1 border"
        />
        {errors.mobile && <p className="text-red-500 text-sm mb-2">{errors.mobile}</p>}

        {/* Email Input */}
        <h2 className="font-semibold text-gray-900 mb-1">Your Email Address</h2>
        <p className="text-sm text-gray-600 mb-2">For example: John@example.co.uk</p>
        <input
          type="email"
          name="email"
          placeholder="Enter Email Address"
          value={form.email}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-gray-100 rounded-lg mb-1 border"
        />
        {errors.email && <p className="text-red-500 text-sm mb-4">{errors.email}</p>}

        {/* Submit Button */}
        <button
          disabled={!isReady}
          onClick={handleSubmit}
          className={`w-full py-3 rounded-lg font-semibold text-white text-base mb-8 flex items-center justify-center ${
            isReady
              ? "bg-[#FF004F] hover:bg-[#E6004A] cursor-pointer"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          🔍 &nbsp; Find My Agreements
        </button>

        {/* Trustpilot */}
        <Trustindicator />

        {/* Privacy Text */}
        <p className="text-[11px] text-gray-600 leading-relaxed mb-6">
          By clicking 'Find My Agreements', you agree to the Courmacs Legal Privacy Policy,
          consent to receiving marketing communications, and acknowledge that we will run a
          soft credit check (powered by Valid8 IP Ltd) to identify any potential car finance
          claims. These searches will not impact your credit score, but will verify any
          claims found.
        </p>

        <RegulatorInfo />
        <PrivacyInfo />
        <Footer />
      </main>
    </div>
  );
}
