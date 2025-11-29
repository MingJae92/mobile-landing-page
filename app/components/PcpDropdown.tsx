"use client";

import { useState } from 'react';

interface FAQ {
  question: string;
  answer: string;
}

// FAQ Dropdown Component
export default function PcpDropdown() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQ[] = [
    {
      question: "How do I determine if I qualify for compensation?",
      answer: "If you've had a finance agreement like PCP or HP before 2021, you may be eligible for compensation due to mis-selling. Check your eligibility by filling out our online form."
    },
    {
      question: "What criteria must I meet to make a claim?",
      answer: "Your lender must have failed to disclose the commission details on your agreement(s). If your finance details were inadequately explained or you faced higher interest rates due to commissions, you could be eligible for £1,000s. Check our free online form to see if you meet the criteria."
    },
    {
      question: "Does the type of agreement matter (PCP vs. HP)?",
      answer: "Don't worry if you had an HP loan instead of a PCP agreement – we accept claims for various vehicle finance agreements. Start your claim today with our online form."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50 py-6 px-4 rounded-lg mt-4">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm">
            <button
              onClick={() => toggleFaq(index)}
              className="w-full text-left px-4 py-4 flex justify-between items-start gap-3 hover:bg-gray-50 transition"
            >
              <span className="text-gray-900 font-medium flex-1">
                <span className="text-lg mr-2">-</span>
                {faq.question}
              </span>
              <span className={`text-gray-400 text-xl transform transition-transform ${openIndex === index ? 'rotate-180' : ''}`}>
                {openIndex === index ? '−' : '+'}
              </span>
            </button>
            
            {openIndex === index && (
              <div className="px-4 pb-4 pt-2">
                <p className="text-gray-600 text-sm leading-relaxed pl-6">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      <button className="w-full mt-6 bg-pink-500 hover:bg-pink-600 active:bg-pink-700 text-white font-bold py-4 px-6 rounded-lg flex items-center justify-center gap-2 transition shadow-md">
        <span>🔍</span> Find My Agreements
      </button>
    </div>
  );
}