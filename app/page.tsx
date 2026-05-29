import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Star, Shield, Clock, HeartHandshake, MapPin, PhoneCall, Award, BookOpen } from 'lucide-react';
import { FadeIn, SlideInLeft, SlideInRight, StaggerContainer, StaggerItem } from '@/components/Animations';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.png"
            alt="Bankole Family Clinic Reception"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-clinic-green/95 to-clinic-green/60 mix-blend-multiply" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-white">
          <div className="max-w-3xl">
            <FadeIn>
              <div className="inline-block px-4 py-2 bg-clinic-gold/20 backdrop-blur-md border border-clinic-gold/50 rounded-full text-clinic-gold font-semibold mb-6">
                Welcome to Bankole Family Clinic
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-8 tracking-tight">
                Exceptional Healthcare for Your <span className="text-clinic-gold">Entire Family</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-xl md:text-2xl mb-12 text-gray-100 leading-relaxed font-light">
                We provide comprehensive, compassionate, and state-of-the-art medical services tailored to your needs. Proudly serving Denton and the surrounding communities with a patient-first approach.
              </p>
            </FadeIn>
            <FadeIn delay={0.3} className="flex flex-col sm:flex-row gap-12 sm:gap-16 items-start sm:items-center mt-6">
              <a href="https://www.tebra.com/care/practice/bankole-family-clinic-pllc-988143" target="_blank" rel="noopener noreferrer" className="bg-clinic-gold hover:bg-yellow-600 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] transform hover:-translate-y-1 flex items-center justify-center gap-3 w-full sm:w-auto">
                Book an Appointment <ArrowRight size={20} />
              </a>
              <div className="flex items-center gap-4 text-gray-200">
                <PhoneCall size={24} className="text-clinic-gold animate-bounce" />
                <div>
                  <p className="text-sm">Call us for emergencies</p>
                  <p className="font-bold text-lg">(940) 239-3715</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Awards Strip */}
      <section className="bg-clinic-gold py-6 text-clinic-green border-b border-yellow-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="flex flex-col md:flex-row justify-around items-center gap-6">
            <StaggerItem className="flex items-center gap-3 font-bold text-lg">
              <Award size={28} /> Board Certified Physicians
            </StaggerItem>
            <StaggerItem className="flex items-center gap-3 font-bold text-lg">
              <Star size={28} /> Top Rated in Denton County
            </StaggerItem>
            <StaggerItem className="flex items-center gap-3 font-bold text-lg">
              <Shield size={28} /> 10+ Years of Excellence
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-clinic-bg dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-clinic-green dark:text-clinic-gold uppercase tracking-widest mb-2">The Bankole Difference</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Why Patients Choose Us</h3>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              We go beyond standard medical care to ensure every patient feels heard, respected, and treated with the highest standard of medical excellence.
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <StaggerItem className="glass-card dark:bg-zinc-900 p-8 rounded-2xl border-t-4 border-clinic-gold shadow-lg hover:shadow-2xl transition-all duration-300">
              <Shield className="w-12 h-12 text-clinic-gold mb-6" />
              <h4 className="text-2xl font-bold mb-4">Experienced Professionals</h4>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Our board-certified physicians and dedicated nursing staff bring decades of combined experience in family medicine, ensuring you receive the most accurate diagnoses and effective treatments.
              </p>
            </StaggerItem>
            <StaggerItem className="glass-card dark:bg-zinc-900 p-8 rounded-2xl border-t-4 border-clinic-green shadow-lg hover:shadow-2xl transition-all duration-300 transform md:-translate-y-4">
              <HeartHandshake className="w-12 h-12 text-clinic-green mb-6" />
              <h4 className="text-2xl font-bold mb-4">Compassionate Care</h4>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                We treat every patient like family. We take the time to listen to your concerns, answer your questions fully, and develop personalized care plans that respect your preferences.
              </p>
            </StaggerItem>
            <StaggerItem className="glass-card dark:bg-zinc-900 p-8 rounded-2xl border-t-4 border-clinic-gold shadow-lg hover:shadow-2xl transition-all duration-300">
              <Clock className="w-12 h-12 text-clinic-gold mb-6" />
              <h4 className="text-2xl font-bold mb-4">Convenient & Accessible</h4>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                With flexible scheduling, telehealth options, and a central location in Denton, we make it easy for you to get the care you need when you need it most.
              </p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Services Highlight Section */}
      <section className="py-24 bg-white dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold text-clinic-green dark:text-clinic-gold uppercase tracking-widest mb-2">Our Services</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground">Comprehensive Medical Care</h3>
            </div>
            <Link href="/services" className="text-clinic-green dark:text-clinic-gold font-semibold flex items-center gap-2 hover:underline">
              View All Services <ArrowRight size={20} />
            </Link>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "General Practice", desc: "Routine check-ups, physicals, and preventative health screenings to catch issues early." },
              { title: "Pediatric Care", desc: "From newborn exams to adolescent sports physicals, we keep your children healthy." },
              { title: "Women's Health", desc: "Pap smears, family planning, menopause management, and specialized wellness exams." },
              { title: "Chronic Disease Management", desc: "Expert, ongoing care for diabetes, high blood pressure, asthma, and thyroid conditions." },
              { title: "Minor Procedures", desc: "Skin biopsies, joint injections, laceration repairs, and mole removals performed in-office." },
              { title: "Telehealth", desc: "Secure video consultations for follow-ups, prescription refills, and minor urgent care." },
            ].map((service, i) => (
              <StaggerItem key={i} className="bg-clinic-bg dark:bg-zinc-800 p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 border border-gray-100 dark:border-zinc-700">
                <div className="w-12 h-12 bg-clinic-green/10 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="text-clinic-green dark:text-clinic-gold" size={24} />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-3">{service.title}</h4>
                <p className="text-gray-600 dark:text-gray-400">{service.desc}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Insurance and Patient Info */}
      <section className="py-24 bg-clinic-green text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SlideInLeft>
              <h2 className="text-4xl font-bold mb-6">Accepted Insurance & Payment Options</h2>
              <p className="text-lg text-gray-200 mb-8 leading-relaxed">
                We believe that quality healthcare should be accessible. Bankole Family Clinic accepts a wide variety of major insurance plans, including Medicare and Medicaid. We also offer affordable self-pay rates for uninsured patients.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {['AARP', 'Availity', 'Aetna', 'Blue Cross Blue Shield', 'Cigna', 'Health spring', 'Humana', 'Meritain', 'Molina Healthcare Medicaid', 'Molina Healthcare Marketplace', 'Superior Health plan', 'Centene Corporation', 'United Healthcare', 'UMR', 'Well Care', 'WellMed Medical', 'WellPoint', 'Medicare & Medicaid', 'Affordable Self-Pay Options'].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="text-clinic-gold flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-base">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-300 italic">
                *Please call our office to verify your specific insurance network before your appointment.
              </p>
            </SlideInLeft>
            <SlideInRight>
              <div className="bg-white/10 p-10 rounded-3xl border border-white/20 backdrop-blur-md transform hover:scale-105 transition-transform duration-500">
                <h3 className="text-2xl font-bold mb-6 text-clinic-gold">New Patient?</h3>
                <p className="text-gray-200 mb-8">
                  We are currently accepting new patients! Save time by filling out your registration forms online before your first visit.
                </p>
                <div className="space-y-4">
                  <button className="w-full bg-white text-clinic-green font-bold py-4 rounded-xl hover:bg-gray-100 transition-colors">
                    Download Patient Forms (PDF)
                  </button>
                  <a href="https://www.tebra.com/care/practice/bankole-family-clinic-pllc-988143" target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-transparent border-2 border-clinic-gold text-clinic-gold font-bold py-4 rounded-xl hover:bg-clinic-gold hover:text-white transition-colors">
                    Schedule First Visit
                  </a>
                </div>
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* Health News / Resources */}
      <section className="py-24 bg-white dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Health Resources & News</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">Stay informed with the latest updates from our clinic.</p>
          </FadeIn>
          
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Protecting Your Family This Flu Season", date: "Oct 12, 2026", excerpt: "Learn the best preventative measures and when to get your flu shot at our clinic." },
              { title: "Understanding Hypertension: What You Need to Know", date: "Sep 28, 2026", excerpt: "High blood pressure is a silent killer. Discover lifestyle changes that can help lower your numbers." },
              { title: "The Importance of Annual Physicals", date: "Sep 15, 2026", excerpt: "Why seeing your doctor once a year, even when you feel healthy, is crucial for long-term wellness." }
            ].map((article, i) => (
              <StaggerItem key={i} className="bg-clinic-bg dark:bg-zinc-950 rounded-2xl border border-gray-100 dark:border-zinc-800 overflow-hidden group cursor-pointer">
                <div className="h-48 bg-gray-200 dark:bg-zinc-800 relative overflow-hidden">
                   <div className="absolute inset-0 bg-clinic-green/20 group-hover:bg-clinic-green/10 transition-colors z-10"></div>
                   <Image src={i === 0 ? "/images/pediatric_care.png" : i === 1 ? "/images/blood_pressure_check.png" : "/images/doctor_portrait.png"} alt={article.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <p className="text-sm text-clinic-gold font-bold mb-2">{article.date}</p>
                  <h4 className="text-xl font-bold text-foreground mb-3 group-hover:text-clinic-green dark:group-hover:text-clinic-gold transition-colors">{article.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{article.excerpt}</p>
                  <span className="text-clinic-green dark:text-clinic-gold font-semibold flex items-center gap-2">Read More <ArrowRight size={16} /></span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-clinic-bg dark:bg-zinc-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">Find answers to common questions about our clinic and services.</p>
          </FadeIn>
          
          <StaggerContainer className="space-y-6">
            {[
              { q: "Do I need to make an appointment, or do you accept walk-ins?", a: "We strongly recommend making an appointment to minimize your wait time. However, we do accept walk-ins for urgent, non-life-threatening conditions depending on our daily schedule." },
              { q: "What should I bring to my first appointment?", a: "Please bring your photo ID, current insurance card, a list of any medications you are currently taking, and any relevant past medical records." },
              { q: "How do I get my prescription refilled?", a: "You can request a prescription refill during your visit, by calling our office, or through your pharmacy. Please allow 48 hours for refill requests to be processed." },
              { q: "Do you offer telemedicine appointments?", a: "Yes! We offer secure video visits for many common conditions, follow-ups, and consultations. Please call our office to see if a telehealth visit is right for your needs." }
            ].map((faq, i) => (
              <StaggerItem key={i} className="bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-zinc-800 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-bold text-clinic-green dark:text-clinic-gold mb-3">{faq.q}</h4>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{faq.a}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-clinic-green text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-clinic-gold rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-16">
            <h2 className="text-sm font-bold text-clinic-gold uppercase tracking-widest mb-2">Patient Stories</h2>
            <h3 className="text-4xl font-bold mb-6">Trusted by the Denton Community</h3>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Sarah Jenkins", text: "Dr. Bankole and the team are incredibly thorough and compassionate. I always feel heard and well-cared for. They took the time to explain my test results in a way I could actually understand." },
              { name: "Michael Rodriguez", text: "The new clinic is beautiful, and the staff is so welcoming. Highly recommend for anyone looking for a reliable family doctor. The wait times are short, and the care is excellent." },
              { name: "Emily Chen", text: "Getting an appointment was easy, and the care I received was top-notch. They truly prioritize patient health. My entire family now goes to Bankole Family Clinic." }
            ].map((testimonial, i) => (
              <StaggerItem key={i} className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-colors">
                <div className="flex text-clinic-gold mb-6">
                  {[...Array(5)].map((_, j) => <Star key={j} size={18} fill="currentColor" />)}
                </div>
                <p className="text-lg italic mb-8 leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center gap-4 border-t border-white/20 pt-4">
                  <div className="w-12 h-12 bg-clinic-gold rounded-full flex items-center justify-center font-bold text-clinic-green text-xl">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <span className="font-bold block">{testimonial.name}</span>
                    <span className="text-sm text-gray-300">Verified Patient</span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
