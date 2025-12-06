"use client";

import { ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import Header from "./Header";
import Footer from "./Footer";
import { contactDetailsSchema } from "../schemas/formSchemas";
import { RootState, AppDispatch } from "../store";
import { setField } from "../store/contactDetailsSlice";

export default function ContactDetails() {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  // ✅ Get form state from Redux
  const form = useSelector((state: RootState) => state.contactDetails);

  const [errors, setErrors] = useState<Partial<typeof form>>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // ✅ Update Redux state
    dispatch(setField({ field: name as keyof typeof form, value }));

    // Clear error for this field if present
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

        <div className="flex justify-center mb-6">
          <img
            src="/icons/mobile-email.png"
            alt="Phone & Email Icon"
            className="w-24 h-auto"
          />
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
            isReady ? "bg-[#FF004F] hover:bg-[#E6004A] cursor-pointer" : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          🔍 &nbsp; Find My Agreements
        </button>

        {/* Trustpilot & Average claim */}
        <div className="text-center mb-6">
          <span className="text-green-500">★★★★★</span>
          <span className="font-semibold ml-1">Trustpilot</span>
          <span className="text-gray-600 ml-1">4.6</span>
        </div>

        <div className="text-center mb-8">
          <p className="text-xs text-gray-600 mb-1">Average claim value:</p>
          <p className="text-xl font-bold text-gray-900">£5,318.25* per vehicle</p>
        </div>

        {/* Info / Disclaimers */}
        <p className="text-[11px] text-gray-600 leading-relaxed mb-6">
          By clicking 'Find My Agreements', you agree to the Courmacs Legal Privacy Policy,
          consent to receiving marketing communications, and acknowledge that we will run a
          soft credit check (powered by Valid8 IP Ltd) to identify any potential car finance
          claims. These searches will not impact your credit score, but will verify any
          claims found.
        </p>

        <div className="flex items-center gap-4 mb-6">
          <img src="/icons/sra-badge.png" alt="SRA Badge" className="h-10 w-auto" />
        </div>

        <p className="text-[11px] text-gray-600 leading-relaxed mb-6">
          PCP Pal is a trading style of Courmacs Legal Limited. Registered in England and
          Wales, Company No. 13185687. Authorised and regulated by the Solicitors Regulation
          Authority (SRA) — SRA Reg No: 819044. Registered with the Information Commissioner's
          Office (ICO) — ICO Reg No: ZA886741.
        </p>

        <p className="text-[11px] text-gray-600 leading-relaxed mb-6">
          The outcome of your claim will depend on the specific circumstances of your case.
          Results may vary, and past performance does not guarantee future success.
        </p>

        <p className="text-[11px] text-gray-600 leading-relaxed mb-6">
          *£5,318.25 is the average claim as of 29/05/2024.  
          *£10,446.46 is the most significant claim as of 29/05/2024.  
          *Based on industry research; results may vary.
        </p>

        <p className="text-[11px] text-gray-600 leading-relaxed mb-6">
          By submitting a claim, you consent to Courmacs Legal Limited processing your data in
          accordance with our Privacy Policy. For concerns, please review our Complaints Procedure.
        </p>

        <p className="text-[11px] text-gray-600 leading-relaxed mb-8">
          The agreements identified are subject to verification. This means that while agreements
          may be initially detected, they must go through a verification process to confirm eligibility.
        </p>

        <Footer />
      </main>
    </div>
  );
}
