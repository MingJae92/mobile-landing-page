"use client";

import { ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store";
import { setField } from "../store/personalDetailsSlice";
import Footer from "../components/Footer";
import Header from "./Header";
import RegulatorInfo from "./RegulatorInfo";
import PrivacyInfo from "./PrivacyInfo";
import { personalDetailsSchema } from "../schemas/formSchemas";

export default function PersonalDetails() {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  
  const form = useSelector((state: RootState) => state.personalDetails);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    dispatch(setField({ field: name as keyof typeof form, value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const { title, firstName, surname, dobDay, dobMonth, dobYear } = form;

  const isFormReady =
    title !== "" &&
    firstName.trim() !== "" &&
    surname.trim() !== "" &&
    dobDay.trim() !== "" &&
    dobMonth.trim() !== "" &&
    dobYear.trim() !== "";

  const validateAndNext = () => {
    const result = personalDetailsSchema.safeParse(form);

    if (!result.success) {
      const formatted: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0];
        if (typeof field === "string") formatted[field] = issue.message;
      });
      setErrors(formatted);
      return;
    }

    router.push("/contact-details");
  };

  const inputClasses = "px-4 py-3 bg-gray-100 rounded-lg mb-4 text-gray-900";

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="border-b px-4 py-2 text-sm flex items-center gap-2">
        <span>👤</span>
        <span>32.62 million drivers at risk of losing out on compensation</span>
      </div>

      <main className="max-w-md mx-auto px-4 py-6">
        <h1 className="text-xl font-bold text-gray-900 mb-1">Your Personal Details</h1>
        <p className="text-gray-600 text-sm mb-5">
          Your current personal details are essential to search for all finance agreements attached to your name.
        </p>

        <select
          name="title"
          value={title}
          onChange={handleChange}
          className={`${inputClasses} w-24`}
        >
          <option value="">Title</option>
          <option value="Mr">Mr</option>
          <option value="Mrs">Mrs</option>
          <option value="Ms">Ms</option>
          <option value="Miss">Miss</option>
          <option value="Dr">Dr</option>
        </select>
        {errors.title && <p className="text-red-500 text-xs mb-2">{errors.title}</p>}

        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={firstName}
          onChange={handleChange}
          className={`w-full ${inputClasses}`}
        />
        {errors.firstName && <p className="text-red-500 text-xs mb-2">{errors.firstName}</p>}

        <input
          type="text"
          name="surname"
          placeholder="Surname"
          value={surname}
          onChange={handleChange}
          className={`w-full ${inputClasses}`}
        />
        {errors.surname && <p className="text-red-500 text-xs mb-2">{errors.surname}</p>}

        <p className="text-gray-900 font-medium mb-2">Date of Birth</p>
        <div className="grid grid-cols-3 gap-3 mb-4">
          <input type="text" name="dobDay" placeholder="DD" maxLength={2} value={dobDay} onChange={handleChange} className="px-4 py-3 bg-gray-100 rounded-lg text-gray-900"/>
          <input type="text" name="dobMonth" placeholder="MM" maxLength={2} value={dobMonth} onChange={handleChange} className="px-4 py-3 bg-gray-100 rounded-lg text-gray-900"/>
          <input type="text" name="dobYear" placeholder="YYYY" maxLength={4} value={dobYear} onChange={handleChange} className="px-4 py-3 bg-gray-100 rounded-lg text-gray-900"/>
        </div>
        {(errors.dobDay || errors.dobMonth || errors.dobYear) && <p className="text-red-500 text-xs mb-2">{errors.dobDay || errors.dobMonth || errors.dobYear}</p>}

        <button
          disabled={!isFormReady}
          onClick={validateAndNext}
          className={`w-full py-3 rounded-lg font-semibold text-white text-base mb-6 ${isFormReady ? "bg-[#FF004F]" : "bg-gray-400 cursor-not-allowed"}`}
        >
          Next &nbsp;›
        </button>

        <div className="text-center mt-4 mb-4">
          <span className="text-green-500">★★★★★</span>
          <span className="font-semibold ml-1">Trustpilot</span>
          <span className="text-gray-600 ml-1">4.6</span>
        </div>

        <div className="bg-white border-t pt-4 sm:pt-6 mb-4 sm:mb-6">
          <div className="text-center mb-4 sm:mb-6">
            <p className="text-xs sm:text-sm text-gray-600 mb-1">Average claim value:</p>
            <p className="text-xl sm:text-2xl font-bold text-gray-900">£5,318.25* per vehicle</p>
          </div>
        </div>

        <RegulatorInfo />
        <PrivacyInfo />
        <Footer />
      </main>
    </div>
  );
}
