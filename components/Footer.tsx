import Link from 'next/link';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-clinic-green text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand & Intro */}
          <div>
            <Image 
              src="/images/logo.png" 
              alt="Bankole Family Clinic Logo" 
              width={200} 
              height={48} 
              className="h-10 w-auto object-contain mb-6 filter brightness-0 invert" 
            />
            <p className="text-gray-300 leading-relaxed mb-6">
              Providing compassionate, comprehensive, and high-quality healthcare for your entire family in Denton and surrounding areas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4 border-b border-clinic-green-light pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-300 hover:text-clinic-gold transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-clinic-gold transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-clinic-gold transition-colors">Our Services</Link></li>
              <li><Link href="/gallery" className="text-gray-300 hover:text-clinic-gold transition-colors">Gallery</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-clinic-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4 border-b border-clinic-green-light pb-2 inline-block">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-clinic-gold flex-shrink-0 mt-1" size={20} />
                <a 
                  href="https://maps.google.com/?q=Denton,+TX" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors leading-tight"
                >
                  Denton, TX (Serving a 20-mile radius)
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-clinic-gold flex-shrink-0" size={20} />
                <a href="tel:+19402393715" className="text-gray-300 hover:text-white transition-colors">
                  (940) 239-3715
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-clinic-gold flex-shrink-0" size={20} />
                <a href="mailto:bankolefamilyclinic@gmail.com" className="text-gray-300 hover:text-white transition-colors break-all">
                  bankolefamilyclinic@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-xl font-semibold mb-4 border-b border-clinic-green-light pb-2 inline-block">Opening Hours</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex justify-between items-center">
                <span>Mon - Fri:</span>
                <span>8:00 AM - 5:00 PM</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Saturday:</span>
                <span>9:00 AM - 1:00 PM</span>
              </li>
              <li className="flex justify-between items-center text-clinic-gold">
                <span>Sunday:</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-clinic-green-light pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Bankole Family Clinic. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="text-gray-400 text-sm hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-400 text-sm hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
