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
                className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between hover:shadow-md hover:border-teal-200 transition-all group"
              >
                <div>
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className={`w-14 h-14 rounded-full ${badgeColorClass} flex items-center justify-center font-bold text-base border-2 border-white shadow-md flex-shrink-0`}>
                        {initials}
                      </div>
                      <img
                        src={doc.image}
                        alt={doc.name}
                        className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-slate-900 text-base group-hover:text-teal-600 transition-colors truncate">
                        {doc.name}
                      </h4>
                      <p className="text-xs text-slate-500 truncate">{doc.degree} • {doc.specialization}</p>
                      <p className="text-[10px] text-teal-600 font-semibold uppercase tracking-wider mt-0.5">
                        {doc.experience}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 mt-4 leading-relaxed line-clamp-2">
                    {doc.bio}
                  </p>

                  <div className="mt-3.5 pt-3 border-t border-slate-100 space-y-1.5">
                    {doc.achievements.slice(0, 2).map((ach, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                        <i className="fa-solid fa-circle-check text-teal-500 text-[10px] flex-shrink-0"></i>
                        <span className="truncate">{ach}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex gap-2">
                  <button
                    id={`book-with-${doc.id}`}
                    onClick={() => onBookWithDoctor(doc.name)}
                    className="flex-1 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs shadow-sm transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <i className="fa-solid fa-calendar-check text-xs"></i>
                    <span>Consult {doc.name.split(' ')[1]}</span>
                  </button>
                  <button
                    id={`view-full-bio-${doc.id}`}
                    onClick={() => setSelectedDoctor(doc)}
                    className="px-3 py-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-600 text-xs font-semibold transition-colors cursor-pointer"
                  >
                    Bio
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

            <div className="flex items-center gap-4 mb-5">
              <img
                src={selectedDoctor.image}
                alt={selectedDoctor.name}
                className="w-20 h-20 rounded-2xl object-cover border-2 border-teal-500 shadow-md"
              />
              <div>
                <h3 className="text-xl font-extrabold text-slate-900">
                  {selectedDoctor.name}
                </h3>
                <p className="text-teal-600 font-bold text-xs uppercase tracking-wide">
                  {selectedDoctor.specialization}
                </p>
                <p className="text-slate-500 text-xs font-medium">
                  {selectedDoctor.degree}
                </p>
                <span className="inline-block mt-1 bg-slate-900 text-teal-300 text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                  {selectedDoctor.experience}
                </span>
              </div>
            </div>

            <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
              <p>{selectedDoctor.bio}</p>

              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200">
                <h4 className="font-bold text-xs text-slate-900 uppercase tracking-wider mb-2">
                  Clinical Expertise & Certifications
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  {selectedDoctor.achievements.map((ach, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <i className="fa-solid fa-shield-check text-teal-600 mt-0.5"></i>
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Drive Link Placeholder reference */}
              <div className="bg-teal-50/70 rounded-xl p-3 border border-teal-200 text-xs text-teal-900 flex items-center justify-between">
                <div>
                  <span className="font-bold block text-[11px] uppercase tracking-wider">
                    Drive Photo Asset Link:
                  </span>
                  <code className="text-[11px] text-teal-800 break-all font-mono">
                    {selectedDoctor.driveLink}
                  </code>
                </div>
                <i className="fa-brands fa-google-drive text-teal-600 text-xl ml-2 flex-shrink-0"></i>
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
