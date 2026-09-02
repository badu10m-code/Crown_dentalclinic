import React, { useState } from 'react';
import { CLINIC_DATA } from '../data/clinicData';

interface AboutUsTabProps {
  onBookAppointment: () => void;
}

export const AboutUsTab: React.FC<AboutUsTabProps> = ({ onBookAppointment }) => {
  const [selectedBranchIdx, setSelectedBranchIdx] = useState(0);
  const activeBranch = CLINIC_DATA.branches[selectedBranchIdx] || CLINIC_DATA.branches[0];

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
              Locations & Google Maps
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
              {CLINIC_DATA.branches.map((b, idx) => {
                const isSelected = selectedBranchIdx === idx;
                return (
                  <div
                    key={b.id || idx}
                    id={`branch-card-${b.id || idx}`}
                    onClick={() => setSelectedBranchIdx(idx)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-teal-50/50 border-teal-500 shadow-md shadow-teal-500/10 ring-1 ring-teal-500/20'
                        : 'bg-slate-50 border-slate-100 hover:border-teal-200'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2 text-teal-700 font-bold text-sm">
                        <i className="fa-solid fa-location-dot text-xs"></i>
                        <h3>{b.name}</h3>
                      </div>
                      {isSelected && (
                        <span className="text-[10px] font-bold bg-teal-600 text-white px-2 py-0.5 rounded-full flex items-center gap-1">
                          <i className="fa-solid fa-map-pin text-[8px]"></i>
                          Active Map
                        </span>
                      )}
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
                        onClick={(e) => e.stopPropagation()}
                        className="text-xs font-bold text-teal-600 hover:text-teal-700 flex items-center gap-1 hover:underline"
                      >
                        <span>Directions</span>
                        <i className="fa-solid fa-diamond-turn-right text-[10px]"></i>
                      </a>
                    </div>
                  </div>
                );
              })}

              {/* Consultation prompt */}
              <div className="p-3.5 rounded-2xl bg-teal-50/70 border border-teal-100 text-center">
                <p className="text-xs text-teal-900 font-semibold mb-2">
                  Need assistance finding our entrance?
                </p>
                <button
                  id="book-priority-appointment-btn"
                  onClick={onBookAppointment}
                  className="w-full py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold transition-colors shadow-md shadow-teal-600/20 cursor-pointer"
                >
                  Book Priority Appointment
                </button>
              </div>
            </div>

            {/* Google Maps Iframe Container */}
            <div className="lg:col-span-7">
              {/* Branch switcher tabs on top of map */}
              <div className="flex items-center gap-2 mb-3 bg-slate-100 p-1.5 rounded-xl border border-slate-200/80">
                {CLINIC_DATA.branches.map((b, idx) => {
                  const isSelected = selectedBranchIdx === idx;
                  return (
                    <button
                      key={b.id || idx}
                      id={`map-tab-${b.id || idx}`}
                      onClick={() => setSelectedBranchIdx(idx)}
                      className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                        isSelected
                          ? 'bg-white text-teal-700 shadow-sm border border-slate-200/60'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      <i className="fa-solid fa-map-location-dot text-[11px] text-teal-600"></i>
                      <span className="truncate">{b.name.replace(' Branch', '')}</span>
                    </button>
                  );
                })}
              </div>

              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-sm h-96 bg-slate-100">
                <iframe
                  id={`google-map-iframe-${activeBranch.id || selectedBranchIdx}`}
                  title={`${activeBranch.name} Location`}
                  src={activeBranch.embedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  className="w-full h-full"
                ></iframe>

                {/* Map Overlay info slot */}
                <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-200 shadow text-[10px] text-slate-700 font-medium flex items-center gap-2">
                  <i className="fa-solid fa-map-pin text-rose-500"></i>
                  <span className="font-semibold">{activeBranch.name}</span>
                  <span className="text-slate-400">•</span>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      activeBranch.mapQuery
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-600 hover:underline font-bold"
                  >
                    Open in Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

