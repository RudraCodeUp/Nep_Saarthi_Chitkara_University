

import { ChevronRight } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { RegistrationForm } from './RegistrationForm';


const HeroSection = () => {
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      
      reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger once on load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="min-h-screen pt-20 pb-16 flex items-center hero-gradient">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 reveal">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
              Welcome to <span className="text-gradient">NEP SAARTHI's</span><br></br>
      
            </h1>
            <h3><span className="text-lg md:text-xl mb-8 text-blue-700">( National Education Policy Student Ambassadors for Academic Reforms, Transformation, and Holistic Inclusive Success. )</span></h3>
           <br></br>
            <p className="text-lg md:text-xl mb-8 text-gray-700">
              Empowering education transformation through the National Education Policy 2020 at Chitkara University.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-nep-blue hover:bg-nep-blue-dark text-white">
                Explore Features
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <div className="hidden md:flex space-x-4">
                          <Sheet>
                            <SheetTrigger asChild>
                              <Button className="bg-nep-orange hover:bg-nep-orange-dark text-white">
                                Register Now
                              </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-full sm:max-w-2xl overflow-y-auto">
                              <RegistrationForm />
                            </SheetContent>
                          </Sheet>
                        </div>
            </div>
            
            <div className="mt-8 flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-nep-purple-light border-2 border-white flex items-center justify-center text-xs font-bold text-nep-purple">
                    {i}
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600">
                <span className="font-bold">500+</span> students already engaged
              </p>
            </div>
          </div>
          
          <div className="md:w-1/2 reveal">
            <div className="relative">
              <div className="w-full h-full max-w-md mx-auto">
                <div className="relative z-10 animate-float">
                  <img 
                    src="/images/Natinal-Education-Policy-2020-1170x720.png"
                    alt="NEP 2020 Illustration" 
                    className="w-full h-auto rounded-lg shadow-2xl"
                  />
                </div>
                <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 bg-gradient-to-br from-nep-orange to-nep-purple rounded-full w-20 h-20 blur-2xl opacity-70"></div>
                <div className="absolute bottom-0 left-0 transform -translate-x-4 translate-y-4 bg-gradient-to-br from-nep-blue to-nep-purple rounded-full w-24 h-24 blur-2xl opacity-70"></div>
              </div>
              
              <div className="absolute top-4 right-4 md:top-8 md:right-16 bg-white p-3 rounded-lg shadow-lg rotate-3 animate-pulse-slow">
                <p className="text-nep-blue font-bold">Transforming Education</p>
              </div>
              <div className="absolute bottom-4 left-4 md:bottom-8 md:left-16 bg-white p-3 rounded-lg shadow-lg -rotate-3 animate-pulse-slow">
                <p className="text-nep-orange font-bold">Learn. Adapt. Grow.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
