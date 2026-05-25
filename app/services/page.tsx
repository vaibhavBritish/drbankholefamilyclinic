import { Stethoscope, Baby, Activity, Pill, HeartPulse, Video, ArrowRight, ClipboardCheck, ShieldCheck, CheckCircle2, MessageSquareQuote } from 'lucide-react';
import Link from 'next/link';
import { FadeIn, StaggerContainer, StaggerItem, SlideInLeft } from '@/components/Animations';

export default function Services() {
  const services = [
    {
      icon: <Stethoscope size={40} className="text-clinic-gold" />,
      title: "General Practice & Preventative Care",
      desc: "Comprehensive routine check-ups, preventive care, and health screenings tailored for individuals of all ages. We focus on maintaining your overall health and preventing future illnesses before they start.",
      details: [
        "Annual Physical Exams",
        "Cholesterol & Blood Pressure Screening",
        "Immunizations & Flu Shots",
        "Dietary & Nutritional Counseling",
        "Preventative Health Plans"
      ]
    },
    {
      icon: <Baby size={40} className="text-clinic-gold" />,
      title: "Pediatric & Adolescent Care",
      desc: "Specialized, gentle care for infants, children, and adolescents. From immunizations to developmental screenings, we provide a welcoming, fear-free environment for your little ones.",
      details: [
        "Newborn & Infant Exams",
        "Childhood Immunizations",
        "School & Sports Physicals",
        "Asthma & Allergy Management",
        "Developmental Screenings"
      ]
    },
    {
      icon: <HeartPulse size={40} className="text-clinic-gold" />,
      title: "Women's Health",
      desc: "Expert comprehensive care tailored specifically for women, including routine exams, family planning, prenatal consultations, and specialized preventative screenings.",
      details: [
        "Well-Woman Exams & Pap Smears",
        "Breast Exam Screenings",
        "Family Planning & Contraception",
        "Menopause Management",
        "Osteoporosis Screening"
      ]
    },
    {
      icon: <Activity size={40} className="text-clinic-gold" />,
      title: "Chronic Disease Management",
      desc: "Ongoing, expert management of chronic conditions to help you maintain a high quality of life. We partner with you to create sustainable, long-term care plans.",
      details: [
        "Diabetes Type 1 & 2 Management",
        "Hypertension (High Blood Pressure)",
        "Thyroid Disorders",
        "Heart Disease Monitoring",
        "Arthritis & Joint Care"
      ]
    },
    {
      icon: <Pill size={40} className="text-clinic-gold" />,
      title: "Minor Procedures & Urgent Care",
      desc: "Safe, efficient, and cost-effective in-office treatments for minor injuries, avoiding the need for an expensive trip to the emergency room.",
      details: [
        "Laceration Repair & Stitches",
        "Skin Biopsies & Mole Removal",
        "Joint Injections",
        "Wart & Skin Tag Removal",
        "Incision & Drainage of Abscesses"
      ]
    },
    {
      icon: <Video size={40} className="text-clinic-gold" />,
      title: "Telehealth Virtual Consultations",
      desc: "Convenient and secure virtual consultations from the comfort of your home. Perfect for follow-ups, minor illnesses, and reviewing lab results.",
      details: [
        "Secure Video Appointments",
        "Prescription Refills",
        "Lab Result Reviews",
        "Mental Health Consultations",
        "Minor Illness Triage"
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-clinic-bg dark:bg-zinc-950 overflow-hidden">
      <section className="bg-clinic-green pt-32 pb-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20 z-0"></div>
        <FadeIn className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-clinic-gold">Our Medical Services</h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200 leading-relaxed">
            From pediatrics to geriatrics, we offer a full spectrum of healthcare services designed to keep your entire family healthy and thriving at every stage of life.
          </p>
        </FadeIn>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, i) => (
              <StaggerItem key={i} className="bg-white dark:bg-zinc-900 p-10 rounded-3xl border border-gray-100 dark:border-zinc-800 shadow-lg hover:shadow-2xl transition-all duration-300 group flex flex-col h-full">
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-20 h-20 bg-clinic-green/10 dark:bg-zinc-800 rounded-2xl flex items-center justify-center shrink-0 transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-foreground leading-tight">{service.title}</h3>
                </div>
                
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8 flex-grow">
                  {service.desc}
                </p>

                <div className="bg-clinic-bg dark:bg-zinc-950 p-6 rounded-2xl mt-auto border border-gray-50 dark:border-zinc-800/50">
                  <h4 className="font-bold text-clinic-green dark:text-clinic-gold mb-4 uppercase tracking-wide text-sm">Key Treatments & Offerings</h4>
                  <ul className="space-y-3">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                        <CheckCircle2 size={20} className="text-clinic-green dark:text-clinic-gold shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Patient Process Section */}
      <section className="py-24 bg-clinic-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-clinic-gold">What to Expect</h2>
            <p className="text-xl max-w-2xl mx-auto text-gray-200">
              We've streamlined our clinical process to ensure your visit is as smooth and stress-free as possible.
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <StaggerItem className="text-center">
              <div className="w-24 h-24 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-6 border-2 border-clinic-gold text-clinic-gold hover:bg-clinic-gold hover:text-white transition-colors duration-300">
                <ClipboardCheck size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-4">1. Easy Registration</h3>
              <p className="text-gray-200">Book online or call us. Fill out your forms digitally before you arrive to save time in the waiting room.</p>
            </StaggerItem>
            
            <StaggerItem className="text-center">
              <div className="w-24 h-24 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-6 border-2 border-clinic-gold text-clinic-gold hover:bg-clinic-gold hover:text-white transition-colors duration-300">
                <Stethoscope size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-4">2. Comprehensive Exam</h3>
              <p className="text-gray-200">Meet with our medical team for a thorough evaluation where we listen to all your concerns without rushing.</p>
            </StaggerItem>

            <StaggerItem className="text-center">
              <div className="w-24 h-24 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-6 border-2 border-clinic-gold text-clinic-gold hover:bg-clinic-gold hover:text-white transition-colors duration-300">
                <ShieldCheck size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-4">3. Personalized Plan</h3>
              <p className="text-gray-200">Receive a tailored treatment and wellness plan, with clear instructions and immediate scheduling for follow-ups.</p>
            </StaggerItem>
          </StaggerContainer>

          <FadeIn delay={0.4} className="mt-16 text-center">
            <a href="https://www.tebra.com/care/practice/bankole-family-clinic-pllc-988143" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-clinic-gold hover:bg-yellow-600 text-white px-10 py-5 rounded-full font-bold text-xl transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
              Book an Appointment <ArrowRight size={24} />
            </a>
          </FadeIn>
        </div>
      </section>

      {/* Services Testimonial */}
      <section className="py-24 bg-white dark:bg-zinc-900 border-t border-gray-100 dark:border-zinc-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SlideInLeft>
            <MessageSquareQuote size={64} className="mx-auto text-clinic-green/20 mb-8" />
            <p className="text-2xl md:text-3xl font-light italic text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              "The comprehensive care my family receives here is unmatched. They handled my chronic condition management beautifully while also taking care of my daughter's sports physicals."
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-clinic-gold rounded-full flex items-center justify-center font-bold text-clinic-green text-xl">
                J
              </div>
              <div className="text-left">
                <span className="font-bold block text-foreground">Jessica T.</span>
                <span className="text-sm text-clinic-green dark:text-clinic-gold font-semibold">Patient for 4 years</span>
              </div>
            </div>
          </SlideInLeft>
        </div>
      </section>
    </div>
  );
}
