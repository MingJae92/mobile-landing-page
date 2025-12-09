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
const confettiColors = ['#FF004F', '#FFC107', '#22c55e', '#3B82F6', '#A855F7'];

function ConfettiAnimation() {
  return (
    <svg className="w-10 h-10 flex-shrink-0 ml-3" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      {[...Array(20)].map((_, i) => {
        const size = Math.random() * 4 + 2;
        const x = Math.random() * 60;
        const delay = Math.random() * 2;
        const color = confettiColors[i % confettiColors.length];
        return (
          <rect
            key={i}
            x={x}
            y={-size}
            width={size}
            height={size}
            fill={color}
          >
            <animate
              attributeName="y"
              from={-size}
              to={64}
              dur={`${1.5 + Math.random() * 1}s`}
              repeatCount="indefinite"
              begin={`${delay}s`}
            />
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 0 0"
              to="360 0 0"
              dur={`${1 + Math.random() * 1}s`}
              repeatCount="indefinite"
              begin={`${delay}s`}
            />
          </rect>
        );
      })}
    </svg>
  );
}

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
      <div className="bg-gray-50 px-4 py-2 mb-2 border-b flex items-center gap-2 text-xs sm:text-sm leading-tight text-gray-700 w-full">
        <span>👤</span>
        <span>You've now joined the 1 million+ drivers helped so far</span>
      </div>

      {/* Main content - centered */}
      <main className="flex-1 max-w-md mx-auto px-4 py-6 space-y-6 w-full">

        {/* Congratulations */}
        <section className="flex items-center justify-between">
          <h1 className="text-2xl font-extrabold leading-tight mb-1 flex-1">
            Congratulations <span className="font-normal">{firstName} {surname}</span>
          </h1>
          <ConfettiAnimation />
        </section>

        <p className="text-base font-semibold mb-0.5">your claim is now submitted.</p>
        <p className="text-3xl font-extrabold text-green-700">£15,954.75*</p>

        <select
          aria-label="Agreements Found"
          className="w-full bg-white border border-gray-300 rounded mt-3 py-2 px-3"
          defaultValue=""
        >
          <option value="" disabled>3 Agreements Found</option>
        </select>

        {/* Missed agreements */}
        <section>
          <h2 className="font-semibold text-base mb-1">Feel like we’ve missed something?</h2>
          <p className="text-sm mb-2">Use the registration checker below to find other agreements you know you’ve had.</p>
          <form onSubmit={handleSubmit} className="space-y-3">
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
          <div className="flex items-center justify-between mb-2">
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

          <p className="text-sm mb-3">
            Keep an eye out for an email in your inbox as we will shortly be sending you a copy of your legal documents.
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

        {/* Other sections remain unchanged */}
        {/* Help your close ones, Review, Speed Things Up, Details summary */}
        {/* Full-width sections: RegulatorInfo, PrivacyInfo, Footer */}

      </main>

      {/* Full-width sections */}
      <RegulatorInfo />
      <PrivacyInfo />

      {/* Footer */}
      <Footer />
    </div>
  );
}
