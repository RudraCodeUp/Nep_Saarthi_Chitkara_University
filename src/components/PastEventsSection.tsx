import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { GalleryHorizontal } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Custom autoplay plugin for Embla Carousel
const AutoPlayPlugin = (interval = 3000) => {
  let timer: ReturnType<typeof setInterval> | undefined;

  return {
    name: 'autoPlay',
    options: { active: true },
    init: (emblaApi) => {
      // Create autoplay functionality with smoother transitions
      const autoplay = () => {
        timer = setInterval(() => {
          if (emblaApi.canScrollNext()) {
            // Use scrollTo with an option to control the transition animation
            emblaApi.scrollNext({ duration: 1000 });
          } else {
            // Use scrollTo with an option to control the transition animation
            emblaApi.scrollTo(0, true, { duration: 1000 });
          }
        }, interval);
      };

      // Start autoplay
      autoplay();
    },
    destroy: () => {
      // Clean up timer on destroy
      if (timer) clearInterval(timer);
    }
  };
};

const PastEventsSection = () => {
  const events = [
    {
      id: 1,
      title: "Bhartiya Bhasha Utsav",
      date: "March 15, 2024",
      image: "/images/WhatsApp Image 2025-02-24 at 07.24.23_a7b59ea8.jpg",
      description: "Successful transition to our new campus location"
    },
    {
      id: 2,
      title: "Moving Celebration",
      date: "March 16, 2024",
      image: "/images/WhatsApp Image 2025-04-27 at 13.33.21_d705e538.jpg",
      description: "Celebrating our first day in the new campus"
    },
    {
      id: 3,
      title: "New Campus Tour",
      date: "March 17, 2024",
      image: "/images/WhatsApp Image 2025-02-28 at 12.03.35_39d95c95.jpg",
      description: "Guided tour of our new facilities"
    },
    {
      id: 4,
      title: "New Campus Tour",
      date: "March 17, 2024",
      image: "/images/WhatsApp Image 2025-02-28 at 12.03.34_761bafa0.jpg",
      description: "Guided tour of our new facilities"
    },
    {
      id: 5,
      title: "New Campus Tour",
      date: "March 17, 2024",
      image: "/images/WhatsApp Image 2025-04-27 at 13.30.27_27d4f065.jpg",
      description: "Guided tour of our new facilities"
    },
    {
      id: 6,
      title: "New Campus Tour",
      date: "March 17, 2024",
      image: "/images/WhatsApp Image 2025-03-07 at 15.15.48_ae2039e8.jpg",
      description: "Guided tour of our new facilities"
    }
  ];

  return (
    <section id="past-events" className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-2 mb-8">
          <GalleryHorizontal className="w-8 h-8 text-nep-purple" />
          <h2 className="section-title">Past Events</h2>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
              duration: 1500, // Smoother, longer transition
            }}
            plugins={[AutoPlayPlugin(4000)]} // 4 seconds interval
            className="w-full"
          >
            <CarouselContent className="transition-all duration-1000 ease-in-out">
              {events.map((event) => (
                <CarouselItem key={event.id} className="md:basis-1/2 lg:basis-1/3 transition-all duration-1000 ease-in-out">
                  <div className="p-1">
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-0">
                        <div className="relative aspect-[4/3]">
                          <img
                            src={event.image}
                            alt={event.title}
                            className="object-cover w-full h-full transition-transform duration-1000 ease-in-out"
                          />
                          <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
                            <h3 className="font-semibold">{event.title}</h3>
                            <p className="text-sm text-gray-200">{event.date}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-4">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default PastEventsSection;