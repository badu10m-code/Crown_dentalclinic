import React, { useState, useEffect } from 'react';
import { CLINIC_DATA } from '../data/clinicData';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onBookClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onBookClick,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: 'fa-solid fa-house' },
    { id: 'services', label: 'Services', icon: 'fa-solid fa-tooth' },
    { id: 'about', label: 'About Us', icon: 'fa-solid fa-circle-info' },
    { id: 'faq', label: 'FAQ', icon: 'fa-solid fa-circle-question' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Notification & Contact Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800 hidden sm:block">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-3">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 text-teal-400 font-medium">
              <i className="fa-solid fa-shield-halved"></i>
              Highest Rated CGHS Empanelled Dental Clinic in Delhi NCR
            </span>
            <span className="hidden md:flex items-center gap-2 text-slate-400">
              <i className="fa-regular fa-clock text-teal-400"></i>
              {CLINIC_DATA.timings}
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a
              href={`tel:${CLINIC_DATA.phoneRaw}`}
              className="flex items-center gap-1.5 hover:text-teal-400 transition-colors"
            >
              <i className="fa-solid fa-phone text-teal-400"></i>
              <span>{CLINIC_DATA.phone}</span>
            </a>
            <a
              href={CLINIC_DATA.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors text-emerald-400 font-medium"
            >
              <i className="fa-brands fa-whatsapp text-emerald-400"></i>
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200 py-3.5'
            : 'bg-white border-b border-slate-200 py-4 shadow-xs'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10 flex justify-between items-center">
          {/* Logo & Clinic Branding */}
          <button
            id="brand-logo-btn"
            onClick={() => {
              setActiveTab('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 text-left group focus:outline-none"
          >
            <div className="w-10 h-10 bg-teal-600 rounded-xl flex items-center justify-center text-white shadow-md shadow-teal-600/20 group-hover:scale-105 transition-transform">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="text-xl font-bold tracking-tight text-slate-900">
                  Crown & Roots <span className="text-teal-600 font-extrabold">Dental</span>
                </span>
              </div>
              <p className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">
                Dental Clinic & Implant Centre
              </p>
            </div>
          </button>

          {/* Desktop Navigation Tabs */}
          <div className="hidden md:flex items-center gap-8 font-medium text-sm text-slate-500">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-tab-${item.id}`}
                  onClick={() => {
                    setActiveTab(item.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`transition-colors py-1 cursor-pointer ${
                    isActive
                      ? 'text-teal-600 font-bold border-b-2 border-teal-600'
                      : 'hover:text-teal-600'
                  }`}
                >
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Action Header Button: Sleek Interface Pill */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              id="header-book-appointment-btn"
              onClick={onBookClick}
              className="bg-teal-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-lg shadow-teal-600/20 hover:scale-105 active:scale-95 transition-transform animate-pulse"
            >
              Book Appointment
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              id="mobile-book-btn"
              onClick={onBookClick}
              className="bg-teal-600 text-white px-4 py-1.5 rounded-full text-xs font-semibold shadow-md shadow-teal-600/20"
            >
              Book
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              <i
                className={`fa-solid ${
                  isMobileMenuOpen ? 'fa-xmark' : 'fa-bars'
                } text-xl`}
              ></i>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-slate-100 bg-white px-6 pt-3 pb-5 space-y-2 shadow-xl">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`mobile-nav-${item.id}`}
                  onClick={() => {
                    setActiveTab(item.id);
                    setIsMobileMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-teal-50 text-teal-600 font-bold border border-teal-100'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <i className="fa-solid fa-chevron-right text-xs text-teal-600"></i>}
                </button>
              );
            })}
            <div className="pt-2">
              <button
                id="mobile-menu-book-btn"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onBookClick();
                }}
                className="w-full bg-teal-600 text-white py-3 rounded-xl font-bold uppercase tracking-wider hover:bg-teal-700 shadow-lg shadow-teal-600/20 text-xs"
              >
                Book Appointment
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
