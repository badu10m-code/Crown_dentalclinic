import React, { useState, useRef, useEffect } from 'react';
import { CLINIC_DATA } from '../data/clinicData';

interface StickyActionButtonsProps {
  onOpenAppointmentModal: () => void;
}

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
  options?: string[];
}

export const StickyActionButtons: React.FC<StickyActionButtonsProps> = ({
  onOpenAppointmentModal,
}) => {
  const [isAiChatOpen, setIsAiChatOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-1',
      sender: 'bot',
      text: `Hello! I'm Crown & Roots AI Dental Concierge 🦷. How can I assist you today? You can ask about our painless treatments, root canals, dental implants, Invisalign, doctors, or timings!`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      options: [
        'Is RCT painless here?',
        'Cost of Dental Implants?',
        'Invisalign vs Braces',
        'Book Appointment Now',
      ],
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const chatBottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isAiChatOpen) {
      chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isAiChatOpen, isTyping]);

  const handleSendMessage = (textToSend?: string) => {
    const query = (textToSend || inputMessage).trim();
    if (!query) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputMessage('');
    setIsTyping(true);

    // AI Response Logic based on Clinic Knowledge Base
    setTimeout(() => {
      let botReply = '';
      let nextOptions: string[] | undefined = undefined;

      const lower = query.toLowerCase();

      if (lower.includes('book') || lower.includes('appointment') || lower.includes('schedule') || lower.includes('consult')) {
        botReply = `You can book an immediate consultation with our senior MDS specialists right away! Click the 'Book Appointment' button below or call our clinic at ${CLINIC_DATA.phone}.`;
        nextOptions = ['Open Booking Form', 'Call Reception', 'Clinic Timings'];
      } else if (lower.includes('rct') || lower.includes('root canal') || lower.includes('pain') || lower.includes('hurt')) {
        botReply = `At Crown & Roots, Root Canal Treatment (RCT) is 100% painless! We use computerized rotary endodontics and computerized localized anesthesia. 90% of our cases are finished in a single 45-minute sitting.`;
        nextOptions = ['RCT Cost', 'Book RCT Visit', 'Meet Dr. Aman'];
      } else if (lower.includes('implant') || lower.includes('missing tooth') || lower.includes('teeth replace')) {
        botReply = `We specialize in Swiss & German Titanium / Zirconia Dental Implants with a 98.6% success rate and lifetime warranty. Guided computer surgery ensures zero bone trauma. Costs start from ₹19,999.`;
        nextOptions = ['Book Implant Scan', 'Dr. Aman Verma', 'Check CGHS Panel'];
      } else if (lower.includes('invisalign') || lower.includes('aligner') || lower.includes('braces') || lower.includes('crooked')) {
        botReply = `Dr. Rahul Sharma (MDS Orthodontics) is an authorized Invisalign provider. Using our 3D iTero intraoral scanner, you can see a 3D digital simulation of your new smile before starting!`;
        nextOptions = ['Book 3D iTero Scan', 'How Long Does It Take?'];
      } else if (lower.includes('whiten') || lower.includes('yellow') || lower.includes('stain') || lower.includes('zoom')) {
        botReply = `Our Philips Zoom! WhiteSpeed laser whitening lightens your teeth by up to 8 shades in just 45 minutes with zero enamel damage and anti-sensitivity ACP minerals.`;
        nextOptions = ['Whitening Cost', 'Book Whitening'];
      } else if (lower.includes('timing') || lower.includes('hours') || lower.includes('open') || lower.includes('sunday')) {
        botReply = `Our clinic timings are ${CLINIC_DATA.timings}. We have branches in South Extension II, Delhi and Gurugram. Emergency walk-ins are prioritized!`;
        nextOptions = ['South Ext Address', 'Gurgaon Address', 'Call Reception'];
      } else if (lower.includes('doctor') || lower.includes('specialist') || lower.includes('rahul') || lower.includes('priya') || lower.includes('aman')) {
        botReply = `Our senior team includes Dr. Rahul Sharma (MDS Orthodontics - 10+ yrs), Dr. Priya Patel (BDS Aesthetic Dentist - 8 yrs), and Dr. Aman Verma (MDS Oral Surgeon & Implantologist - 12 yrs).`;
        nextOptions = ['Book with Dr. Rahul', 'Book with Dr. Priya', 'Book with Dr. Aman'];
      } else if (lower.includes('cghs') || lower.includes('insurance') || lower.includes('panel') || lower.includes('cost')) {
        botReply = `Yes, Crown & Roots is empanelled with CGHS and all major health insurance TPAs for cashless and reimbursement support. Treatments are transparently priced.`;
        nextOptions = ['Book Consultation', 'Call Billing Desk'];
      } else {
        botReply = `Thank you for your question! Crown & Roots Dental Clinic offers expert, painless treatments in Root Canals, Implants, Aligners, Smile Makeovers, and Pediatric Care. Would you like to schedule an initial 3D exam with our doctors?`;
        nextOptions = ['Book Appointment', 'Call +91 98765 43210', 'WhatsApp Doctor'];
      }

      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: botReply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        options: nextOptions,
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 600);
  };

  const handleOptionClick = (opt: string) => {
    if (opt === 'Book Appointment Now' || opt === 'Open Booking Form' || opt === 'Book Consultation' || opt.startsWith('Book')) {
      onOpenAppointmentModal();
      setIsAiChatOpen(false);
      return;
    }
    if (opt.includes('Call')) {
      window.location.href = `tel:${CLINIC_DATA.phoneRaw}`;
      return;
    }
    if (opt.includes('WhatsApp')) {
      window.open(CLINIC_DATA.whatsappUrl, '_blank');
      return;
    }
    handleSendMessage(opt);
  };

  return (
    <>
      {/* 3-Way Sticky Action Buttons: Bottom-Right Cluster */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
        {/* Button 3: Gemini AI Assistance */}
        <div className="relative group">
          <button
            id="sticky-ai-assistant-btn"
            onClick={() => setIsAiChatOpen(!isAiChatOpen)}
            className="w-12 h-12 sm:w-13 sm:h-13 rounded-2xl bg-slate-900 text-teal-400 flex items-center justify-center shadow-xl hover:shadow-teal-500/20 hover:scale-105 active:scale-95 transition-all border border-slate-700 cursor-pointer"
            title="Ask AI Dental Assistant"
          >
            <i className="fa-solid fa-wand-magic-sparkles text-lg"></i>
          </button>
          <span className="absolute right-15 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-[11px] font-bold px-3 py-1.5 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg border border-slate-700">
            Ask AI Dental Concierge
          </span>
        </div>

        {/* Button 1: WhatsApp Quick Trigger */}
        <div className="relative group">
          <a
            id="sticky-whatsapp-btn"
            href={CLINIC_DATA.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 sm:w-13 sm:h-13 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center shadow-xl hover:shadow-emerald-600/30 hover:scale-105 active:scale-95 transition-all border border-emerald-500 cursor-pointer"
            title="Chat on WhatsApp (919999999999)"
          >
            <i className="fa-brands fa-whatsapp text-2xl"></i>
          </a>
          <span className="absolute right-15 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-[11px] font-bold px-3 py-1.5 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg border border-slate-700">
            Chat on WhatsApp
          </span>
        </div>

        {/* Button 2: Call Now */}
        <div className="relative group">
          <a
            id="sticky-call-btn"
            href={`tel:${CLINIC_DATA.phoneRaw}`}
            className="w-12 h-12 sm:w-13 sm:h-13 rounded-2xl bg-teal-600 hover:bg-teal-700 text-white flex items-center justify-center shadow-xl hover:shadow-teal-600/30 hover:scale-105 active:scale-95 transition-all border border-teal-500 cursor-pointer"
            title="Call Clinic Reception (+91 98765 43210)"
          >
            <i className="fa-solid fa-phone text-lg"></i>
          </a>
          <span className="absolute right-15 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-[11px] font-bold px-3 py-1.5 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg border border-slate-700">
            Call Reception
          </span>
        </div>
      </div>

      {/* Gemini AI Dental Assistant Chat Modal */}
      {isAiChatOpen && (
        <div
          id="ai-dental-chat-dialog"
          className="fixed bottom-24 right-4 sm:right-6 z-50 w-[92vw] sm:w-96 bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[560px] animate-in slide-in-from-bottom-5 duration-300"
        >
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-slate-900 via-teal-950 to-slate-900 text-white p-4 flex items-center justify-between border-b border-teal-800/40">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-400 to-teal-500 text-slate-950 flex items-center justify-center font-bold text-lg shadow">
                <i className="fa-solid fa-tooth"></i>
              </div>
              <div>
                <h3 className="font-extrabold text-sm flex items-center gap-1.5">
                  <span>Crown & Roots AI Assistant</span>
                  <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
                </h3>
                <p className="text-[11px] text-teal-300 font-medium">
                  24/7 Dental Triage & Procedure Guide
                </p>
              </div>
            </div>
            <button
              id="close-ai-chat-btn"
              onClick={() => setIsAiChatOpen(false)}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-slate-200 flex items-center justify-center transition-colors"
            >
              <i className="fa-solid fa-xmark text-sm"></i>
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-slate-50 text-xs sm:text-sm">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex flex-col ${
                  m.sender === 'user' ? 'items-end' : 'items-start'
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl p-3.5 leading-relaxed shadow-sm ${
                    m.sender === 'user'
                      ? 'bg-teal-600 text-white rounded-br-none'
                      : 'bg-white text-slate-800 border border-slate-200 rounded-bl-none'
                  }`}
                >
                  <p>{m.text}</p>
                </div>
                <span className="text-[10px] text-slate-400 mt-1 px-1">
                  {m.timestamp}
                </span>

                {/* Quick Action Options */}
                {m.options && m.options.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {m.options.map((opt, i) => (
                      <button
                        key={i}
                        onClick={() => handleOptionClick(opt)}
                        className="px-2.5 py-1 rounded-full bg-white border border-teal-300 text-teal-700 hover:bg-teal-50 text-[11px] font-semibold transition-colors shadow-2xs"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-1.5 bg-white p-3 rounded-2xl rounded-bl-none border border-slate-200 w-max">
                <span className="w-1.5 h-1.5 bg-teal-500 rounded-full animate-bounce"></span>
                <span className="w-1.5 h-1.5 bg-teal-500 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-1.5 h-1.5 bg-teal-500 rounded-full animate-bounce [animation-delay:0.4s]"></span>
              </div>
            )}
            <div ref={chatBottomRef} />
          </div>

          {/* Quick Doctor Book CTA inside Chat */}
          <div className="px-3 py-2 bg-teal-50 border-t border-teal-100 flex items-center justify-between text-xs">
            <span className="text-teal-900 font-semibold">
              Ready for a physical checkup?
            </span>
            <button
              onClick={() => {
                setIsAiChatOpen(false);
                onOpenAppointmentModal();
              }}
              className="font-bold text-teal-700 hover:text-teal-800 bg-white px-2.5 py-1 rounded-lg border border-teal-200 shadow-2xs"
            >
              Book Now →
            </button>
          </div>

          {/* Chat Input Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3 bg-white border-t border-slate-200 flex items-center gap-2"
          >
            <input
              type="text"
              id="ai-chat-input"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Type your dental question..."
              className="flex-1 px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-teal-500 focus:outline-none text-xs text-slate-800"
            />
            <button
              type="submit"
              disabled={!inputMessage.trim()}
              id="ai-chat-send-btn"
              className="w-9 h-9 rounded-xl bg-teal-600 hover:bg-teal-700 disabled:opacity-50 text-white flex items-center justify-center transition-colors shadow"
            >
              <i className="fa-solid fa-paper-plane text-xs"></i>
            </button>
          </form>
        </div>
      )}
    </>
  );
};
