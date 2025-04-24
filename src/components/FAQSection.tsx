
import React from 'react';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';

const FAQSection = () => {
  const faqs = [
    {
      question: "What is the National Education Policy 2020?",
      answer: "The National Education Policy 2020 (NEP 2020) is a comprehensive framework to guide the development of education in India. It aims to transform the education system to meet the needs of 21st-century India and create an equitable and vibrant knowledge society."
    },
    {
      question: "How does NEP 2020 impact university education?",
      answer: "NEP 2020 introduces a flexible curriculum structure, multiple entry/exit options, academic credit bank, and emphasis on holistic multidisciplinary education. It moves away from rigid boundaries between disciplines and allows students to customize their learning paths."
    },
    {
      question: "What is the 5+3+3+4 curricular structure?",
      answer: "The NEP 2020 replaces the 10+2 structure with a 5+3+3+4 structure: 5 years of foundational stage (ages 3-8), 3 years of preparatory stage (ages 8-11), 3 years of middle stage (ages 11-14), and 4 years of secondary stage (ages 14-18)."
    },
    {
      question: "How does NEP 2020 promote Indian languages?",
      answer: "NEP 2020 emphasizes mother tongue/local language as the medium of instruction until at least Grade 5, preferably till Grade 8 and beyond. It promotes multilingualism and the learning of Indian languages, arts, and culture."
    },
    {
      question: "What is NEP Saarthi at Chitkara University?",
      answer: "NEP Saarthi is a student-led initiative at Chitkara University dedicated to promoting awareness about NEP 2020, organizing informational sessions, and providing guidance to students navigating the policy changes through our helpdesk booth."
    }
  ];

  return (
    <section id="faqs" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 reveal">
          <h2 className="section-title mx-auto">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about the National Education Policy 2020 and how it impacts students at Chitkara University.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto reveal">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                <AccordionTrigger className="text-left text-lg font-semibold py-4 hover:text-nep-blue">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
