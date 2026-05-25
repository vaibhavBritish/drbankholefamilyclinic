import { MapPin, Phone, Mail, Clock, FileText, CreditCard, Activity } from 'lucide-react';
import { FadeIn, SlideInLeft, SlideInRight, StaggerContainer, StaggerItem } from '@/components/Animations';

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen bg-clinic-bg dark:bg-zinc-950 overflow-hidden">
      <section className="bg-clinic-green pt-32 pb-24 text-white">
        <FadeIn className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-clinic-gold">Contact & Booking</h1>
          <p className="text-xl max-w-2xl mx-auto text-gray-200">
            Get in touch with us to schedule an appointment or ask any questions. We look forward to seeing you.
          </p>
        </FadeIn>
      </section>

      <section className="py-24 border-b border-gray-100 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <SlideInLeft className="glass-card dark:bg-zinc-900 p-10 rounded-3xl shadow-xl h-fit">
              <h2 className="text-3xl font-bold text-foreground mb-8">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-zinc-800 text-foreground focus:ring-2 focus:ring-clinic-green outline-none transition-all" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-zinc-800 text-foreground focus:ring-2 focus:ring-clinic-green outline-none transition-all" placeholder="Doe" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                    <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-zinc-800 text-foreground focus:ring-2 focus:ring-clinic-green outline-none transition-all" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                    <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-zinc-800 text-foreground focus:ring-2 focus:ring-clinic-green outline-none transition-all" placeholder="(940) 239-3715" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message / Reason for Appointment</label>
                  <textarea rows={5} className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-zinc-800 text-foreground focus:ring-2 focus:ring-clinic-green outline-none transition-all resize-none" placeholder="How can we help you today?"></textarea>
                </div>

                <button type="button" className="w-full bg-clinic-green hover:bg-clinic-green-light text-white font-bold py-4 rounded-lg transition-colors shadow-lg hover:-translate-y-0.5 transform duration-200">
                  Submit Request
                </button>
              </form>
            </SlideInLeft>

            {/* Contact Information & Map */}
            <SlideInRight className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-8">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-clinic-gold/20 rounded-full flex items-center justify-center flex-shrink-0 text-clinic-green dark:text-clinic-gold group-hover:scale-110 transition-transform">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-foreground">Phone</h4>
                      <p className="text-gray-600 dark:text-gray-400 mt-1">(940) 239-3715</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-clinic-gold/20 rounded-full flex items-center justify-center flex-shrink-0 text-clinic-green dark:text-clinic-gold group-hover:scale-110 transition-transform">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-foreground">Email</h4>
                      <p className="text-gray-600 dark:text-gray-400 mt-1">bankolefamilyclinic@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-clinic-gold/20 rounded-full flex items-center justify-center flex-shrink-0 text-clinic-green dark:text-clinic-gold group-hover:scale-110 transition-transform">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-foreground">Location</h4>
                      <p className="text-gray-600 dark:text-gray-400 mt-1">Denton, TX<br/>Serving Denton and a 20-mile radius</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-clinic-gold/20 rounded-full flex items-center justify-center flex-shrink-0 text-clinic-green dark:text-clinic-gold group-hover:scale-110 transition-transform">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-foreground">Hours</h4>
                      <p className="text-gray-600 dark:text-gray-400 mt-1">
                        Mon - Fri: 8:00 AM - 5:00 PM<br/>
                        Saturday: 9:00 AM - 1:00 PM<br/>
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="w-full h-64 bg-gray-200 dark:bg-zinc-800 rounded-3xl overflow-hidden shadow-inner relative group border border-gray-100 dark:border-zinc-800">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d106815.11197772744!2d-97.23447990172605!3d33.20813959827395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c4c9d57a976a1%3A0xcfd64a0cd89a8523!2sDenton%2C%20TX!5e0!3m2!1sen!2sus!4v1708892552881!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{border:0}} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                ></iframe>
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* What to Bring Section */}
      <section className="py-24 bg-white dark:bg-zinc-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Preparing for Your Visit</h2>
            <p className="text-gray-600 dark:text-gray-400">To ensure a smooth check-in process, please bring the following items to your appointment:</p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StaggerItem className="bg-clinic-bg dark:bg-zinc-800 p-6 rounded-2xl border border-gray-100 dark:border-zinc-700 text-center flex flex-col items-center">
              <FileText size={40} className="text-clinic-green dark:text-clinic-gold mb-4" />
              <h4 className="font-bold text-lg text-foreground mb-2">Photo ID</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">A valid driver's license or state ID card.</p>
            </StaggerItem>
            <StaggerItem className="bg-clinic-bg dark:bg-zinc-800 p-6 rounded-2xl border border-gray-100 dark:border-zinc-700 text-center flex flex-col items-center">
              <CreditCard size={40} className="text-clinic-green dark:text-clinic-gold mb-4" />
              <h4 className="font-bold text-lg text-foreground mb-2">Insurance Card</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Your most recent health insurance card.</p>
            </StaggerItem>
            <StaggerItem className="bg-clinic-bg dark:bg-zinc-800 p-6 rounded-2xl border border-gray-100 dark:border-zinc-700 text-center flex flex-col items-center">
              <Activity size={40} className="text-clinic-green dark:text-clinic-gold mb-4" />
              <h4 className="font-bold text-lg text-foreground mb-2">Medications List</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">A list of your current medications and dosages.</p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
