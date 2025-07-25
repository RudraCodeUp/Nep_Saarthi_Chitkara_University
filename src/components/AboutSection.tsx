import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from '@/components/ui/dialog';

const AboutSection = () => {
  const [isMissionOpen, setIsMissionOpen] = useState(false);

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
              <Button 
                variant="outline" 
                className="border-nep-purple text-nep-purple hover:bg-nep-purple hover:text-white"
                onClick={() => setIsMissionOpen(true)}
              >
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

      {/* Mission Dialog */}
      <Dialog open={isMissionOpen} onOpenChange={setIsMissionOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-nep-blue">Our Mission & Vision</DialogTitle>
          </DialogHeader>
          <DialogDescription>
            <div className="space-y-4 mt-4 text-gray-700">
              <div>
                <h3 className="text-lg font-semibold text-nep-purple mb-2">Mission</h3>
                <p>
                  Our mission at NEP Saarthi is to facilitate a smooth transition to the NEP 2020 framework by empowering students with knowledge, resources, and support systems. We aim to bridge the gap between policy and implementation by creating awareness, fostering dialogue, and building capacity among the student community at Chitkara University.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-nep-purple mb-2">Vision</h3>
                <p>
                  We envision a transformed educational ecosystem where every student at Chitkara University understands, embraces, and benefits from the progressive reforms of NEP 2020, developing into holistic learners equipped with 21st-century skills and a global outlook while remaining rooted in Indian values and ethos.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-nep-purple mb-2">Core Values</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li><span className="font-medium">Student-Centered Approach:</span> Prioritizing student needs and perspectives in all our initiatives</li>
                  <li><span className="font-medium">Collaboration:</span> Working closely with administration, faculty, and student bodies</li>
                  <li><span className="font-medium">Innovation:</span> Exploring creative solutions to implementation challenges</li>
                  <li><span className="font-medium">Inclusivity:</span> Ensuring all students, regardless of background, benefit from NEP reforms</li>
                  <li><span className="font-medium">Excellence:</span> Maintaining high standards in all our awareness and training programs</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-nep-purple mb-2">Strategic Objectives</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Increase NEP awareness among 100% of Chitkara University students</li>
                  <li>Facilitate understanding of multidisciplinary options and credit-based systems</li>
                  <li>Create peer support networks for adapting to new assessment frameworks</li>
                  <li>Develop resources that explain NEP benefits in student-friendly language</li>
                  <li>Support student initiatives aligned with NEP's vision of holistic education</li>
                </ul>
              </div>
            </div>
          </DialogDescription>
          <div className="flex justify-end mt-6">
            <Button 
              className="bg-nep-purple hover:bg-nep-purple-dark text-white" 
              onClick={() => setIsMissionOpen(false)}
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default AboutSection;
