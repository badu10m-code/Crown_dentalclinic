import React, { useState } from 'react';
import { CLINIC_DATA, Doctor } from '../data/clinicData';

interface DoctorsPortfolioProps {
  onBookWithDoctor: (doctorName: string) => void;
}

export const DoctorsPortfolio: React.FC<DoctorsPortfolioProps> = ({
  onBookWithDoctor,
}) => {
  const doctors = CLINIC_DATA.doctors;
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);

  return (
    <section className="py-12 bg-slate-50 relative overflow-hidden" id="doctors-team-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-[10px] font-bold text-teal-600 uppercase tracking-widest block mb-1">
              Specialist Dental Team
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Meet Our Specialist Doctors
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              Certified MDS Specialists with decades of clinical mastery and painless protocols.
            </p>
          </div>
        </div>

        {/* Doctors Grid / Row with Sleek Interface Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {doctors.map((doc: Doctor) => {
            const initials = doc.name
              .replace('Dr. ', '')
              .split(' ')
              .map((n) => n[0])
              .join('');
            
            const badgeColorClass =
              doc.id === 'dr-rahul'
                ? 'bg-teal-100 text-teal-600'
                : doc.id === 'dr-priya'
                ? 'bg-cyan-100 text-cyan-600'
                : 'bg-emerald-100 text-emerald-600';

            return (
                <div
                  key={doc.id}
                  id={`doctor-card-${doc.id}`}
                  onClick={() => setSelectedDoctor(doc)}
                  className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200/90 flex flex-col justify-between cursor-pointer transition-all duration-300 ease-out transform-gpu hover:-translate-y-3 hover:scale-[1.04] hover:shadow-2xl hover:shadow-teal-600/20 hover:border-teal-400 hover:ring-4 hover:ring-teal-400/20 active:scale-[1.02] active:-translate-y-1.5 group"
                >
                  <div>
                    <div className="flex items-center gap-4">
                      <div className="relative w-18 h-18 sm:w-20 sm:h-20 flex-shrink-0">
                        <img
                          src={doc.image}
                          alt={doc.name}
                          referrerPolicy="no-referrer"
                          className="w-18 h-18 sm:w-20 sm:h-20 rounded-2xl object-cover object-top border-2 border-white shadow-md bg-teal-50 transition-all duration-300 ease-out group-hover:scale-110 group-hover:shadow-lg group-hover:ring-2 group-hover:ring-teal-500"
                          onError={(e) => {
                            // Fallback to alternative drive direct export if needed
                            const target = e.currentTarget;
                            const fileId = doc.driveLink.match(/\/d\/([a-zA-Z0-9_-]+)/)?.[1];
                            if (fileId && !target.src.includes('uc?export=view')) {
                              target.src = `https://drive.google.com/uc?export=view&id=${fileId}`;
                            }
                          }}
                        />
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-teal-600 text-white flex items-center justify-center text-[10px] shadow group-hover:scale-110 group-hover:bg-teal-500 transition-all">
                          <i className="fa-solid fa-user-doctor"></i>
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-slate-900 text-base sm:text-lg group-hover:text-teal-600 transition-colors truncate">
                          {doc.name}
                        </h4>
                        <p className="text-xs text-slate-500 truncate font-medium">{doc.degree} • {doc.specialization}</p>
                        <p className="text-[10px] text-teal-600 font-bold uppercase tracking-wider mt-1 flex items-center gap-1">
                          <i className="fa-solid fa-award text-xs"></i>
                          <span>{doc.experience}</span>
                        </p>
                      </div>
                    </div>

                    <p className="text-xs text-slate-600 mt-4 leading-relaxed line-clamp-3">
                      {doc.bio}
                    </p>

                    <div className="mt-4 pt-3.5 border-t border-slate-100 space-y-1.5">
                      {doc.achievements.slice(0, 2).map((ach, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                          <i className="fa-solid fa-circle-check text-teal-500 text-[10px] flex-shrink-0"></i>
                          <span className="truncate">{ach}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 pt-3.5 border-t border-slate-100 flex gap-2">
                    <button
                      id={`book-with-${doc.id}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        onBookWithDoctor(doc.name);
                      }}
                      className="flex-1 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs shadow-sm transition-all duration-200 cursor-pointer flex items-center justify-center gap-1.5 hover:shadow-teal-600/30 hover:scale-[1.02]"
                    >
                      <i className="fa-solid fa-calendar-check text-xs"></i>
                      <span>Consult {doc.name.split(' ')[1]}</span>
                    </button>
                    <button
                      id={`view-full-bio-${doc.id}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedDoctor(doc);
                      }}
                      className="px-3 py-2.5 rounded-xl bg-slate-100 hover:bg-teal-50 hover:text-teal-700 text-slate-700 text-xs font-bold transition-colors cursor-pointer flex items-center gap-1"
                    >
                      <span>Bio</span>
                      <i className="fa-solid fa-chevron-right text-[10px]"></i>
                    </button>
                  </div>
                </div>
            );
          })}
        </div>
      </div>

      {/* Doctor Modal for Full Details & Drive Link */}
      {selectedDoctor && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative max-h-[90vh] overflow-y-auto">
            <button
              id="close-doctor-modal-btn"
              onClick={() => setSelectedDoctor(null)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors"
            >
              <i className="fa-solid fa-xmark text-lg"></i>
            </button>

            {/* Doctor Header with Large Portrait */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 mb-6 pb-6 border-b border-slate-100 text-center sm:text-left">
              <div className="relative flex-shrink-0 group/img">
                <img
                  src={selectedDoctor.image}
                  alt={selectedDoctor.name}
                  referrerPolicy="no-referrer"
                  className="w-32 h-32 sm:w-40 sm:h-40 rounded-3xl object-cover object-top border-4 border-teal-500/25 shadow-xl bg-teal-50 ring-4 ring-teal-500/10"
                  onError={(e) => {
                    const target = e.currentTarget;
                    const fileId = selectedDoctor.driveLink.match(/\/d\/([a-zA-Z0-9_-]+)/)?.[1];
                    if (fileId && !target.src.includes('uc?export=view')) {
                      target.src = `https://drive.google.com/uc?export=view&id=${fileId}`;
                    }
                  }}
                />
                <div className="absolute -bottom-2 -right-2 px-3 py-1 rounded-full bg-teal-600 text-white flex items-center gap-1.5 text-xs font-bold shadow-md border-2 border-white">
                  <i className="fa-solid fa-user-doctor text-[11px]"></i>
                  <span>Specialist</span>
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <div className="inline-block bg-teal-50 text-teal-700 text-xs font-bold px-3 py-1 rounded-full mb-1.5 border border-teal-200/70">
                  {selectedDoctor.specialization}
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                  {selectedDoctor.name}
                </h3>
                <p className="text-slate-600 text-sm font-semibold mt-0.5">
                  {selectedDoctor.degree}
                </p>

                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mt-3">
                  <span className="bg-slate-900 text-teal-300 text-xs font-bold px-3 py-1 rounded-full shadow-sm flex items-center gap-1.5">
                    <i className="fa-solid fa-award text-teal-400 text-xs"></i>
                    <span>{selectedDoctor.experience}</span>
                  </span>
                  <span className="bg-emerald-50 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full border border-emerald-200 flex items-center gap-1">
                    <i className="fa-solid fa-circle-check text-emerald-500 text-xs"></i>
                    <span>Verified MDS Doctor</span>
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
              <div>
                <h4 className="font-bold text-xs text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <i className="fa-solid fa-align-left text-teal-600"></i>
                  <span>About Doctor</span>
                </h4>
                <p className="text-slate-600 leading-relaxed text-sm bg-slate-50/70 rounded-2xl p-4 border border-slate-100">
                  {selectedDoctor.bio}
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200">
                <h4 className="font-bold text-xs text-slate-900 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                  <i className="fa-solid fa-shield-halved text-teal-600"></i>
                  <span>Clinical Expertise & Certifications</span>
                </h4>
                <ul className="space-y-2 text-xs text-slate-600">
                  {selectedDoctor.achievements.map((ach, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <i className="fa-solid fa-circle-check text-teal-600 mt-0.5 text-xs flex-shrink-0"></i>
                      <span className="leading-snug">{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 flex gap-3">
              <button
                id="modal-book-consult-btn"
                onClick={() => {
                  const name = selectedDoctor.name;
                  setSelectedDoctor(null);
                  onBookWithDoctor(name);
                }}
                className="flex-1 py-3 rounded-xl font-bold text-sm text-white bg-teal-600 hover:bg-teal-700 transition-colors shadow-md flex items-center justify-center gap-2"
              >
                <i className="fa-solid fa-calendar-check"></i>
                <span>Book Direct Appointment</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
