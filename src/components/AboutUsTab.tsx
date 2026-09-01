import React from 'react';
import { CLINIC_DATA } from '../data/clinicData';

interface AboutUsTabProps {
  onBookAppointment: () => void;
}

export const AboutUsTab: React.FC<AboutUsTabProps> = ({ onBookAppointment }) => {
  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10 space-y-12">
        {/* Header Hero */}
        <div className="mb-8">
          <span className="text-[10px] font-bold text-teal-600 uppercase tracking-widest block mb-1">
            About Crown & Roots
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Our Legacy of Trust & Painless Care
          </h1>
          <p className="text-slate-500 text-xs sm:text-sm mt-1">
            Redefining dental healthcare in Delhi NCR, combining world-class university-trained specialists, robotic 3D imaging, and warm empathy.
          </p>
        </div>

        {/* Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CLINIC_DATA.highlights.map((h, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center text-xl shadow-xs mb-4">
                  <i className={h.icon}></i>
                </div>
                <h2 className="text-base font-bold text-slate-900 mb-1.5">
                  {h.title}
                </h2>
                <p className="text-slate-500 text-xs leading-relaxed">
                  {h.desc}
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-2 text-teal-600 text-xs font-semibold">
                <i className="fa-solid fa-circle-check text-[11px]"></i>
                <span>Clinical Standard</span>
              </div>
            </div>
          ))}
        </div>

        {/* Philosophy & Sterilization Deep Dive */}
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-4">
              <span className="bg-teal-500/20 text-teal-300 text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-teal-500/30 uppercase tracking-wider">
                Uncompromising Hygiene
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                100% Germ-Free Class-B Sterilization
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Patient safety is our primary medical creed. Every non-disposable surgical instrument undergoes ultrasonic cleaning, enzymatic disinfection, vacuum autoclave sealing at 134°C, and UV chamber storage until opened right at your chairside.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-800">
                {CLINIC_DATA.stats.map((st, i) => (
                  <div key={i} className="text-left">
                    <p className="text-2xl font-bold text-teal-400">
                      {st.value}
                    </p>
                    <p className="text-[11px] text-slate-400 font-medium mt-0.5 leading-snug">
                      {st.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop"
                  alt="Sterilization lab"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="absolute -bottom-3 -left-3 bg-teal-600 text-white p-2.5 rounded-xl shadow-lg text-xs font-bold flex items-center gap-2">
                <i className="fa-solid fa-certificate text-base"></i>
                <span>NABH Standard Compliance</span>
              </div>
            </div>
          </div>
        </div>

        {/* Google Maps & Branch Locations */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm">
          <div className="max-w-2xl mb-6">
            <span className="text-[10px] font-bold text-teal-600 uppercase tracking-widest block mb-1">
              Locations
            </span>
            <h2 className="text-2xl font-bold text-slate-900">
              Visit Our Prime Clinics
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              Strategically located in South Delhi and Central Gurgaon with ample parking and direct metro accessibility.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Branch Cards */}
            <div className="lg:col-span-5 space-y-3.5">
              {CLINIC_DATA.branches.map((b, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-teal-200 transition-colors"
                >
                  <div className="flex items-center gap-2 text-teal-700 font-bold text-sm mb-1">
                    <i className="fa-solid fa-location-dot text-xs"></i>
                    <h3>{b.name}</h3>
                  </div>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    {b.address}
                  </p>
                  <p className="text-slate-400 text-[11px] mt-1 font-medium">
                    <i className="fa-solid fa-landmark mr-1 text-teal-600"></i>
                    {b.landmark}
                  </p>
                  <div className="mt-2.5 pt-2.5 border-t border-slate-200/60 flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-700">
                      {b.phone}
                    </span>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                        b.mapQuery
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-teal-600 hover:text-teal-700 flex items-center gap-1"
                    >
                      <span>Directions</span>
                      <i className="fa-solid fa-diamond-turn-right text-[10px]"></i>
                    </a>
                  </div>
                </div>
              ))}

              {/* Consultation prompt */}
              <div className="p-3.5 rounded-2xl bg-teal-50/70 border border-teal-100 text-center">
                <p className="text-xs text-teal-900 font-semibold mb-2">
                  Need assistance finding our entrance?
                </p>
                <button
                  onClick={onBookAppointment}
                  className="w-full py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold transition-colors shadow-md shadow-teal-600/20 cursor-pointer"
                >
                  Book Priority Appointment
                </button>
              </div>
            </div>

            {/* Google Maps Iframe Container */}
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl overflow-hidden border border-slate-100 shadow-sm h-80 bg-slate-100">
                <iframe
                  title="Crown and Roots Clinic Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14016.945898305072!2d77.2185244!3d28.5670845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2697858c973%3A0xe54e6347fb7e6515!2sSouth%20Extension%20II%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>

                {/* Map Overlay info slot */}
                <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-lg border border-slate-100 shadow text-[10px] text-slate-700 font-medium flex items-center gap-1.5">
                  <i className="fa-solid fa-map-pin text-rose-500"></i>
                  <span>GPS Navigation Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
