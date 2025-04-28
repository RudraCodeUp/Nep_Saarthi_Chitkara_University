
import React from 'react';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 order-2 lg:order-1 reveal">
            <h2 className="section-title">About NEP Saarthi</h2>
            <p className="mb-4 text-gray-700">
            NEP Saarthi at Chitkara University is a student-driven initiative dedicated to promoting awareness, understanding, and implementation of the National Education Policy (NEP) 2020 among the student community.
            </p>
            <p className="mb-4 text-gray-700">
            Our team of NEP Saarthis, selected through a national-level process by the University Grants Commission (UGC), collaborates with faculty and administration to organize workshops, seminars, awareness drives, and helpdesk sessions that guide students in adapting to the academic reforms introduced by NEP 2020.
            </p>
            <p className="mb-6 text-gray-700">
            Through our collective efforts, we strive to create a well-informed campus community that embraces multidisciplinary learning, holistic education, skill development, and research excellence, shaping the future of education in alignment with the vision of NEP 2020.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Button className="bg-nep-purple hover:bg-nep-purple-dark text-white">
                Join Our Team
              </Button>
              <Button variant="outline" className="border-nep-purple text-nep-purple hover:bg-nep-purple hover:text-white">
                Learn Our Mission
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/2 order-1 lg:order-2 reveal">
            <div className="relative">
              <div className="bg-white rounded-xl shadow-xl p-4 max-w-md mx-auto">
                <div className="aspect-video relative overflow-hidden rounded-lg">
                  <img 
                    src="/images/OIP.jpg" 
                    alt="NEP Saarthi Team" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-4 p-4 bg-gradient-to-r from-nep-blue/10 to-nep-purple/10 rounded-lg">
                  <h3 className="text-lg font-bold text-nep-blue mb-2">
                    Our Impact at Chitkara University
                  </h3>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="p-2">
                      <p className="text-2xl font-bold text-nep-blue"> 500+</p>
                      <p className="text-sm text-gray-600">Students Engaged</p>
                    </div>
                    <div className="p-2">
                      <p className="text-2xl font-bold text-nep-orange">10+</p>
                      <p className="text-sm text-gray-600">Events Held</p>
                    </div>
                    <div className="p-2">
                      <p className="text-2xl font-bold text-nep-purple">15+</p>
                      <p className="text-sm text-gray-600">Departments</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-5 -right-5 hidden sm:block">
                <div className="w-24 h-24 bg-nep-orange/20 rounded-full flex items-center justify-center rotate-12 animate-pulse-slow">
                  <p className="text-nep-orange font-bold text-center text-sm">Making<br />Impact</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
