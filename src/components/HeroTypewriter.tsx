import React, { useState, useEffect } from 'react';
import { CLINIC_DATA } from '../data/clinicData';

interface HeroTypewriterProps {
  onBookAppointment: () => void;
  onExploreServices: () => void;
}

export const HeroTypewriter: React.FC<HeroTypewriterProps> = ({
  onBookAppointment,
  onExploreServices,
}) => {
  const words = CLINIC_DATA.animatedPhrases; // ["Best Dental Care", "Expert Dentists", "Pain-free Treatments", "Advanced Dental Technology"]
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);

  useEffect(() => {
    const currentFullWord = words[currentWordIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing forward
        setDisplayedText(currentFullWord.substring(0, displayedText.length + 1));
        setTypingSpeed(90);

        if (displayedText === currentFullWord) {
          // Pause at end of word
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting backward
        setDisplayedText(currentFullWord.substring(0, displayedText.length - 1));
        setTypingSpeed(45);

        if (displayedText === '') {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
          setTypingSpeed(200);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentWordIndex, typingSpeed, words]);

  return (
    <section className="relative w-full overflow-hidden bg-slate-50 py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10">
        {/* Main Sleek Hero Card */}
        <div className="relative rounded-3xl overflow-hidden bg-slate-900 p-8 sm:p-12 lg:p-16 shadow-2xl flex items-center min-h-[380px] sm:min-h-[440px]">
          {/* Background Image with Sleek Gradient Overlay */}
          <div
            className="absolute inset-0 opacity-40 bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80')",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>

          {/* Hero Content */}
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-teal-400 font-bold tracking-wider uppercase text-xs sm:text-sm mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-teal-400"></span>
              Premium Dental Care
            </h2>
            
            <h1 className="text-white text-3xl sm:text-5xl font-bold leading-tight mb-4 tracking-tight">
              We Promise To Make You Smile With{' '}
              <span className="text-teal-400 italic font-serif">Confidence</span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed">
              Providing the{' '}
              <span className="text-white font-mono border-r-2 border-teal-400 pr-1.5 font-bold">
                {displayedText}
              </span>{' '}
              experience you deserve.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                id="hero-book-now-btn"
                onClick={onBookAppointment}
                className="bg-teal-600 text-white px-7 py-3.5 rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-teal-700 shadow-lg shadow-teal-600/30 transition-all cursor-pointer active:scale-95"
              >
                <i className="fa-solid fa-calendar-check text-base"></i>
                <span>Book Instant Consultation</span>
              </button>

              <button
                id="hero-explore-services-btn"
                onClick={onExploreServices}
                className="bg-white text-slate-900 px-6 py-3.5 rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-teal-50 transition-colors shadow cursor-pointer"
              >
                <span>Explore Treatments</span>
                <i className="fa-solid fa-arrow-right text-xs text-teal-600"></i>
              </button>
            </div>

            {/* Micro Highlights */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-6 text-xs text-slate-300 font-medium">
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-circle-check text-teal-400"></i>
                <span>Zero-Wait Priority Appointments</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-circle-check text-teal-400"></i>
                <span>CGHS Empanelled Clinic</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-circle-check text-teal-400"></i>
                <span>100% Sterile Protocol</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
