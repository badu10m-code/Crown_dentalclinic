import React, { useState } from 'react';
import { CLINIC_DATA } from './data/clinicData';
import { Navbar } from './components/Navbar';
import { HeroTypewriter } from './components/HeroTypewriter';
import { ServicesMarquee } from './components/ServicesMarquee';
import { DoctorsPortfolio } from './components/DoctorsPortfolio';
import { InteriorAndInstagram } from './components/InteriorAndInstagram';
import { DynamicServicesTab } from './components/DynamicServicesTab';
import { AboutUsTab } from './components/AboutUsTab';
import { FaqTab } from './components/FaqTab';
import { AppointmentForm } from './components/AppointmentForm';
import { StickyActionButtons } from './components/StickyActionButtons';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<string>('root-canal');
  const [isApptModalOpen, setIsApptModalOpen] = useState(false);
  const [modalDoctor, setModalDoctor] = useState('');
  const [modalTreatment, setModalTreatment] = useState('');

  const handleOpenAppointmentModal = (doctor = '', treatment = '') => {
    setModalDoctor(doctor);
    setModalTreatment(treatment);
    setIsApptModalOpen(true);
  };

  const handleSelectServiceFromMarquee = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    setActiveTab('services');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBookWithDoctor = (doctorName: string) => {
    handleOpenAppointmentModal(doctorName, '');
  };

  const handleBookService = (serviceTitle: string) => {
    handleOpenAppointmentModal('', serviceTitle);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Navigation Header */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onBookClick={() => handleOpenAppointmentModal()}
      />

      {/* Main Tab Content Display */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <div className="animate-in fade-in duration-300">
            {/* 1. Hero Section with Typewriter Effect */}
            <HeroTypewriter
              onBookAppointment={() => {
                const element = document.getElementById('home-appointment-section');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                } else {
                  handleOpenAppointmentModal();
                }
              }}
              onExploreServices={() => {
                setActiveTab('services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* 2. Three Pillar Value Props */}
            <section className="py-12 bg-white border-b border-slate-200/80">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {CLINIC_DATA.highlights.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-teal-400 hover:shadow-md transition-all flex items-start gap-4"
                    >
                      <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center flex-shrink-0 text-xl">
                        <i className={item.icon}></i>
                      </div>
                      <div>
                        <h3 className="font-extrabold text-base text-slate-900">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 3. Services Infinite Horizontal Sliding Track */}
            <ServicesMarquee onSelectService={handleSelectServiceFromMarquee} />

            {/* 4. Specialist Doctors Portfolio */}
            <DoctorsPortfolio onBookWithDoctor={handleBookWithDoctor} />

            {/* 5. Interior Facility Gallery & Instagram Video Reel */}
            <InteriorAndInstagram />

            {/* 6. Patient Ratings & Testimonials */}
            <section className="py-16 bg-slate-900 text-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                      className="bg-slate-800/80 p-6 rounded-3xl border border-slate-700/80 shadow-lg flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center gap-1 text-amber-400 text-sm mb-3">
                          {[...Array(t.rating)].map((_, i) => (
                            <i key={i} className="fa-solid fa-star"></i>
                          ))}
                        </div>
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                          "{t.text}"
                        </p>
                      </div>
                      <div className="mt-6 pt-4 border-t border-slate-700/60 flex items-center justify-between">
                        <div>
                          <h4 className="font-bold text-sm text-white">
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

            {/* 7. Embedded Appointment Booking Form Section */}
            <section
              id="home-appointment-section"
              className="py-20 bg-slate-100/70 border-t border-slate-200"
            >
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <AppointmentForm isModal={false} />
              </div>
            </section>
          </div>
        )}

        {activeTab === 'services' && (
          <div className="animate-in fade-in duration-300">
            <DynamicServicesTab
              initialServiceId={selectedServiceId}
              onBookService={handleBookService}
            />
          </div>
        )}

        {activeTab === 'about' && (
          <div className="animate-in fade-in duration-300">
            <AboutUsTab
              onBookAppointment={() => handleOpenAppointmentModal()}
            />
          </div>
        )}

        {activeTab === 'faq' && (
          <div className="animate-in fade-in duration-300">
            <FaqTab
              onBookAppointment={() => handleOpenAppointmentModal()}
            />
          </div>
        )}
      </main>

      {/* Sticky 3-Way Action Buttons (WhatsApp, Call, Gemini AI Assistant) */}
      <StickyActionButtons
        onOpenAppointmentModal={() => handleOpenAppointmentModal()}
      />

      {/* Global Footer */}
      <Footer
        setActiveTab={setActiveTab}
        onBookClick={() => handleOpenAppointmentModal()}
      />

      {/* Appointment Modal */}
      {isApptModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative max-w-2xl w-full max-h-[95vh] overflow-y-auto">
            <AppointmentForm
              isModal={true}
              prefilledDoctor={modalDoctor}
              prefilledTreatment={modalTreatment}
              onClose={() => setIsApptModalOpen(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
