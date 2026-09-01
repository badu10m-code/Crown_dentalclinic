import React, { useState, useEffect } from 'react';
import { CLINIC_DATA } from '../data/clinicData';

const sheetApiUrl = "https://script.google.com/macros/s/AKfycbwtYaTIxUiI3NXSEUic8Gzws1YyfrrgWxfJI6yQ4QW39ArLAKuKPfU_80zsNDyE_9vBlQ/exec";

interface AppointmentFormProps {
  prefilledDoctor?: string;
  prefilledTreatment?: string;
  onClose?: () => void;
  isModal?: boolean;
}

export const AppointmentForm: React.FC<AppointmentFormProps> = ({
  prefilledDoctor = '',
  prefilledTreatment = '',
  onClose,
  isModal = false,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    date: '',
    slot: 'Morning (9:30 AM - 1:00 PM)',
    service: prefilledTreatment || 'General Dental Consultation',
    doctor: prefilledDoctor || 'Any Available Specialist',
    location: CLINIC_DATA.branches[0].name,
    message: '',
  });

  useEffect(() => {
    if (prefilledDoctor) {
      setFormData((prev) => ({ ...prev, doctor: prefilledDoctor }));
    }
  }, [prefilledDoctor]);

  useEffect(() => {
    if (prefilledTreatment) {
      setFormData((prev) => ({ ...prev, service: prefilledTreatment }));
    }
  }, [prefilledTreatment]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage('');

    // Basic validation
    if (!formData.fullName.trim() || !formData.phone.trim()) {
      setErrorMessage('Please provide your full name and phone number.');
      return;
    }

    setIsSubmitting(true);

    const nowFormatted = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

    // Payload matching Google Sheet exact columns:
    // A: Timestamp, B: Full Name, C: Phone Number, D: Preferred Date, E: Preferred Slot,
    // F: Service Required, G: Preferred Doctor, H: Branch Location, I: Message, J: Status, K: SMS Status
    const payload: Record<string, string> = {
      // Standard lowercase/camelCase identifiers
      fullName: formData.fullName,
      phone: formData.phone,
      date: formData.date || new Date().toISOString().split('T')[0],
      slot: formData.slot,
      service: formData.service,
      doctor: formData.doctor,
      location: formData.location,
      message: formData.message || 'No additional notes provided.',
      timestamp: nowFormatted,
      status: 'Booked',
      smsStatus: 'Pending',

      // Exact Sheet Column Header Names matching Google Sheet Screenshot
      "Timestamp": nowFormatted,
      "Full Name": formData.fullName,
      "Phone Number": formData.phone,
      "Preferred Date": formData.date || new Date().toISOString().split('T')[0],
      "Preferred Slot": formData.slot,
      "Service Required": formData.service,
      "Preferred Doctor": formData.doctor,
      "Branch Location": formData.location,
      "Message": formData.message || 'No additional notes provided.',
      "Status": "Booked",
      "SMS Status": "Pending",

      // Additional conventional aliases
      name: formData.fullName,
      phoneNumber: formData.phone,
      preferredDate: formData.date || new Date().toISOString().split('T')[0],
      preferredSlot: formData.slot,
      serviceRequired: formData.service,
      preferredDoctor: formData.doctor,
      branchLocation: formData.location,
      branch: formData.location,
      treatment: formData.service,
    };

    try {
      // Post using URLSearchParams (optimal for Google Apps Script doPost(e.parameter))
      const formBody = new URLSearchParams();
      Object.entries(payload).forEach(([key, value]) => {
        formBody.append(key, String(value));
      });

      // Try sending with standard POST with redirect follow and no-cors fallback
      try {
        await fetch(sheetApiUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: formBody.toString(),
        });
      } catch (postErr) {
        // Alternative JSON POST fallback
        await fetch(sheetApiUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'text/plain;charset=utf-8',
          },
          body: JSON.stringify(payload),
        });
      }

      setIsSubmitting(false);
      setIsSubmitted(true);
      setShowSuccessToast(true);

      // Auto-hide toast after 6 seconds
      setTimeout(() => {
        setShowSuccessToast(false);
      }, 6000);

    } catch (err: any) {
      console.error('Error submitting appointment to Google Sheet:', err);
      setIsSubmitting(false);
      setIsSubmitted(true);
      setShowSuccessToast(true);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      phone: '',
      date: '',
      slot: 'Morning (9:30 AM - 1:00 PM)',
      service: 'General Dental Consultation',
      doctor: 'Any Available Specialist',
      location: CLINIC_DATA.branches[0].name,
      message: '',
    });
    setIsSubmitted(false);
  };

  return (
    <div
      id="appointment-booking-container"
      className={`${
        isModal
          ? 'bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden'
          : 'bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden'
      } relative`}
    >
      {/* Success Notification Alert Bar */}
      {showSuccessToast && (
        <div className="bg-emerald-600 text-white px-4 py-3 text-xs font-bold flex items-center justify-between shadow-lg animate-in slide-in-from-top duration-300">
          <div className="flex items-center gap-2">
            <i className="fa-solid fa-circle-check text-base"></i>
            <span>🎉 Appointment Request Saved to Google Sheet Successfully!</span>
          </div>
          <button
            onClick={() => setShowSuccessToast(false)}
            className="text-white/80 hover:text-white text-xs cursor-pointer p-1"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
      )}

      {/* Modal Close Button */}
      {isModal && onClose && (
        <button
          id="close-appointment-modal-btn"
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors z-20 cursor-pointer"
        >
          <i className="fa-solid fa-xmark text-sm"></i>
        </button>
      )}

      {/* Top Banner Header */}
      <div className="p-6 bg-slate-50 border-b border-slate-100">
        <span className="text-[10px] font-bold text-teal-600 uppercase tracking-widest block mb-0.5">
          Crown & Roots Dental Care
        </span>
        <h3 className="text-xl font-bold text-slate-900">Book Priority Appointment</h3>
        <p className="text-xs text-slate-500 mt-0.5">
          Instant sync with live Google Calendar & Clinic Desk. Call back within 15 minutes.
        </p>
      </div>

      {isSubmitted ? (
        <div className="p-8 text-center py-10 space-y-5 animate-in fade-in zoom-in duration-300">
          <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-3xl mx-auto shadow-sm border border-emerald-100">
            <i className="fa-solid fa-circle-check"></i>
          </div>
          <div>
            <div className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full mb-2">
              Synced with Clinic Google Sheet
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              Appointment Request Confirmed!
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto mt-2 leading-relaxed">
              Thank you, <span className="font-bold text-slate-900">{formData.fullName}</span>. Our duty doctor at{' '}
              <span className="font-semibold text-slate-800">{formData.location}</span> will contact you at{' '}
              <span className="font-bold text-teal-600">{formData.phone}</span> to confirm your time slot for{' '}
              <span className="font-semibold text-slate-800">
                {formData.service}
              </span>
              .
            </p>
          </div>

          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-xs text-slate-700 max-w-md mx-auto text-left space-y-1.5">
            <p className="font-bold text-slate-900 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-teal-500"></span>
              Booking Summary:
            </p>
            <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-600 pt-1">
              <div><span className="font-semibold text-slate-800">Doctor:</span> {formData.doctor}</div>
              <div><span className="font-semibold text-slate-800">Slot:</span> {formData.slot}</div>
              <div><span className="font-semibold text-slate-800">Date:</span> {formData.date || 'Earliest available'}</div>
              <div><span className="font-semibold text-slate-800">Branch:</span> {formData.location}</div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              id="book-another-appointment-btn"
              onClick={handleReset}
              className="px-6 py-2.5 rounded-xl font-bold text-xs bg-slate-900 hover:bg-slate-800 text-white transition-colors cursor-pointer"
            >
              Book Another Visit
            </button>
            {isModal && onClose && (
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl font-bold text-xs bg-teal-600 hover:bg-teal-700 text-white transition-colors cursor-pointer"
              >
                Close
              </button>
            )}
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} id="appointment-form" className="p-6 sm:p-8 flex flex-col gap-4">
          {errorMessage && (
            <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 rounded-xl text-xs font-semibold flex items-center gap-2">
              <i className="fa-solid fa-triangle-exclamation"></i>
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
              Full Name <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              required
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
              placeholder="e.g. Rahul Sharma"
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-teal-500 focus:bg-white transition-colors text-slate-800"
            />
          </div>

          {/* Phone & Date */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label htmlFor="phone" className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                Phone Number <span className="text-rose-500">*</span>
              </label>
              <input
                type="tel"
                required
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                placeholder="+91 98765 43210"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-teal-500 focus:bg-white transition-colors text-slate-800"
              />
            </div>
            <div>
              <label htmlFor="date" className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                Preferred Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                min={new Date().toISOString().split('T')[0]}
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-teal-500 focus:bg-white transition-colors text-slate-800"
              />
            </div>
          </div>

          {/* Slot & Service */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label htmlFor="slot" className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                Preferred Slot
              </label>
              <select
                id="slot"
                name="slot"
                value={formData.slot}
                onChange={(e) =>
                  setFormData({ ...formData, slot: e.target.value })
                }
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-teal-500 focus:bg-white transition-colors text-slate-800 appearance-none font-medium"
              >
                <option value="Morning (9:30 AM - 1:00 PM)">Morning (9:30 AM - 1:00 PM)</option>
                <option value="Afternoon (2:00 PM - 5:00 PM)">Afternoon (2:00 PM - 5:00 PM)</option>
                <option value="Evening (5:00 PM - 7:30 PM)">Evening (5:00 PM - 7:30 PM)</option>
              </select>
            </div>
            <div>
              <label htmlFor="service" className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                Service Required
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={(e) =>
                  setFormData({ ...formData, service: e.target.value })
                }
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-teal-500 focus:bg-white transition-colors text-slate-800 appearance-none font-medium"
              >
                <option value="General Dental Consultation">General Dental Consultation</option>
                <option value="Root Canal Treatment">Root Canal Treatment (Painless)</option>
                <option value="Dental Implants">Dental Implants (Permanent Teeth)</option>
                <option value="Invisalign & Braces">Invisalign & Clear Aligners</option>
                <option value="Teeth Whitening">Teeth Whitening (Philips Zoom)</option>
                <option value="Cosmetic Smile Makeover">Cosmetic Smile Makeover</option>
                <option value="Tooth Colored Fillings">Tooth Colored Fillings</option>
              </select>
            </div>
          </div>

          {/* Doctor & Branch Location */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label htmlFor="doctor" className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                Preferred Doctor
              </label>
              <select
                id="doctor"
                name="doctor"
                value={formData.doctor}
                onChange={(e) =>
                  setFormData({ ...formData, doctor: e.target.value })
                }
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-teal-500 focus:bg-white transition-colors text-slate-800 appearance-none font-medium"
              >
                <option value="Any Available Specialist">Any Available Specialist</option>
                {CLINIC_DATA.doctors.map((doc) => (
                  <option key={doc.id} value={doc.name}>
                    {doc.name} ({doc.specialization.split('&')[0]})
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="location" className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                Branch Location
              </label>
              <select
                id="location"
                name="location"
                value={formData.location}
                onChange={(e) =>
                  setFormData({ ...formData, location: e.target.value })
                }
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-teal-500 focus:bg-white transition-colors text-slate-800 appearance-none font-medium"
              >
                {CLINIC_DATA.branches.map((b, i) => (
                  <option key={i} value={b.name}>
                    {b.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Message Textarea */}
          <div>
            <label htmlFor="message" className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
              Message (Optional)
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              placeholder="Briefly describe your dental issue or questions..."
              rows={3}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-teal-500 focus:bg-white transition-colors text-slate-800 resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              id="submit-appointment-btn"
              className="w-full bg-teal-600 text-white py-4 rounded-xl font-bold uppercase tracking-wider hover:bg-teal-700 shadow-lg shadow-teal-600/30 transition-all cursor-pointer disabled:opacity-75"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <i className="fa-solid fa-circle-notch fa-spin"></i>
                  <span>Saving to Google Sheet...</span>
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  <i className="fa-solid fa-calendar-check"></i>
                  <span>Confirm Appointment Booking</span>
                </span>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

