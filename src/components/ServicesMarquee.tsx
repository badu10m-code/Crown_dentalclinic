import React from 'react';
import { CLINIC_DATA, DentalService } from '../data/clinicData';

interface ServicesMarqueeProps {
  onSelectService: (serviceId: string) => void;
}

export const ServicesMarquee: React.FC<ServicesMarqueeProps> = ({
  onSelectService,
}) => {
  const services = CLINIC_DATA.services;
  // Duplicate services list for seamless marquee
  const marqueeList = [...services, ...services, ...services];

  return (
    <section className="py-12 bg-white border-y border-slate-100 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10 mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <span className="text-[10px] font-bold text-teal-600 uppercase tracking-widest block mb-1">
            Our Treatments
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Popular Dental Procedures
          </h2>
        </div>
        <button
          id="marquee-view-all-services"
          onClick={() => onSelectService(services[0].id)}
          className="text-xs font-bold text-teal-600 hover:text-teal-700 flex items-center gap-1.5 transition-colors cursor-pointer self-start sm:self-auto"
        >
          <span>View All Services</span>
          <i className="fa-solid fa-arrow-right text-[10px]"></i>
        </button>
      </div>

      {/* Sleek Carousel Track */}
      <div className="relative w-full overflow-hidden mask-fade-edges py-2">
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        <div className="animate-marquee flex gap-4 px-4">
          {marqueeList.map((service: DentalService, index: number) => (
            <div
              key={`${service.id}-${index}`}
              id={`marquee-card-${service.id}-${index}`}
              onClick={() => onSelectService(service.id)}
              className="w-56 sm:w-64 flex-shrink-0 bg-slate-50 hover:bg-white rounded-2xl p-4 border border-slate-100 hover:border-teal-200 hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="h-32 w-full rounded-xl overflow-hidden mb-3 bg-slate-200 relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <span className="absolute top-2 right-2 bg-slate-900/80 text-white text-[10px] font-bold px-2 py-0.5 rounded-md">
                    {service.badge}
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-1">
                  <div className="w-6 h-6 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center text-xs flex-shrink-0">
                    <i className={service.iconClass}></i>
                  </div>
                  <h3 className="font-bold text-sm text-slate-900 group-hover:text-teal-600 transition-colors truncate">
                    {service.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                  {service.shortDesc}
                </p>
              </div>

              <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-[11px] font-semibold text-slate-400">
                  {service.estimatedTime}
                </span>
                <span className="font-bold text-teal-600 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                  Details <i className="fa-solid fa-chevron-right text-[9px]"></i>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sleek Dot Pagination Indicator */}
      <div className="flex items-center justify-center gap-1.5 mt-4">
        <span className="w-2 h-2 rounded-full bg-teal-600"></span>
        <span className="w-2 h-2 rounded-full bg-slate-200"></span>
        <span className="w-2 h-2 rounded-full bg-slate-200"></span>
      </div>
    </section>
  );
};
