"use client";

import { useState, FormEvent } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import Header from './Header';
import RegulatorInfo from './RegulatorInfo';
import PrivacyInfo from './PrivacyInfo';
import Footer from '../components/Footer';

const starCount = 5;

export default function ClaimSuccess() {
  const [regNumber, setRegNumber] = useState('');
  const [selectedStar, setSelectedStar] = useState<number | null>(null);

  // Get firstName and surname from Redux store
  const { firstName, surname } = useSelector(
    (state: RootState) => state.personalDetails
  );

  const isRegValid = /^[A-Z]{2}\d{2}\s?[A-Z]{3}$/i.test(regNumber);

  const handleSubmit = (e: FormEvent) => e.preventDefault();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      <main className="max-w-md mx-auto px-4 py-6">
        {/* Congratulations */}
        <section className="mb-6">
          <h1 className="text-2xl font-extrabold leading-tight mb-1">
            Congratulations{' '}
            <span className="font-normal">
              {firstName} {surname}
            </span>
          </h1>
          <p className="text-base font-semibold mb-0.5">your claim is now submitted.</p>
          <p className="text-3xl font-extrabold text-green-700">£15,954.75*</p>
          <select
            aria-label="Agreements Found"
            className="w-full bg-white border border-gray-300 rounded mt-3 py-2 px-3"
            defaultValue=""
          >
            <option value="" disabled>
              3 Agreements Found
            </option>
          </select>
        </section>

        {/* Missed agreements */}
        <section className="mb-6">
          <h2 className="font-semibold text-base mb-1">Feel like we’ve missed something?</h2>
          <p className="text-sm mb-2">
            Use the registration checker below to find other agreements you know you’ve had.
          </p>
          <form onSubmit={handleSubmit} className="space-y-3">
            <label htmlFor="reg" className="sr-only">
              Enter Vehicle Registration Number
            </label>
            <div className="flex items-center bg-yellow-400 rounded w-full px-3 py-2 tracking-widest font-extrabold text-xl">
              <div className="inline-flex items-center justify-center bg-blue-900 text-white rounded-sm w-10 h-[38px] mr-3 font-sans font-normal">
                GB
              </div>
              <input
                id="reg"
                type="text"
                maxLength={7}
                spellCheck={false}
                placeholder="SG65 YBA"
                className="bg-transparent w-full focus:outline-none tracking-widest font-extrabold"
                value={regNumber}
                onChange={(e) => setRegNumber(e.target.value.toUpperCase())}
                style={{ letterSpacing: '0.4em' }}
                aria-label="Vehicle Registration Number"
              />
            </div>
            <button
              type="submit"
              disabled={!isRegValid}
              className={`w-full py-3 rounded font-semibold text-white text-base ${isRegValid ? 'bg-gray-300 cursor-pointer' : 'bg-gray-400 cursor-not-allowed'
                }`}
            >
              Search &gt;
            </button>
          </form>
        </section>

        {/* Next steps */}
        <section className="mb-8">
          <h2 className="font-semibold text-base flex items-center mb-2">
            <img
              src="/courtness-legal.svg"
              alt="Courtness Legal"
              className="w-20 h-auto mr-2"
              aria-hidden="true"
            />
            Next steps
          </h2>
          <p className="text-sm mb-3">
            Keep an eye out for an email in your inbox as we will shortly be sending you a copy of
            your legal documents. Don't forget to check your junk or spam folder. It has important
            information we need you to review as soon as possible!
          </p>
          <p className="text-xs italic mb-3">
            Watch this short video, on what the next steps of your journey with Courtness Legal are.
          </p>
          <div className="aspect-w-16 aspect-h-9 rounded overflow-hidden mb-4">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/3cj7LvqAHow"
              title="Next Steps Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </section>

        {/* Help your close ones */}
        <section className="mb-8">
          <h3 className="font-semibold text-base mb-2">Help Your Close Ones Claim!</h3>
          <p className="text-sm mb-4">Your friends and family may have financed a vehicle before 2021.</p>
          <button
            type="button"
            className="flex items-center justify-center space-x-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded w-full"
            aria-label="Share on WhatsApp"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.93 8.64a5.65 5.65 0 00-8 7.85l-3 1a.75.75 0 01-1.07-1l3.35-3.88a5.63 5.63 0 008.72-3.95zM2 13c0-5.25 4.25-9.5 9.5-9.5S21 7.75 21 13s-4.25 9.5-9.5 9.5S2 18.25 2 13z" />
            </svg>
            <span>Share on WhatsApp</span>
          </button>
        </section>

        {/* Review */}
        <section className="mb-8">
          <h3 className="font-semibold text-base mb-2">How quick and easy was our website?</h3>
          <p className="text-sm mb-4">
            Leave us a review to help others find out how much they could potentially be owed.
          </p>
          <select
            aria-label="Select A Star To Leave A Review"
            className="w-full py-2 px-3 mb-3 border border-gray-300 rounded focus:outline-none"
            value={selectedStar ?? ''}
            onChange={(e) => setSelectedStar(Number(e.target.value))}
          >
            <option value="" disabled>
              Select A Star To Leave A Review
            </option>
            {[...Array(starCount)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1} Star{i + 1 > 1 ? 's' : ''}
              </option>
            ))}
          </select>
          <div className="flex space-x-1">
            {[...Array(starCount)].map((_, i) => {
              const starIndex = i + 1;
              const filled = selectedStar !== null && selectedStar >= starIndex;
              return (
                <svg
                  key={starIndex}
                  xmlns="http://www.w3.org/2000/svg"
                  fill={filled ? '#FFC107' : 'none'}
                  stroke="#FFC107"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                  className={`w-8 h-8 cursor-pointer`}
                  onClick={() => setSelectedStar(starIndex)}
                  role="button"
                  aria-label={`${starIndex} Star`}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setSelectedStar(starIndex);
                    }
                  }}
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              );
            })}
          </div>
        </section>

        {/* Speed things up */}
        <section className="mb-8">
          <h3 className="font-semibold text-base mb-2">Speed Things Up!</h3>
          <p className="text-sm mb-3">
            Speed up your claim by uploading your driving licence (or passport).
          </p>
          <button
            type="button"
            className="w-full bg-cyan-100 text-cyan-800 py-3 rounded mb-3 font-medium flex items-center justify-center space-x-2 hover:bg-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 12l5-5 5 5M12 7v10" />
            </svg>
            <span>Click to Upload</span>
          </button>
          <button
            type="submit"
            disabled
            aria-disabled="true"
            className="w-full bg-gray-300 text-gray-600 py-3 rounded cursor-not-allowed font-semibold"
          >
            Submit &gt;
          </button>
        </section>

        {/* Details summary */}
        <section className="mb-6 text-sm text-gray-800">
          <ul className="space-y-3">
            <li className="flex items-start space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="#22c55e"
                strokeWidth={3}
                viewBox="0 0 24 24"
                className="w-6 h-6 shrink-0 mt-1"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>95% chance their car finance included lender commission.</span>
            </li>
            <li className="flex items-start space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="#22c55e"
                strokeWidth={3}
                viewBox="0 0 24 24"
                className="w-6 h-6 shrink-0 mt-1"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>The average claim value is £5,318.25 per vehicle.</span>
            </li>
          </ul>
        </section>

        {/* Legal Obligations */}
        <section className="text-xs text-gray-600 space-y-3 mb-10">
          <p>
            <strong>Legal Obligations</strong>
          </p>
          <p>
            • By submitting your details, you have entered a legal claims process. It is important
            to review the confirmation email for more information about what to expect and the next
            steps in this process.
          </p>
          <p>
            • Your Claim Value<br />
            The average claim value is £5,318.25, with some clients receiving up to £10,446.46.
            However, please note that claim amounts depend on individual circumstances. The values
            mentioned are based on successful past claims.
          </p>
          <p>
            <strong>Disclaimer:</strong> PCP Pal is a trading style of Courtness Legal Limited,
            Registered in England and Wales, Company No: 3195647. Authorised and regulated by The
            Solicitors Regulation Authority (SRA) – SRA Reg No: 819044. Registered with the
            Information Commissioners Office (ICO) – ICO Reg No: ZA899674.
          </p>
          <p>
            The outcome of your claim will depend on the specific circumstances of your case,
            results may vary, and past performance does not indicate future outcomes.
          </p>
          <p>*£15,954.75 is the average claim at 29/05/2024.</p>
          <p>*£10,446.46 is the most significant claim value as of 29/05/2024.</p>
          <p>Based on industry research; industry results may vary.</p>
          <p>
            <strong>Privacy and Complaints</strong><br />
            By submitting a claim, you consent to Courtness Legal Limited processing your data in
            accordance with our Privacy Policy. For more details, please review our Complaints
            Procedure.
          </p>
        </section>

        <RegulatorInfo />
        <PrivacyInfo />

        {/* Footer links */}
        <footer className="mx-auto text-xs text-center text-gray-500 mb-6">
          <a href="/terms" className="underline mx-1 hover:text-gray-700">
            Terms &amp; Conditions
          </a>{' '}
          |{' '}
          <a href="/complaints" className="underline mx-1 hover:text-gray-700">
            Complaints Procedure
          </a>{' '}
          |{' '}
          <a href="/privacy" className="underline mx-1 hover:text-gray-700">
            Privacy Policy
          </a>
        </footer>

        <Footer />
      </main>
    </div>
  );
}
