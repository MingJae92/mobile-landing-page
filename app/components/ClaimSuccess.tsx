"use client";

import { useState, FormEvent } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import Header from './Header';
import RegulatorInfo from './RegulatorInfo';
import PrivacyInfo from './PrivacyInfo';
import Footer from '../components/Footer';

export default function ClaimSuccess() {
  const [regNumber, setRegNumber] = useState('');
  const { firstName, surname } = useSelector(
    (state: RootState) => state.personalDetails
  );

  const isRegValid = /^[A-Z]{2}\d{2}\s?[A-Z]{3}$/i.test(regNumber);

  const handleSubmit = (e: FormEvent) => e.preventDefault();

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* HEADER */}
      <Header />

      {/* Stat bar */}
      <div className="bg-gray-50 px-4 py-2 border-b flex items-center gap-2 text-xs sm:text-sm text-gray-700">
        <span>👤</span>
        <span>22.43 million households in UK could be affected</span>
      </div>

      {/* MAIN CONTENT - centered */}
      <main className="flex-1 max-w-md mx-auto px-4 py-4 w-full space-y-4">
        {/* Congratulations */}
        <section className="space-y-1">
          <h1 className="text-2xl font-extrabold leading-tight">
            Congratulations <span className="font-normal">{firstName} {surname}</span>
          </h1>
          <p className="text-base font-semibold">your claim is now submitted.</p>
          <p className="text-3xl font-extrabold text-green-700">£15,954.75*</p>
          <select
            aria-label="Agreements Found"
            className="w-full bg-white border border-gray-300 rounded py-2 px-3"
            defaultValue=""
          >
            <option value="" disabled>3 Agreements Found</option>
          </select>
        </section>

        {/* Missed agreements */}
        <section className="space-y-2">
          <h2 className="font-semibold text-base">Feel like we’ve missed something?</h2>
          <p className="text-sm">Use the registration checker below to find other agreements you know you’ve had.</p>
          <form onSubmit={handleSubmit} className="space-y-2">
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
              className={`w-full py-2.5 rounded font-semibold text-white text-base ${isRegValid ? 'bg-gray-300 cursor-pointer' : 'bg-gray-400 cursor-not-allowed'}`}
            >
              Search &gt;
            </button>
          </form>
        </section>

        {/* Next steps */}
        <section className="space-y-2">
          <h2 className="font-semibold text-base flex items-center">
            <img src="/courtness-legal.svg" alt="Courtness Legal" className="w-20 h-auto mr-2" />
            Next steps
          </h2>
          <p className="text-sm text-gray-700">Keep an eye out for an email in your inbox as we will shortly be sending you a copy of your legal documents.</p>
          <p className="text-xs italic">Watch this short video on what the next steps of your journey with Courtness Legal are.</p>
          <div className="aspect-w-16 aspect-h-9 rounded overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/3cj7LvqAHow"
              title="Next Steps Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </section>
      </main>

      {/* FULL-WIDTH SECTIONS - move outside main */}
      <div className="w-full">
        <RegulatorInfo />
      </div>

      <div className="w-full">
        <PrivacyInfo />
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
