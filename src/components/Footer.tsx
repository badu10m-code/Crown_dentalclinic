import React from 'react';
import { CLINIC_DATA } from '../data/clinicData';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  onBookClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, onBookClick }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 text-xs">
      {/* Top CTA Banner */}
      <div className="bg-slate-900 py-10 px-4 sm:px-8 lg:px-10 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1.5">
            <span className="text-teal-400 text-[10px] font-bold uppercase tracking-widest block">
              {CLINIC_DATA.name}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              "{CLINIC_DATA.primaryPromise}"
            </h2>
            <p className="text-slate-400 text-xs max-w-xl">
              Experience the pinnacle of painless, specialized dental healthcare with Delhi NCR's top MDS dentists.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            <button
              id="footer-book-btn"
              onClick={onBookClick}
              className="px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-teal-600 hover:bg-teal-700 transition-colors shadow-md shadow-teal-600/20 cursor-pointer"
            >
              <i className="fa-solid fa-calendar-check mr-1.5"></i>
              Book Instant Visit
            </button>
            <a
              href={`tel:${CLINIC_DATA.phoneRaw}`}
              className="px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-slate-800 hover:bg-slate-700 transition-colors border border-slate-700"
            >
              <i className="fa-solid fa-phone mr-1.5 text-teal-400"></i>
              {CLINIC_DATA.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Branches */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-teal-600 flex items-center justify-center text-white text-base shadow">
                <i className="fa-solid fa-tooth"></i>
              </div>
              <div>
                <span className="font-bold text-base text-white tracking-tight">
                  Crown <span className="text-teal-400">&</span> Roots
                </span>
                <p className="text-[9px] uppercase font-bold text-slate-500 tracking-wider">
                  Dental Clinic & Implant Centre
                </p>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Delhi NCR's premier multi-speciality clinic offering single-sitting Root Canals, Swiss Dental Implants, Invisalign Clear Aligners, Laser Teeth Whitening, and Child Dental Care with 100% Class-B Sterilization.
            </p>
            <div className="flex items-center gap-2 pt-1">
              <a
                href={CLINIC_DATA.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-lg bg-slate-900 border border-slate-800 hover:border-emerald-500 text-slate-400 hover:text-emerald-400 flex items-center justify-center transition-colors text-xs"
                title="WhatsApp"
              >
                <i className="fa-brands fa-whatsapp"></i>
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-lg bg-slate-900 border border-slate-800 hover:border-rose-500 text-slate-400 hover:text-rose-400 flex items-center justify-center transition-colors text-xs"
                title="Instagram"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-lg bg-slate-900 border border-slate-800 hover:border-blue-500 text-slate-400 hover:text-blue-400 flex items-center justify-center transition-colors text-xs"
                title="Facebook"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-lg bg-slate-900 border border-slate-800 hover:border-teal-500 text-slate-400 hover:text-teal-400 flex items-center justify-center transition-colors text-xs"
                title="Google Maps"
              >
                <i className="fa-solid fa-map-location-dot"></i>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="space-y-2.5">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <button
                  onClick={() => {
                    setActiveTab('home');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-teal-400 transition-colors cursor-pointer"
                >
                  Home & Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('services');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-teal-400 transition-colors cursor-pointer"
                >
                  All Treatments & Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-teal-400 transition-colors cursor-pointer"
                >
                  About Us & Sterilization
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('faq');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-teal-400 transition-colors cursor-pointer"
                >
                  FAQs & Pre-Visit Guide
                </button>
              </li>
              <li>
                <button
                  onClick={onBookClick}
                  className="text-teal-400 font-bold hover:underline cursor-pointer"
                >
                  Book Appointment
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Treatments */}
          <div className="space-y-2.5">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">
              Featured Specialities
            </h4>
            <ul className="space-y-1.5 text-xs">
              {CLINIC_DATA.services.slice(0, 5).map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => {
                      setActiveTab('services');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-teal-400 transition-colors text-left cursor-pointer"
                  >
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Clinic Timings & Contact */}
          <div className="space-y-2.5">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">
              Visiting Hours
            </h4>
            <div className="space-y-1 text-xs text-slate-300">
              <p className="font-semibold text-teal-400">Monday – Saturday:</p>
              <p>9:30 AM – 7:30 PM</p>
              <p className="font-semibold text-teal-400 pt-0.5">Sunday:</p>
              <p>By Prior Appointment</p>
            </div>
            <div className="pt-1.5 text-xs">
              <span className="text-[10px] font-bold uppercase text-slate-500 block mb-0.5">
                Helpline:
              </span>
              <a
                href={`tel:${CLINIC_DATA.phoneRaw}`}
                className="text-white font-bold hover:text-teal-400 transition-colors"
              >
                {CLINIC_DATA.phone}
              </a>
            </div>
          </div>
        </div>

        {/* Branches Detailed Address Footer Section */}
        <div className="mt-10 pt-6 border-t border-slate-900 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-400">
          <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
            <p className="font-bold text-white mb-0.5 flex items-center gap-1.5">
              <i className="fa-solid fa-location-dot text-teal-400"></i>
              South Extension II (Delhi):
            </p>
            <p className="text-slate-400 text-[11px]">L 1/3, Block-L, South Extension II, New Delhi, Delhi 110049</p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
            <p className="font-bold text-white mb-0.5 flex items-center gap-1.5">
              <i className="fa-solid fa-location-dot text-cyan-400"></i>
              Gurgaon Centre:
            </p>
            <p className="text-slate-400 text-[11px]">Shop No 303/1, Lajpat Nagar, New Railway Rd, Gurugram, Haryana 122001</p>
          </div>
        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="mt-6 pt-5 border-t border-slate-900 text-center sm:flex sm:justify-between text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} Crown & Roots Dental Clinic. All Rights Reserved.</p>
          <p className="mt-1 sm:mt-0">
            Painless Dentistry • CGHS Empanelled • Certified Implant & Invisalign Centre
          </p>
        </div>
      </div>
    </footer>
  );
};
