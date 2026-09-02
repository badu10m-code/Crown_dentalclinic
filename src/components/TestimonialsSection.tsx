import React, { useEffect, useRef, useState } from 'react';
import { CLINIC_DATA } from '../data/clinicData';

export const TestimonialsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            setAnimationKey((prev) => prev + 1);
          } else {
            setIsVisible(false);
          }
        });
      },
      {
        threshold: 0.15, // Triggers when entering view upon scrolling
      }
    );

    const el = sectionRef.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="patient-testimonials-section"
      className="py-16 bg-slate-900 text-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-teal-400 text-xs font-extrabold uppercase tracking-wider bg-teal-950/60 px-3 py-1 rounded-full border border-teal-800/60">
            Patient Testimonials
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-3">
            Smiles Transformed, Fears Relieved
          </h2>
          <p className="text-slate-400 text-sm mt-1">
            Read genuine feedback from our patients across Delhi NCR.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CLINIC_DATA.testimonials.map((t, idx) => (
            <div
              key={idx}
              id={`testimonial-card-${idx}`}
              className="bg-slate-800/80 hover:bg-slate-800 p-6 rounded-3xl border border-slate-700/80 hover:border-teal-500/40 shadow-lg flex flex-col justify-between transition-all duration-300 group"
            >
              <div>
                {/* 5 Stars pop up one by one across all 3 testimonial cards */}
                <div
                  key={`${animationKey}-${idx}`}
                  className="flex items-center gap-1.5 text-amber-400 text-base mb-3.5 h-6"
                >
                  {[...Array(t.rating)].map((_, i) => (
                    <span
                      key={i}
                      className={`inline-block ${
                        isVisible ? 'animate-star-pop' : 'opacity-0 scale-0'
                      }`}
                      style={{
                        animationDelay: isVisible ? `${i * 130}ms` : '0ms',
                      }}
                    >
                      <i className="fa-solid fa-star text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.45)]"></i>
                    </span>
                  ))}
                  <span
                    className={`ml-2 text-[11px] font-bold text-amber-300 bg-amber-500/15 px-2 py-0.5 rounded-md border border-amber-500/30 transition-opacity duration-500 ${
                      isVisible ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{
                      transitionDelay: isVisible ? `${t.rating * 130 + 100}ms` : '0ms',
                    }}
                  >
                    5.0 ★
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                  "{t.text}"
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-700/60 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-sm text-white group-hover:text-teal-300 transition-colors">
                    {t.name}
                  </h4>
                  <p className="text-[11px] text-teal-400 font-semibold">
                    {t.treatment}
                  </p>
                </div>
                <span className="text-[11px] text-slate-500 font-medium">
                  {t.city}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
