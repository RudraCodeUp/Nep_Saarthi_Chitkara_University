

import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { RegistrationForm } from './RegistrationForm';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 reveal">
            <h2 className="section-title">Visit Our Helpdesk</h2>
            <p className="mb-6 text-gray-700">
              Have questions about NEP 2020? Come visit our helpdesk booth at Chitkara University where our team of NEP Saarthis will assist you with all your queries and guide you through the new educational framework.
            </p>
            
            <div className="bg-white shadow-lg rounded-lg p-6 mb-8 border border-gray-100">
              <div className="flex flex-col space-y-4">
                <div className="flex items-start gap-3">
                  <div className="min-w-10 h-10 rounded-full bg-nep-blue/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-nep-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Location</h4>
                    <p className="text-gray-600">Bloom Block, Department of Academic Affairs, Chitkara University, Punjab</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="min-w-10 h-10 rounded-full bg-nep-orange/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-nep-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Helpdesk Hours</h4>
                    <p className="text-gray-600">Monday to Friday: 9:00 AM - 4:00 PM</p>
                    <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="min-w-10 h-10 rounded-full bg-nep-purple/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-nep-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Contact</h4>
                    <p className="text-gray-600">Email: nepsaarthi@chitkara.edu.in</p>
                  </div>
                </div>
              </div>
            </div>
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
          
          
          <div className="lg:w-1/2 reveal">
            <div className="relative">
              <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                <img 
                  src="/images/IMG-20250409-WA0017.jpg" 
                  alt="NEP Helpdesk Booth" 
                  className="w-full h-72 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">NEP Saarthi Helpdesk</h3>
                  <p className="text-gray-600 mb-4">
                    Our dedicated team is ready to assist you with any questions about the National Education Policy 2020 and its implementation at Chitkara University.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-nep-blue text-xs font-semibold px-3 py-1 rounded-full">Guidance</span>
                    <span className="bg-orange-100 text-nep-orange text-xs font-semibold px-3 py-1 rounded-full">Resources</span>
                    <span className="bg-purple-100 text-nep-purple text-xs font-semibold px-3 py-1 rounded-full">Support</span>
                    <span className="bg-green-100 text-green-600 text-xs font-semibold px-3 py-1 rounded-full">Information</span>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-5 -left-5 hidden sm:block">
                <div className="w-20 h-20 bg-nep-blue/20 rounded-full flex items-center justify-center -rotate-12 animate-pulse-slow">
                  <p className="text-nep-blue font-bold text-center text-sm">Visit<br />Us!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
