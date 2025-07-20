import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { RegistrationForm } from './RegistrationForm';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'About', href: '#about' },
    { name: 'FAQs', href: '#faqs' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
  scrollPosition > 50 
    ? 'bg-white/90 backdrop-blur-md shadow-md' 
    : 'bg-white/70 backdrop-blur-sm'
}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <span className="text-2xl font-bold text-gradient">NEP Saarthi</span>
            </a>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-nep-navy hover:text-nep-blue font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          
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
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-lg p-4 border-t">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-nep-navy hover:text-nep-blue py-2 px-4 rounded-md hover:bg-blue-50 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Sheet>
                <SheetTrigger asChild>
                  <Button className="bg-nep-orange hover:bg-nep-orange-dark text-white w-full">
                    Register Now
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-full sm:max-w-2xl overflow-y-auto">
                  <RegistrationForm />
                </SheetContent>
              </Sheet>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
