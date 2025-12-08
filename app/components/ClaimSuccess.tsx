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

  const { firstName, surname } = useSelector(
    (state: RootState) => state.personalDetails
  );

  const isRegValid = /^[A-Z]{2}\d{2}\s?[A-Z]{3}$/i.test(regNumber);

  const handleSubmit = (e: FormEvent) => e.preventDefault();

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <Header />

      {/* Info Banner - full width */}
      <div className="bg-gray-50 px-4 py-2 border-b flex items-center gap-2 text-xs sm:text-sm text-gray-700">
        <span>👤</span>
        <span>22.43 million households in UK could be affected</span>
      </div>

      {/* MAIN CONTENT */}
      <main className="flex-1 max-w-md mx-auto px-4 py-4 w-full space-y-6">
        {/* Congratulations */}
        <section>
          <h1 className="text-2xl font-extrabold leading-tight mb-1">
            Congratulations{' '}
            <span className="font-normal">{firstName} {surname}</span>
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
        <section>
          <h2 className="font-semibold text-base mb-1">Feel like we’ve missed something?</h2>
          <p className="text-sm mb-2">
            Use the registration checker below to find other agreements you know you’ve had.
          </p>
          <form onSubmit={handleSubmit} className="space-y-3">
            <label htmlFor="reg" className="sr-only">Enter Vehicle Registration Number</label>
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
              className={`w-full py-3 rounded font-semibold text-white text-base ${isRegValid ? 'bg-gray-300 cursor-pointer' : 'bg-gray-400 cursor-not-allowed'}`}
            >
              Search &gt;
            </button>
          </form>
        </section>

        {/* Next steps */}
        <section>
          <h2 className="font-semibold text-base flex items-center mb-2">
            <img src="/courtness-legal.svg" alt="Courtness Legal" className="w-20 h-auto mr-2" aria-hidden="true" />
            Next steps
          </h2>
          <p className="text-sm mb-3">
            Keep an eye out for an email in your inbox as we will shortly be sending you a copy of
            your legal documents.
          </p>
          <p className="text-xs italic mb-3">
            Watch this short video on what the next steps of your journey with Courtness Legal are.
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
        <section>
          <h3 className="font-semibold text-base mb-2">Help Your Close Ones Claim!</h3>
          <p className="text-sm mb-4">Your friends and family may have financed a vehicle before 2021.</p>
          <button
            type="button"
            className="flex items-center justify-center space-x-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded w-full"
            aria-label="Share on WhatsApp"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.93 8.64a5.65 5.65 0 00-8 7.85l-3 1a.75.75 0 01-1.07-1l3.35-3.88a5.63 5.63 0 008.72-3.95zM2 13c0-5.25 4.25-9.5 9.5-9.5S21 7.75 21 13s-4.25 9.5-9.5 9.5S2 18.25 2 13z"/>
            </svg>
            <span>Share on WhatsApp</span>
          </button>
        </section>

        {/* Review */}
        <section>
          <h3 className="font-semibold text-base mb-2">How quick and easy was our website?</h3>
          <p className="text-sm mb-4">Leave us a review to help others find out how much they could potentially be owed.</p>
          <select
            aria-label="Select A Star To Leave A Review"
            className="w-full py-2 px-3 mb-3 border border-gray-300 rounded focus:outline-none"
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
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') setSelectedStar(starIndex);
                  }}
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                </svg>
              );
            })}
          </div>
        </section>
      </main>

      {/* Full-width sections */}
      <div className="w-full">
        <RegulatorInfo />
      </div>
      <div className="w-full">
        <PrivacyInfo />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
