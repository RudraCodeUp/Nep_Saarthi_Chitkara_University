
import React from 'react';
import FeatureCard from './FeatureCard';
import { Book, BookOpen, Calendar, Check, User } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      title: 'Holistic Education',
      description: 'Focus on developing overall capabilities rather than just rote learning.',
      icon: <BookOpen className="h-6 w-6 text-nep-blue" />,
      colorClass: 'from-blue-50 to-blue-100 border-nep-blue/20'
    },
    {
      title: 'Flexible Curriculum',
      description: 'Multi-disciplinary approach with choice-based credit system.',
      icon: <Book className="h-6 w-6 text-nep-orange" />,
      colorClass: 'from-orange-50 to-orange-100 border-nep-orange/20'
    },
    {
      title: 'Early Childhood Care',
      description: 'Strengthening foundational learning for children from age 3.',
      icon: <User className="h-6 w-6 text-nep-purple" />,
      colorClass: 'from-purple-50 to-purple-100 border-nep-purple/20'
    },
    {
      title: 'Digital Transformation',
      description: 'Integration of technology in education at all levels.',
      icon: <Check className="h-6 w-6 text-green-600" />,
      colorClass: 'from-green-50 to-green-100 border-green-600/20'
    },
    {
      title: 'Professional Education',
      description: 'Enhanced focus on skill development and vocational training.',
      icon: <Calendar className="h-6 w-6 text-red-600" />,
      colorClass: 'from-red-50 to-red-100 border-red-600/20'
    },
    {
      title: 'Equitable Education',
      description: 'Ensuring quality education for all regardless of background.',
      icon: <User className="h-6 w-6 text-amber-600" />,
      colorClass: 'from-amber-50 to-amber-100 border-amber-600/20'
    },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 reveal">
          <h2 className="section-title mx-auto">Key Features of NEP 2020</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            The National Education Policy 2020 aims to transform India's education system with these groundbreaking initiatives.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              delay={index}
              colorClass={feature.colorClass}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
