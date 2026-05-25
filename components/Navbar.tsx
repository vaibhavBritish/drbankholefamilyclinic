'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 glass-card transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <Image 
                src="/images/logo.png" 
                alt="Bankole Family Clinic Logo" 
                width={250} 
                height={60} 
                className="h-10 md:h-12 w-auto object-contain" 
                priority 
              />
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-foreground hover:text-clinic-gold transition-colors font-medium">Home</Link>
            <Link href="/about" className="text-foreground hover:text-clinic-gold transition-colors font-medium">About</Link>
            <Link href="/services" className="text-foreground hover:text-clinic-gold transition-colors font-medium">Services</Link>
            <Link href="/gallery" className="text-foreground hover:text-clinic-gold transition-colors font-medium">Gallery</Link>
            <Link href="/contact" className="text-foreground hover:text-clinic-gold transition-colors font-medium">Contact</Link>
            
            <a href="https://www.tebra.com/care/practice/bankole-family-clinic-pllc-988143" target="_blank" rel="noopener noreferrer" className="bg-clinic-green hover:bg-clinic-green-light text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              Book Appointment
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-clinic-green focus:outline-none p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass-card border-t border-gray-200 dark:border-gray-800 absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col shadow-xl">
            <Link href="/" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-foreground hover:bg-clinic-green-light hover:text-white transition-colors">Home</Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-foreground hover:bg-clinic-green-light hover:text-white transition-colors">About</Link>
            <Link href="/services" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-foreground hover:bg-clinic-green-light hover:text-white transition-colors">Services</Link>
            <Link href="/gallery" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-foreground hover:bg-clinic-green-light hover:text-white transition-colors">Gallery</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-foreground hover:bg-clinic-green-light hover:text-white transition-colors">Contact</Link>
            <a href="https://www.tebra.com/care/practice/bankole-family-clinic-pllc-988143" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} className="block px-3 py-3 mt-4 text-center rounded-md text-base font-medium bg-clinic-gold text-white hover:bg-yellow-600 transition-colors">
              Book Appointment
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
