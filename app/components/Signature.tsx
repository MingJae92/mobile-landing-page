"use client";

import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import SignaturePad from "react-signature-canvas";
import Header from "./Header";

export default function Signature() {
  const router = useRouter();
  const sigRef = useRef<SignaturePad>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isSigned, setIsSigned] = useState(false);
  const [canvasSize, setCanvasSize] = useState({ width: 400, height: 200 });

  // Maintain 2:1 width to height ratio
  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const width = containerRef.current.clientWidth;
        const height = width / 2; // 2:1 ratio
        setCanvasSize({ width, height });
      }
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const handleEnd = () => setIsSigned(true);

  const resetSignature = () => {
    sigRef.current?.clear();
    setIsSigned(false);
  };

  const handleSubmit = () => {
    if (isSigned) {
      const dataURL = sigRef.current?.toDataURL();
      console.log("Signature image:", dataURL);
      router.push("/claim-success");
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* HEADER */}
      <Header />

      {/* Info Banner */}
      <div className="bg-gray-50 px-4 py-2 border-b flex items-center gap-2 text-sm">
        <span>👤</span>
        <span className="text-gray-700">Final step! Your claim is 100% no-win, no-fee!</span>
      </div>

      {/* MAIN CONTENT */}
      <main className="flex-1 max-w-md mx-auto px-4 py-6 w-full">
        {/* Title */}
        <h1 className="text-2xl mb-1">
          <span className="text-green-500 font-bold">Great News,</span>{" "}
          <span className="font-bold text-gray-900">David,</span>
        </h1>
        <h2 className="text-2xl font-bold text-gray-900 mb-3">
          we've found 3 claims
        </h2>

        <p className="text-gray-700 mb-2">
          Submit your claim to reveal your lenders and potential compensation amount.
        </p>

        <p className="text-sm text-gray-600 mb-6">
          Use your finger or stylus to <strong>sign on the dotted line</strong> below.
        </p>

        {/* Signature Canvas */}
        <div ref={containerRef} className="mb-4 relative">
          <div className="border-2 border-dashed border-gray-300 rounded-lg bg-white relative">
            <SignaturePad
              ref={sigRef}
              penColor="black"
              canvasProps={{
                width: canvasSize.width,
                height: canvasSize.height,
                className: "w-full h-48 touch-none cursor-crosshair",
              }}
              onEnd={handleEnd}
            />

            {/* Dotted line */}
            <div className="absolute bottom-3 left-4 right-4 border-b-2 border-gray-400 pointer-events-none"></div>

            {/* Signature label */}
            <div className="absolute top-3 left-3 text-gray-400 text-sm pointer-events-none">
              Signature
            </div>

            {/* Reset Button */}
            <button
              onClick={resetSignature}
              className="absolute top-3 right-3 bg-gray-200 px-3 py-1 rounded text-sm flex items-center gap-1 hover:bg-gray-300"
            >
              <span>↻</span> Reset signature
            </button>
          </div>
        </div>

        {/* Agreement Link */}
        <a href="#" className="text-sm text-blue-600 underline block mb-4">
          View our no-win no-fee client agreement (DBA)
        </a>

        {/* Legal Text */}
        <p className="text-xs text-gray-600 leading-relaxed mb-4">
          By proceeding, you confirm that you have read, understand, and accept Courmacs Legal
          Limited's Terms and Conditions, Data Subject Access Request (DSAR) Policy, and consent to
          a data subject access request (DSAR) to find out if my PCP or HP agreements were mis-
          sold by clicking 'Submit My Claim'. I understand that for each claim, I will receive a new
          damages-based agreement for me to review and that my signature shown will be applied
          to each document.
        </p>

        {/* Info Box */}
        <div className="bg-gray-100 border border-gray-300 rounded-lg px-4 py-3 mb-4">
          <p className="text-sm text-gray-700">
            Up to <strong>9 out of 10 car finance agreements</strong> are affected*
          </p>
        </div>

        {/* Submit Button */}
        <button
          disabled={!isSigned}
          onClick={handleSubmit}
          className={`w-full py-3 rounded-lg font-semibold text-white text-base mb-6 flex items-center justify-center
            ${isSigned ? "bg-gray-400 hover:bg-gray-500" : "bg-gray-300 cursor-not-allowed"}`}
        >
          <span className="mr-2">✓</span> Submit Claim & Reveal
        </button>

        {/* Trust Badges */}
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="flex items-center gap-1">
            <span className="text-green-600">★</span>
            <span className="font-bold text-sm">Trustpilot</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
            </svg>
            <span className="font-semibold text-sm">SECURE</span>
            <span className="text-gray-600 text-xs">SSL ENCRYPTION</span>
          </div>
        </div>

        {/* Average Claim Value */}
        <div className="text-center mb-6">
          <p className="text-sm font-semibold text-gray-900 mb-1">Average claim value:</p>
          <p className="text-2xl font-bold text-gray-900">£5,318.25* per vehicle</p>
        </div>

        {/* SRA Badge */}
        <div className="flex justify-center mb-6">
          <div className="border-2 border-red-600 p-2 text-center">
            <div className="text-red-600 font-bold text-xs">SOLICITORS</div>
            <div className="text-red-600 font-bold text-xs">REGULATION</div>
            <div className="text-red-600 font-bold text-xs">AUTHORITY</div>
            <div className="text-gray-700 text-[10px] mt-1">Regulated Law Firm</div>
          </div>
        </div>

        {/* Footer Legal Text */}
        <div className="space-y-4 text-xs text-gray-600 leading-relaxed">
          <p>
            PCP Pal is a trading style of Courmacs Legal Limited. Registered in England and Wales,
            Company No. 13185687. Authorised and regulated by the Solicitors Regulation Authority
            (SRA) – SRA Reg No: 819044. Registered with the Information Commissioner's Office (ICO)
            – ICO Reg No: ZA886741.
          </p>

          <p>
            The outcome of your claim will depend on the specific circumstances of your case. Results
            may vary, and past performance does not indicate future outcomes.
          </p>

          <p>
            *£5,318.25 is the average claim as of 29/05/2024.
            <br />
            *£10,446.46 is the most significant claim value as of 29/05/2024.
            <br />
            *Based on industry research; industry results may vary.
          </p>

          <p className="font-semibold">Privacy and Complaints</p>

          <p>
            By submitting a claim, you consent to Courmacs Legal Limited processing your data in
            accordance with our Privacy Policy. For concerns, please review our Complaints Procedure.
          </p>

          <p>
            The agreements identified are subject to verification. This means that while agreements
            may be initially detected, they must go through a verification process to confirm
            eligibility.
          </p>
        </div>

        {/* Bottom Links */}
        <div className="flex justify-center gap-4 mt-8 pt-6 border-t text-xs">
          <a href="#" className="text-gray-700 underline">Terms & Conditions</a>
          <a href="#" className="text-gray-700 underline">Complaints Procedure</a>
          <a href="#" className="text-gray-700 underline">Privacy Policy</a>
        </div>
      </main>
    </div>
  );
}
