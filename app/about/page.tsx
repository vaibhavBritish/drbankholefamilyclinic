import Image from 'next/image';
import { Award, Heart, Users, GraduationCap, Building2, Stethoscope, HandHeart, CalendarHeart } from 'lucide-react';
import { FadeIn, SlideInLeft, SlideInRight, StaggerContainer, StaggerItem } from '@/components/Animations';

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-clinic-bg dark:bg-zinc-950 overflow-hidden">
      {/* Header */}
      <section className="bg-clinic-green pt-32 pb-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/about.png')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-clinic-green to-transparent"></div>
        <FadeIn className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-clinic-gold">Our Story</h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200 leading-relaxed">
            Founded on the principles of empathy, excellence, and community. Learn about the people behind your care at Bankole Family Clinic.
          </p>
        </FadeIn>
      </section>

      {/* Main Content - Mission & Vision */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SlideInLeft className="relative h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl group">
              <Image 
                src="/images/about.png" 
                alt="Doctor talking with patient" 
                fill 
                className="object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <h3 className="text-2xl font-bold mb-2">Patient-Centered Care</h3>
                <p className="text-gray-200">We take the time to understand your unique health journey.</p>
              </div>
            </SlideInLeft>

            <SlideInRight>
              <h2 className="text-sm font-bold text-clinic-green dark:text-clinic-gold uppercase tracking-widest mb-2">Who We Are</h2>
              <h3 className="text-3xl font-bold text-foreground mb-8">Our Mission & Vision</h3>
              <div className="prose prose-lg dark:prose-invert mb-10 text-gray-600 dark:text-gray-300">
                <p>
                  At <strong>Bankole Family Clinic</strong>, our mission is to deliver comprehensive, patient-centered healthcare that empowers individuals and families to live healthier, fuller lives. We believe that a strong, trusting doctor-patient relationship is the absolute foundation of good health.
                </p>
                <p>
                  Our vision is to be the premier healthcare provider in Denton and its surrounding 20-mile radius. We strive to be known not just for our medical excellence, but for our compassionate care, our innovative approach to wellness, and our unwavering commitment to the well-being of our diverse community.
                </p>
              </div>

              <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
                <StaggerItem className="flex items-start gap-5 bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-zinc-800">
                  <div className="bg-clinic-green/10 p-4 rounded-xl text-clinic-green dark:text-clinic-gold shrink-0">
                    <Heart size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-foreground mb-2">Compassionate</h4>
                    <p className="text-gray-600 dark:text-gray-400">Care that treats you like family, prioritizing your comfort.</p>
                  </div>
                </StaggerItem>
                
                <StaggerItem className="flex items-start gap-5 bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-zinc-800">
                  <div className="bg-clinic-green/10 p-4 rounded-xl text-clinic-green dark:text-clinic-gold shrink-0">
                    <Award size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-foreground mb-2">Excellence</h4>
                    <p className="text-gray-600 dark:text-gray-400">Adhering strictly to the highest standards of modern medical practice.</p>
                  </div>
                </StaggerItem>
              </StaggerContainer>
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* Community Involvement */}
      <section className="py-24 bg-clinic-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <HandHeart size={48} className="mx-auto text-clinic-gold mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Commitment to Denton</h2>
            <p className="text-xl max-w-3xl mx-auto text-gray-200 leading-relaxed mb-12">
              We believe a healthy community starts outside the clinic walls. Bankole Family Clinic proudly sponsors local youth sports, participates in annual health fairs, and provides complimentary wellness seminars at the Denton Community Center.
            </p>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
             <StaggerItem className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/20">
                <CalendarHeart className="mx-auto text-clinic-gold mb-4" size={32} />
                <h4 className="font-bold text-lg mb-2">Annual Health Fair</h4>
                <p className="text-sm text-gray-300">Providing free screenings to underserved populations every October.</p>
             </StaggerItem>
             <StaggerItem className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/20">
                <Users className="mx-auto text-clinic-gold mb-4" size={32} />
                <h4 className="font-bold text-lg mb-2">Youth Sponsorships</h4>
                <p className="text-sm text-gray-300">Proud sponsors of the Denton Youth Soccer League.</p>
             </StaggerItem>
             <StaggerItem className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/20">
                <GraduationCap className="mx-auto text-clinic-gold mb-4" size={32} />
                <h4 className="font-bold text-lg mb-2">Education Grants</h4>
                <p className="text-sm text-gray-300">Supporting local high school students pursuing pre-med degrees.</p>
             </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Meet the Doctor Section */}
      <section className="py-24 bg-white dark:bg-zinc-900 border-t border-gray-100 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-clinic-green dark:text-clinic-gold uppercase tracking-widest mb-2">Leadership</h2>
            <h3 className="text-4xl font-bold text-foreground mb-6">Meet Dr. Bankole</h3>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Leading our team with over a decade of clinical experience and a deep passion for community health.
            </p>
          </FadeIn>

          <FadeIn delay={0.2} className="bg-clinic-bg dark:bg-zinc-950 rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100 dark:border-zinc-800 flex flex-col md:flex-row gap-12 items-center">
            <div className="w-64 h-64 md:w-80 md:h-80 bg-clinic-green rounded-full flex-shrink-0 relative overflow-hidden border-8 border-white dark:border-zinc-800 shadow-xl">
              <div className="absolute inset-0 flex flex-col items-center justify-center text-clinic-gold">
                <Stethoscope size={64} className="mb-4" />
                <span className="font-bold text-lg text-white">Dr. Bankole</span>
              </div>
            </div>
            
            <div className="flex-1">
              <h4 className="text-3xl font-bold text-foreground mb-2">Dr. Olawale Bankole, MD</h4>
              <p className="text-clinic-green dark:text-clinic-gold font-semibold text-lg mb-6">Chief Medical Officer & Founder</p>
              
              <div className="space-y-4 text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
                <p>
                  Dr. Bankole is a board-certified Family Medicine physician dedicated to providing holistic and preventative care to patients of all ages. With a medical degree from a prestigious institution and years of residency training, he brings a wealth of knowledge to Denton.
                </p>
                <p>
                  His clinical interests include preventative medicine, chronic disease management (such as diabetes and hypertension), and pediatric care. Dr. Bankole believes that educating patients about their health is just as important as prescribing medications.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-zinc-800 rounded-full border border-gray-200 dark:border-zinc-700 font-medium">
                  <GraduationCap size={18} className="text-clinic-green" /> Board Certified
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-zinc-800 rounded-full border border-gray-200 dark:border-zinc-700 font-medium">
                  <Users size={18} className="text-clinic-green" /> 10+ Years Experience
                </span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
