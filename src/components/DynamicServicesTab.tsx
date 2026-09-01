import React, { useState, useEffect } from 'react';
import { CLINIC_DATA, DentalService } from '../data/clinicData';

interface DynamicServicesTabProps {
  initialServiceId?: string;
  onBookService: (serviceTitle: string) => void;
}

export const DynamicServicesTab: React.FC<DynamicServicesTabProps> = ({
  initialServiceId,
  onBookService,
}) => {
  const services = CLINIC_DATA.services;
  const [selectedService, setSelectedService] = useState<DentalService>(
    services.find((s) => s.id === initialServiceId) || services[0]
  );

  useEffect(() => {
    if (initialServiceId) {
      const found = services.find((s) => s.id === initialServiceId);
      if (found) setSelectedService(found);
    }
  }, [initialServiceId, services]);

  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10">
        {/* Page Header */}
        <div className="mb-8">
          <span className="text-[10px] font-bold text-teal-600 uppercase tracking-widest block mb-1">
            Clinical Departments
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Our Dental Treatments & Procedures
          </h1>
          <p className="text-slate-500 text-xs sm:text-sm mt-1">
            Select any dental specialty below to inspect protocols, technology, duration, and pain-free safety standards.
          </p>
        </div>

        {/* Horizontal / Grid Service Selector Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
          {services.map((service) => {
            const isSelected = selectedService.id === service.id;
            return (
              <button
                key={service.id}
                id={`service-select-btn-${service.id}`}
                onClick={() => setSelectedService(service)}
                className={`p-3.5 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? 'bg-teal-600 text-white border-teal-600 shadow-md shadow-teal-600/20'
                    : 'bg-white text-slate-800 border-slate-100 hover:border-teal-200 hover:shadow-sm'
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center mb-3 ${
                    isSelected
                      ? 'bg-white/20 text-white'
                      : 'bg-teal-50 text-teal-600'
                  }`}
                >
                  <i className={`${service.iconClass} text-base`}></i>
                </div>
                <div>
                  <h2 className="font-bold text-xs leading-snug">
                    {service.title}
                  </h2>
                  <span
                    className={`text-[10px] font-semibold block mt-0.5 ${
                      isSelected ? 'text-teal-100' : 'text-slate-400'
                    }`}
                  >
                    {service.badge}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Detail Deep-Dive Card: Left Technical Explanation, Right Graphic & CTA */}
        <div className="bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Side: Technical & Clinical Breakdown */}
            <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
              <div>
                {/* Header Tag & Title */}
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="bg-teal-50 text-teal-700 text-[11px] font-bold px-2.5 py-0.5 rounded-full border border-teal-200">
                    {selectedService.badge}
                  </span>
                  <span className="bg-slate-100 text-slate-600 text-[11px] font-semibold px-2.5 py-0.5 rounded-full">
                    <i className="fa-regular fa-clock mr-1 text-teal-600"></i>
                    {selectedService.estimatedTime}
                  </span>
                  <span className="bg-emerald-50 text-emerald-700 text-[11px] font-semibold px-2.5 py-0.5 rounded-full border border-emerald-100">
                    {selectedService.painLevel}
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                  {selectedService.title}
                </h2>
                <p className="text-teal-600 font-semibold text-xs sm:text-sm mt-0.5">
                  {selectedService.subtitle}
                </p>

                {/* Main Technical Explanation */}
                <div className="mt-4 text-slate-600 text-xs sm:text-sm leading-relaxed space-y-3">
                  <p>{selectedService.fullDesc}</p>
                </div>

                {/* Key Benefits Grid */}
                <div className="mt-6">
                  <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2.5">
                    Key Advantages & Clinical Outcomes
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedService.keyBenefits.map((benefit, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100 text-xs text-slate-700"
                      >
                        <i className="fa-solid fa-circle-check text-teal-600 mt-0.5 text-xs flex-shrink-0"></i>
                        <span className="font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Step-by-Step Procedure Workflow */}
                <div className="mt-6">
                  <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2.5">
                    Standard Procedural Protocol
                  </h3>
                  <div className="space-y-2">
                    {selectedService.procedureSteps.map((step, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 text-xs text-slate-600"
                      >
                        <span className="w-5 h-5 rounded-full bg-teal-600 text-white font-bold text-[10px] flex items-center justify-center flex-shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <span className="leading-snug">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Consultation / Pricing Banner */}
              <div className="pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">
                    Estimate
                  </span>
                  <p className="text-base font-bold text-slate-900">
                    {selectedService.priceRange}
                  </p>
                </div>
                <button
                  id="dynamic-service-book-cta"
                  onClick={() => onBookService(selectedService.title)}
                  className="px-6 py-2.5 rounded-xl font-bold text-xs text-white bg-teal-600 hover:bg-teal-700 transition-colors shadow-md shadow-teal-600/20 flex items-center gap-2 cursor-pointer"
                >
                  <i className="fa-solid fa-calendar-check text-xs"></i>
                  <span>Book for {selectedService.title}</span>
                </button>
              </div>
            </div>

            {/* Right Side: Dedicated Visual & Reassurance */}
            <div className="lg:col-span-5 bg-slate-900 text-white p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
              <div className="relative z-10 space-y-5">
                <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-xl h-56 sm:h-64">
                  <img
                    src={selectedService.image}
                    alt={selectedService.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="bg-teal-400 text-slate-950 font-bold text-[10px] px-2 py-0.5 rounded uppercase">
                      Specialist Certified
                    </span>
                    <h3 className="text-white font-bold text-base mt-1">
                      {selectedService.title}
                    </h3>
                  </div>
                </div>

                {/* Patient Reassurance */}
                <div className="bg-slate-800/80 rounded-2xl p-4 border border-slate-700/60 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-teal-500/20 text-teal-400 flex items-center justify-center text-sm flex-shrink-0">
                      <i className="fa-solid fa-heart-pulse"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-xs text-slate-100">
                        Zero Pain Guarantee
                      </h4>
                      <p className="text-[11px] text-slate-400">
                        Computerized micro-anesthesia ensures supreme comfort.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-2 border-t border-slate-700/60">
                    <div className="w-8 h-8 rounded-lg bg-teal-500/20 text-teal-400 flex items-center justify-center text-sm flex-shrink-0">
                      <i className="fa-solid fa-shield-virus"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-xs text-slate-100">
                        Sterile Single-Use Toolkits
                      </h4>
                      <p className="text-[11px] text-slate-400">
                        Class-B vacuum autoclaved barrier packs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Call / Booking Box */}
              <div className="relative z-10 mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <p className="text-[10px] text-slate-400 font-medium">
                    Questions about this procedure?
                  </p>
                  <p className="text-xs font-bold text-teal-400">
                    {CLINIC_DATA.phone}
                  </p>
                </div>
                <a
                  href={`tel:${CLINIC_DATA.phoneRaw}`}
                  className="px-4 py-2 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-colors"
                >
                  <i className="fa-solid fa-phone text-xs"></i>
                  <span>Call Reception</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
