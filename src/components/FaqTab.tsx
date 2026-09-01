import React, { useState } from 'react';
import { CLINIC_DATA, FAQItem } from '../data/clinicData';

interface FaqTabProps {
  onBookAppointment: () => void;
}

export const FaqTab: React.FC<FaqTabProps> = ({ onBookAppointment }) => {
  const [openFaqId, setOpenFaqId] = useState<string | null>(
    CLINIC_DATA.faqs[0].id
  );
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = CLINIC_DATA.faqs.filter(
    (faq: FAQItem) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-10 space-y-8">
        {/* Header */}
        <div className="mb-6">
          <span className="text-[10px] font-bold text-teal-600 uppercase tracking-widest block mb-1">
            Frequently Asked Questions
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Got Questions? We Have Answers.
          </h1>
          <p className="text-slate-500 text-xs sm:text-sm mt-1">
            Clear insights into procedures, painless methods, durations, and insurance coverage.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="relative">
          <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xs"></i>
          <input
            type="text"
            id="faq-search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions (e.g. RCT, pain, insurance, implants, invisalign)..."
            className="w-full pl-10 pr-4 py-3 rounded-2xl bg-white border border-slate-200 shadow-xs focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-xs text-slate-800 placeholder-slate-400"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 cursor-pointer"
            >
              Clear
            </button>
          )}
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq: FAQItem) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  id={`faq-item-${faq.id}`}
                  className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 focus:outline-none hover:bg-slate-50/70 cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center flex-shrink-0 text-xs font-bold">
                        <i className="fa-solid fa-tooth"></i>
                      </span>
                      <span className="font-bold text-xs sm:text-sm text-slate-900 leading-snug">
                        {faq.question}
                      </span>
                    </div>
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                        isOpen
                          ? 'bg-teal-600 text-white rotate-180'
                          : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      <i className="fa-solid fa-chevron-down text-[10px]"></i>
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-slate-600 text-xs leading-relaxed border-t border-slate-100 bg-slate-50/40">
                      <p>{faq.answer}</p>
                      <div className="mt-2.5 flex items-center gap-2">
                        <span className="text-[10px] font-semibold text-teal-700 bg-teal-50 px-2 py-0.5 rounded border border-teal-100">
                          Category: {faq.category}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-10 bg-white rounded-2xl border border-slate-100">
              <p className="text-slate-500 font-medium text-xs">
                No matching dental questions found for "{searchQuery}".
              </p>
              <button
                onClick={() => setSearchQuery('')}
                className="mt-2 text-xs font-bold text-teal-600 hover:underline cursor-pointer"
              >
                Reset Search
              </button>
            </div>
          )}
        </div>

        {/* Still Have Questions CTA Banner */}
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 border border-slate-800">
          <div>
            <span className="text-[10px] font-bold text-teal-400 uppercase tracking-wider block mb-1">
              Need Immediate Help?
            </span>
            <h2 className="text-xl font-bold text-white">
              Have a unique question or dental emergency?
            </h2>
            <p className="text-slate-400 text-xs mt-0.5">
              Speak directly with our senior dental duty officer right now.
            </p>
          </div>
          <div className="flex items-center gap-2.5 flex-shrink-0">
            <button
              id="faq-book-cta"
              onClick={onBookAppointment}
              className="px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-teal-600 hover:bg-teal-700 transition-colors shadow-md shadow-teal-600/20 cursor-pointer"
            >
              Book Visit
            </button>
            <a
              href={`tel:${CLINIC_DATA.phoneRaw}`}
              className="px-4 py-2.5 rounded-xl font-bold text-xs text-white bg-slate-800 hover:bg-slate-700 transition-colors border border-slate-700"
            >
              Call Clinic
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
