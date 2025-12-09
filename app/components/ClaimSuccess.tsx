"use client";

import { useState, FormEvent } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import Image from 'next/image';
import Header from './Header';
import RegulatorInfo from './RegulatorInfo';
import PrivacyInfo from './PrivacyInfo';
import Footer from '../components/Footer';
import NumberPlate from '../../public/number-plate.svg';

const starCount = 5;

export default function ClaimSuccess() {
  const [regNumber, setRegNumber] = useState('');
  const [selectedStar, setSelectedStar] = useState<number | null>(null);

  const { firstName, surname } = useSelector(
    (state: RootState) => state.personalDetails
  );

  const isRegValid = /^[A-Z]{2}\d{2}\s?[A-Z]{3}$/i.test(regNumber);

  const handleSubmit = (e: FormEvent) => e.preventDefault();

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <Header />

      {/* Compact Info Banner */}
      <div className="bg-gray-50 px-4 py-2 border-b flex items-center gap-2 text-xs sm:text-sm leading-tight text-gray-700 w-full">
        <span>👤</span>
        <span>You've now joined the 1 million+ drivers helped so far</span>
      </div>

      {/* Main content - centered */}
      <main className="max-w-md mx-auto px-4 py-2 space-y-2 w-full">

        {/* Congratulations */}
        <section className="flex items-center">
          <h1 className="text-2xl font-extrabold leading-tight flex-1">
            Congratulations <span className="font-normal">{firstName} {surname}</span>
          </h1>
        </section>

        <p className="text-base font-semibold mb-0.5">your claim is now submitted.</p>
        <p className="text-3xl font-extrabold text-green-700">£15,954.75*</p>

        <select
          aria-label="Agreements Found"
          className="w-full bg-white border border-gray-300 rounded mt-2 py-2 px-3"
          defaultValue=""
        >
          <option value="" disabled>3 Agreements Found</option>
        </select>

        {/* Missed agreements */}
        <section>
          <h2 className="font-semibold text-base mb-1">Feel like we’ve missed something?</h2>
          <p className="text-sm mb-1">Use the registration checker below to find other agreements you know you’ve had.</p>
          <form onSubmit={handleSubmit} className="space-y-2">
            <label htmlFor="reg" className="sr-only">Enter Vehicle Registration Number</label>

            {/* Number Plate SVG Input */}
            <div className="relative w-full h-14 rounded overflow-hidden border border-gray-300">
              <Image
                src={NumberPlate}
                alt="Numberplate"
                fill
                className="object-cover"
              />
            </div>

            <button
              type="submit"
              disabled={!isRegValid}
              className={`w-full py-3 rounded font-semibold text-white text-base ${isRegValid ? 'bg-gray-300 cursor-pointer' : 'bg-gray-400 cursor-not-allowed'}`}
            >
              Search &gt;
            </button>
          </form>
        </section>

        {/* Next steps */}
        <section>
          <div className="flex items-center justify-between mb-1">
            <h2 className="font-semibold text-base">Next steps</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-blue-700 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l7 4v6c0 5-3 9-7 10-4-1-7-5-7-10V6l7-4z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6M9 16h6" />
            </svg>
          </div>

          <p className="text-sm mb-1">
            Keep an eye out for an email in your inbox as we will shortly be sending you a copy of your legal documents.
          </p>
          <p className="text-xs italic mb-1">
            Watch this short video on what the next steps of your journey with Courtness Legal are.
          </p>
          <div className="aspect-w-16 aspect-h-9 rounded overflow-hidden mb-2">
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
        <section>
          <h3 className="font-semibold text-base mb-1">Help Your Close Ones Claim!</h3>
          <p className="text-sm mb-2">Your friends and family may have financed a vehicle before 2021.</p>
          <button
            type="button"
            className="flex items-center justify-center space-x-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded w-full"
            aria-label="Share on WhatsApp"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
              <path d="M20.93 8.64a5.65 5.65 0 00-8 7.85l-3 1a.75.75 0 01-1.07-1l3.35-3.88a5.63 5.63 0 008.72-3.95zM2 13c0-5.25 4.25-9.5 9.5-9.5S21 7.75 21 13s-4.25 9.5-9.5 9.5S2 18.25 2 13z" />
            </svg>
            <span>Share on WhatsApp</span>
          </button>
        </section>

        {/* Review */}
        <section>
          <h3 className="font-semibold text-base mb-1">How quick and easy was our website?</h3>
          <p className="text-sm mb-2">Leave us a review to help others find out how much they could potentially be owed.</p>
          <select
            aria-label="Select A Star To Leave A Review"
            className="w-full py-2 px-3 mb-2 border border-gray-300 rounded focus:outline-none"
            value={selectedStar ?? ''}
            onChange={(e) => setSelectedStar(Number(e.target.value))}
          >
            <option value="" disabled>Select A Star To Leave A Review</option>
            {[...Array(starCount)].map((_, i) => (
              <option key={i + 1} value={i + 1}>{i + 1} Star{i + 1 > 1 ? 's' : ''}</option>
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
                  className="w-8 h-8 cursor-pointer"
                  onClick={() => setSelectedStar(starIndex)}
                  role="button"
                  aria-label={`${starIndex} Star`}
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setSelectedStar(starIndex); }}
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              );
            })}
          </div>
        </section>

        {/* Speed Things Up */}
        <section>
          <div className="flex items-center justify-between mb-1">
            <h3 className="font-semibold text-base">Speed Things Up!</h3>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-cyan-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <line x1="7" y1="9" x2="11" y2="9" strokeLinecap="round" strokeLinejoin="round" />
              <line x1="7" y1="13" x2="17" y2="13" strokeLinecap="round" strokeLinejoin="round" />
              <line x1="7" y1="17" x2="13" y2="17" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <p className="text-sm mb-1">Speed up your claim by uploading your driving licence (or passport).</p>

          <div className="flex flex-col space-y-2">
            <button
              type="button"
              className="w-full bg-cyan-100 text-cyan-800 py-3 rounded font-medium flex items-center justify-center space-x-2 hover:bg-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
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
          </div>
        </section>

        {/* Details summary */}
        <section className="text-sm text-gray-800 space-y-2">
          <ul className="space-y-2">
            <li className="flex items-start space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#22c55e" strokeWidth={3} viewBox="0 0 24 24" className="w-6 h-6 shrink-0 mt-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>95% chance their car finance included lender commission.</span>
            </li>
            <li className="flex items-start space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#22c55e" strokeWidth={3} viewBox="0 0 24 24" className="w-6 h-6 shrink-0 mt-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>The average claim value is £5,318.25 per vehicle.</span>
            </li>
          </ul>
        </section>

      </main>

      {/* Full-width sections */}
      <RegulatorInfo />
      <PrivacyInfo />

      {/* Footer */}
      <Footer />
    </div>
  );
}
