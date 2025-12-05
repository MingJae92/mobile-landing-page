  "use client";

  import { useState, ChangeEvent } from "react";
  import { useRouter } from "next/navigation"; // ✅ import useRouter
  import Footer from "../components/Footer";
  import Header from "./Header";
  import RegulatorInfo from "./RegulatorInfo";
  import PrivacyInfo from "./PrivacyInfo";

  type FormState = {
    title: string;
    firstName: string;
    surname: string;
    dobDay: string;
    dobMonth: string;
    dobYear: string;
  };

  export default function PersonalDetails() {
    const router = useRouter(); // ✅ initialize router

    const [form, setForm] = useState<FormState>({
      title: "",
      firstName: "",
      surname: "",
      dobDay: "",
      dobMonth: "",
      dobYear: "",
    });

    // Generic handler for all inputs
    const handleChange = (
      e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
      const { name, value } = e.target;
      setForm((prev) => ({ ...prev, [name]: value }));
    };

    // Destructure form fields
    const { title, firstName, surname, dobDay, dobMonth, dobYear } = form;

    // Check if form is ready
    const isFormReady =
      title.trim() &&
      firstName.trim() &&
      surname.trim() &&
      dobDay.trim() &&
      dobMonth.trim() &&
      dobYear.trim();

    return (
      <div className="min-h-screen bg-white">
        {/* HEADER */}
        <Header />

        {/* BANNER */}
        <div className="border-b px-4 py-2 text-sm flex items-center gap-2">
          <span>👤</span>
          <span>32.62 million drivers at risk of losing out on compensation</span>
        </div>

        {/* CONTENT */}
        <main className="max-w-md mx-auto px-4 py-6">
          <h1 className="text-xl font-bold text-gray-900 mb-1">
            Your Personal Details
          </h1>
          <p className="text-gray-600 text-sm mb-5">
            Your current personal details are essential to search for all finance
            agreements attached to your name.
          </p>

          {/* Title dropdown - shorter rectangle */}
          <select
            name="title"
            value={title}
            onChange={handleChange}
            className="w-24 border rounded-md px-3 py-3 mb-4 text-gray-900 bg-white text-sm"
          >
            <option value="">Title</option>
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
            <option value="Ms">Ms</option>
            <option value="Miss">Miss</option>
            <option value="Dr">Dr</option>
          </select>

          {/* First Name */}
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={firstName}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-100 rounded-lg mb-4"
          />

          {/* Surname */}
          <input
            type="text"
            name="surname"
            placeholder="Surname"
            value={surname}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-100 rounded-lg mb-4"
          />

          {/* DOB */}
          <p className="text-gray-900 font-medium mb-2">Date of Birth</p>
          <div className="grid grid-cols-3 gap-3 mb-6">
            <input
              type="text"
              name="dobDay"
              placeholder="DD"
              maxLength={2}
              value={dobDay}
              onChange={handleChange}
              className="px-4 py-3 bg-gray-100 rounded-lg"
            />
            <input
              type="text"
              name="dobMonth"
              placeholder="MM"
              maxLength={2}
              value={dobMonth}
              onChange={handleChange}
              className="px-4 py-3 bg-gray-100 rounded-lg"
            />
            <input
              type="text"
              name="dobYear"
              placeholder="YYYY"
              maxLength={4}
              value={dobYear}
              onChange={handleChange}
              className="px-4 py-3 bg-gray-100 rounded-lg"
            />
          </div>

          {/* Next button with routing */}
          <button
            disabled={!isFormReady}
            onClick={() => isFormReady && router.push("/contact-details")} // navigate to address page
            className={`w-full py-3 rounded-lg font-semibold text-white text-base mb-6
              ${isFormReady ? "bg-[#FF004F]" : "bg-gray-400 cursor-not-allowed"}
            `}
          >
            Next &nbsp;›
          </button>

          {/* Trust Section */}
          <div className="text-center mt-4 mb-4">
            <span className="text-green-500">★★★★★</span>
            <span className="font-semibold ml-1">Trustpilot</span>
            <span className="text-gray-600 ml-1">4.6</span>
          </div>

          {/* Average claim value */}
          <div className="bg-white border-t pt-4 sm:pt-6 mb-4 sm:mb-6">
            <div className="text-center mb-4 sm:mb-6">
              <p className="text-xs sm:text-sm text-gray-600 mb-1">Average claim value:</p>
              <p className="text-xl sm:text-2xl font-bold text-gray-900">£5,318.25* per vehicle</p>
            </div>
          </div>

          {/* Regulatory & Privacy Info */}
          <RegulatorInfo />
          <PrivacyInfo />

          <Footer />
        </main>
      </div>
    );
  }
