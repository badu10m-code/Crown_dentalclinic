import React, { useState } from 'react';
import { CLINIC_DATA } from '../data/clinicData';

export const InteriorAndInstagram: React.FC = () => {
  const interiors = CLINIC_DATA.interiorGallery;
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-12 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div className="mb-8">
          <span className="text-[10px] font-bold text-teal-600 uppercase tracking-widest block mb-1">
            Clinic Experience
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Our World-Class Facility & Patient Stories
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm mt-1">
            Ultra-clean, sanitized treatment suites designed for supreme comfort and anxiety-free visits.
          </p>
        </div>

        {/* 2-Column Section: Left Interior Grid, Right YouTube Shorts Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: 4 Clinic Interior Blocks */}
          <div className="lg:col-span-7">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <i className="fa-solid fa-hospital text-teal-600"></i>
                Sterilization & Technology Suites
              </h3>
              <span className="text-[11px] text-slate-400 font-medium">
                Click photo to zoom
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {interiors.map((item) => (
                <div
                  key={item.id}
                  id={`interior-gallery-${item.id}`}
                  onClick={() => setSelectedImage(item.image)}
                  className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-100 shadow-sm cursor-pointer hover:shadow-md transition-all duration-300"
                >
                  <div className="h-44 w-full overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90 group-hover:opacity-100"
                    />
                  </div>
                  {/* Overlay Description */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent flex flex-col justify-end p-4 text-white">
                    <span className="text-[10px] font-bold text-teal-300 uppercase tracking-wider bg-teal-950/80 px-2 py-0.5 rounded w-max border border-teal-800/60 mb-1">
                      {item.category}
                    </span>
                    <h4 className="font-bold text-xs text-white">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-slate-300 line-clamp-1 mt-0.5">
                      {item.description}
                    </p>
                  </div>
                  <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-slate-900/80 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <i className="fa-solid fa-magnifying-glass-plus text-xs"></i>
                  </div>
                </div>
              ))}
            </div>

            {/* Sterilization Highlights Bar */}
            <div className="mt-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center flex-shrink-0 text-base shadow-sm">
                <i className="fa-solid fa-shield-virus"></i>
              </div>
              <div>
                <h4 className="font-bold text-xs text-slate-900">
                  Strict 7-Step Hospital Grade Infection Protocol
                </h4>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  100% of dental instruments undergo Class-B vacuum autoclaving, sealed in single-use sterile barrier pouches.
                </p>
              </div>
            </div>
          </div>

          {/* Right: YouTube Shorts Vertical Container (Width ~370px, Height ~658px) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-[370px] bg-white border border-slate-100 rounded-3xl p-4 sm:p-5 shadow-sm">
              <div className="flex items-center justify-between mb-3.5">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-red-600 text-white flex items-center justify-center text-xs shadow">
                    <i className="fa-brands fa-youtube"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-xs text-slate-900">
                      Patient Stories & Shorts
                    </h3>
                    <p className="text-[10px] text-slate-400">
                      Crown & Roots Clinic Experience
                    </p>
                  </div>
                </div>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-red-600 hover:text-red-700 flex items-center gap-1"
                >
                  YouTube <i className="fa-solid fa-arrow-up-right-from-square text-[9px]"></i>
                </a>
              </div>

              {/* Responsive YouTube Shorts Frame (370px x 658px standard vertical ratio) */}
              <div
                id="youtube-shorts-container"
                className="relative w-full max-w-[370px] h-[540px] sm:h-[620px] lg:h-[658px] mx-auto rounded-2xl overflow-hidden bg-black shadow-inner border border-slate-200"
              >
                <iframe
                  src="https://www.youtube.com/embed/YlF_fm5UPNE"
                  title="Crown & Roots Dental Clinic - Patient Story & Smile Makeover"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full border-0 rounded-2xl"
                ></iframe>
              </div>

              <div className="mt-3 px-1 flex items-center justify-between text-[11px] text-slate-500">
                <span className="flex items-center gap-1.5 font-medium text-slate-700">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                  Real Patient Transformation
                </span>
                <span className="text-[10px] bg-red-50 text-red-700 font-semibold px-2 py-0.5 rounded-full border border-red-100">
                  Shorts Video
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[85vh] w-full rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={selectedImage}
              alt="Enlarged view"
              className="w-full h-full object-contain"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
            >
              <i className="fa-solid fa-xmark text-lg"></i>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
