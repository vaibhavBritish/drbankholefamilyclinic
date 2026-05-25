import Image from 'next/image';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/Animations';

export default function Gallery() {
  const images = [
    { src: "/images/gallery-1.png", alt: "Clinic Exterior" },
    { src: "/images/pediatric_care.png", alt: "Pediatric Care" },
    { src: "/images/gallery-2.png", alt: "Modern Consultation Room" },
    { src: "/images/modern_lab.png", alt: "State of the Art Medical Lab" },
    { src: "/images/gallery-3.png", alt: "State of the Art Medical Equipment" },
    { src: "/images/doctor_portrait.png", alt: "Our Expert Doctors" },
    { src: "/images/about.png", alt: "Doctor Patient Consultation" },
    { src: "/images/hero.png", alt: "Welcoming Reception Area" }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-clinic-bg dark:bg-zinc-950 overflow-hidden">
      <section className="bg-clinic-green pt-32 pb-24 text-white relative">
        <div className="absolute inset-0 bg-black/10 z-0"></div>
        <FadeIn className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-clinic-gold">Our Gallery</h1>
          <p className="text-xl max-w-2xl mx-auto text-gray-200">
            Take a look inside our modern, state-of-the-art facility designed for your comfort and care.
          </p>
        </FadeIn>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {images.map((img, i) => (
              <StaggerItem key={i} className="break-inside-avoid relative rounded-2xl overflow-hidden group shadow-lg cursor-pointer">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={600}
                  height={400}
                  className="w-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <p className="text-white text-lg font-bold px-4 text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{img.alt}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
