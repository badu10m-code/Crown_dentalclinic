import React, { useState, useEffect, useRef } from 'react';
import { CLINIC_DATA } from '../data/clinicData';

export const InteriorAndInstagram: React.FC = () => {
  const interiors = CLINIC_DATA.interiorGallery;
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Video autoplay, loop & mute state
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  // Scroll detection via IntersectionObserver: autoplays when scrolled into view, loops continuously
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            setHasStarted(true);
          } else {
            setIsInView(false);
          }
        });
      },
      {
        threshold: 0.25, // Starts playing when 25% of the video card enters the viewport
      }
    );

    const el = videoContainerRef.current;
    if (el) {
      observer.observe(el);
    }

    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  // Control YouTube player pause/resume based on scroll viewport
  useEffect(() => {
    if (!iframeRef.current || !iframeRef.current.contentWindow) return;
    try {
      if (isInView) {
        iframeRef.current.contentWindow.postMessage(
          JSON.stringify({ event: 'command', func: 'playVideo', args: [] }),
          '*'
        );
      } else if (hasStarted) {
        iframeRef.current.contentWindow.postMessage(
          JSON.stringify({ event: 'command', func: 'pauseVideo', args: [] }),
          '*'
        );
      }
    } catch {
      // Ignore postMessage origin restrictions
    }
  }, [isInView, hasStarted]);

  // Audio mute toggle handler
  const toggleMute = () => {
    const nextMute = !isMuted;
    setIsMuted(nextMute);
    if (iframeRef.current && iframeRef.current.contentWindow) {
      try {
        iframeRef.current.contentWindow.postMessage(
          JSON.stringify({
            event: 'command',
            func: nextMute ? 'mute' : 'unMute',
            args: [],
          }),
          '*'
        );
        if (!nextMute) {
          iframeRef.current.contentWindow.postMessage(
            JSON.stringify({
              event: 'command',
              func: 'setVolume',
              args: [100],
            }),
            '*'
          );
        }
      } catch {
        // Ignore
      }
    }
  };

  const videoId = 'YlF_fm5UPNE';
  const embedUrl = hasStarted
    ? `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=${
        isMuted ? '1' : '0'
      }&loop=1&playlist=${videoId}&controls=0&modestbranding=1&rel=0&playsinline=1&enablejsapi=1&iv_load_policy=3&fs=0`
    : '';

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

          {/* Right: Autoplaying Transformation Reel Container */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-[370px] bg-white border border-slate-200/90 rounded-3xl p-4 sm:p-5 shadow-sm hover:shadow-md transition-shadow">
              {/* Header without YouTube logo, channel name, or 'Shorts' text */}
              <div className="flex items-center justify-between mb-3.5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-teal-600 text-white flex items-center justify-center text-xs shadow-sm shadow-teal-600/30">
                    <i className="fa-solid fa-circle-play text-sm"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-xs sm:text-sm text-slate-900">
                      Patient Transformation Reel
                    </h3>
                    <p className="text-[10px] text-slate-400 font-medium">
                      Crown & Roots Dental Clinic
                    </p>
                  </div>
                </div>

                {/* Sound control toggle button */}
                <button
                  id="reel-audio-toggle-btn"
                  onClick={toggleMute}
                  className="px-2.5 py-1 rounded-xl bg-slate-100 hover:bg-teal-50 text-slate-700 hover:text-teal-700 text-xs font-semibold transition-colors flex items-center gap-1.5 cursor-pointer border border-slate-200/80"
                  title={isMuted ? 'Click to Unmute' : 'Click to Mute'}
                >
                  <i className={`fa-solid ${isMuted ? 'fa-volume-xmark text-slate-400' : 'fa-volume-high text-teal-600'}`}></i>
                  <span className="text-[10px]">{isMuted ? 'Tap for Sound' : 'Sound On'}</span>
                </button>
              </div>

              {/* Responsive Video Reel Frame (Autoplays on scroll and loops repeatedly) */}
              <div
                ref={videoContainerRef}
                id="patient-transformation-reel-container"
                className="relative w-full max-w-[370px] h-[540px] sm:h-[620px] lg:h-[658px] mx-auto rounded-2xl overflow-hidden bg-black shadow-inner border border-slate-200"
              >
                {/* Top mask overlay to cleanly conceal any YouTube channel header/avatar */}
                <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black/90 via-black/40 to-transparent pointer-events-none z-10"></div>

                {/* On-Video Sound Toggle Icon */}
                <div className="absolute bottom-4 right-4 z-20">
                  <button
                    id="reel-overlay-sound-toggle"
                    onClick={toggleMute}
                    aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                    className="w-10 h-10 rounded-full bg-slate-950/80 hover:bg-slate-900 text-white text-sm font-semibold backdrop-blur-md border border-white/25 shadow-lg flex items-center justify-center transition-transform active:scale-95 cursor-pointer"
                  >
                    <i className={`fa-solid ${isMuted ? 'fa-volume-xmark text-rose-400' : 'fa-volume-high text-emerald-400'}`}></i>
                  </button>
                </div>

                {hasStarted ? (
                  <iframe
                    ref={iframeRef}
                    src={embedUrl}
                    title="Patient Smile Transformation Reel"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-[calc(100%+88px)] -mt-[44px] border-0 rounded-2xl scale-[1.04] transform-gpu pointer-events-auto"
                  ></iframe>
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-slate-400 gap-3 p-4 text-center">
                    <i className="fa-solid fa-circle-play text-5xl text-teal-500 animate-pulse"></i>
                  </div>
                )}
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
