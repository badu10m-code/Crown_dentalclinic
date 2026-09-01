import React, { useState } from 'react';
import { CLINIC_DATA } from '../data/clinicData';

export const InteriorAndInstagram: React.FC = () => {
  const interiors = CLINIC_DATA.interiorGallery;
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [instagramCode, setInstagramCode] = useState<string>(
    CLINIC_DATA.instagramEmbedPlaceholder
  );
  const [isPlayingDemoVideo, setIsPlayingDemoVideo] = useState(false);

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

        {/* 2-Column Section: Left Interior Grid, Right Instagram Reel/Video Area */}
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

          {/* Right: Instagram Video / Reels Layout Block */}
          <div className="lg:col-span-5 bg-white border border-slate-100 rounded-3xl p-5 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center text-xs shadow">
                  <i className="fa-brands fa-instagram"></i>
                </div>
                <div>
                  <h3 className="font-bold text-xs text-slate-900">
                    Patient Smile Transformations
                  </h3>
                  <p className="text-[10px] text-slate-400">
                    @crownroots_dental on Instagram
                  </p>
                </div>
              </div>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-teal-600 hover:text-teal-700 flex items-center gap-1"
              >
                Follow <i className="fa-solid fa-arrow-up-right-from-square text-[9px]"></i>
              </a>
            </div>

            {/* Video Player / Mock Reel Stage */}
            <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 aspect-[9/12] max-h-[380px] mx-auto shadow-inner flex flex-col justify-between">
              {isPlayingDemoVideo ? (
                <div className="relative w-full h-full flex items-center justify-center bg-black">
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    src="https://assets.mixkit.co/videos/preview/mixkit-dentist-examining-a-patients-teeth-41584-large.mp4"
                  />
                  <button
                    onClick={() => setIsPlayingDemoVideo(false)}
                    className="absolute top-3 right-3 w-7 h-7 rounded-full bg-slate-900/80 text-white flex items-center justify-center cursor-pointer"
                  >
                    <i className="fa-solid fa-pause text-xs"></i>
                  </button>
                </div>
              ) : (
                <>
                  <img
                    src="https://images.unsplash.com/photo-1571772996211-2f02c9727629?q=80&w=800&auto=format&fit=crop"
                    alt="Dental Transformation Reel"
                    className="absolute inset-0 w-full h-full object-cover opacity-75"
                  />
                  <div className="relative z-10 p-3 flex justify-between items-start">
                    <span className="bg-rose-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                      Patient Reel
                    </span>
                    <span className="bg-black/60 text-white text-[10px] px-2 py-0.5 rounded">
                      0:45
                    </span>
                  </div>

                  {/* Central Play Button */}
                  <div className="relative z-10 flex flex-col items-center justify-center my-auto">
                    <button
                      id="play-instagram-reel-btn"
                      onClick={() => setIsPlayingDemoVideo(true)}
                      className="w-13 h-13 rounded-full bg-white text-rose-600 flex items-center justify-center text-lg shadow-xl hover:scale-105 transition-transform active:scale-95 cursor-pointer"
                    >
                      <i className="fa-solid fa-play ml-1"></i>
                    </button>
                    <p className="text-white text-xs font-bold mt-2 drop-shadow">
                      Watch Smile Reveal
                    </p>
                  </div>

                  {/* Bottom Reel Caption */}
                  <div className="relative z-10 p-3 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent text-white">
                    <p className="text-xs font-bold">
                      Full mouth smile makeover with Dr. Priya Patel ✨
                    </p>
                    <p className="text-[10px] text-slate-300 mt-0.5">
                      #CrownAndRoots #DentalMakeover #PainlessDentistry
                    </p>
                  </div>
                </>
              )}
            </div>

            {/* Instagram Embed Code Slot */}
            <div className="mt-3 p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs">
              <div className="flex items-center justify-between text-slate-400 mb-1">
                <span className="font-semibold text-[10px] uppercase tracking-wider text-slate-500">
                  Instagram Embed Slot:
                </span>
                <span className="text-[10px] text-teal-600 font-bold bg-teal-50 px-1.5 py-0.5 rounded">
                  Active
                </span>
              </div>
              <code className="text-[10px] text-slate-500 font-mono block truncate bg-white p-1 rounded border border-slate-100">
                {instagramCode}
              </code>
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
