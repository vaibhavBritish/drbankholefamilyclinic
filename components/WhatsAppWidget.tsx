'use client';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppWidget() {
  const phoneNumber = "19402393715"; // Assuming US country code +1, using provided number 9402393715
  const message = "Hello Bankole Family Clinic, I would like to book an appointment.";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center group"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle size={28} />
      <span className="absolute right-14 bg-white text-gray-800 text-sm py-1 px-3 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        Chat with us!
      </span>
    </a>
  );
}
