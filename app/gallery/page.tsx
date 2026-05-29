import Image from 'next/image';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/Animations';

export default function Gallery() {
  const images = [
    { src: "/bankole/bankole-1.jpeg", alt: "Bankole Family Clinic Gallery 1" },
    { src: "/bankole/bankole-2.jpeg", alt: "Bankole Family Clinic Gallery 2" },
    { src: "/bankole/bankole-3.jpeg", alt: "Bankole Family Clinic Gallery 3" },
    { src: "/bankole/bankole-4.jpeg", alt: "Bankole Family Clinic Gallery 4" },
    { src: "/bankole/bankole-5.jpeg", alt: "Bankole Family Clinic Gallery 5" },
    { src: "/bankole/bankole-6.jpeg", alt: "Bankole Family Clinic Gallery 6" },
    { src: "/bankole/bankole-7.jpeg", alt: "Bankole Family Clinic Gallery 7" },
    { src: "/bankole/bankole-8.jpeg", alt: "Bankole Family Clinic Gallery 8" },
    { src: "/bankole/bankole-9.jpeg", alt: "Bankole Family Clinic Gallery 9" },
    { src: "/bankole/bankole-10.jpeg", alt: "Bankole Family Clinic Gallery 10" }
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
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
