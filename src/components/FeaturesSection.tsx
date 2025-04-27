
import React from 'react';
import FeatureCard from './FeatureCard';
import { BookOpen, Book, User, Check, Calendar, Square } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      title: 'Academic Flexibility',
      description: 'Multiple entry/exit options and credit-based system for higher education.',
      icon: <BookOpen className="h-6 w-6 text-nep-blue" />,
      colorClass: 'from-blue-50 to-blue-100 border-nep-blue/20',
      detailedInfo: [
        'Multiple entry and exit points in undergraduate programs with appropriate certifications',
        'Academic Bank of Credits (ABC) to facilitate credit transfer and accumulation',
        'Choice Based Credit System (CBCS) for personalized learning paths',
        'Integration of vocational education into mainstream education',
        'Flexible curriculum structure with creative combinations of disciplines'
      ]
    },
    {
      title: 'Holistic Development',
      description: 'Emphasis on comprehensive growth through multidisciplinary education.',
      icon: <Book className="h-6 w-6 text-nep-orange" />,
      colorClass: 'from-orange-50 to-orange-100 border-nep-orange/20',
      detailedInfo: [
        'Integration of arts, humanities, and sciences in curriculum',
        'Focus on both cognitive and non-cognitive skill development',
        'Mandatory internships and research projects',
        'Emphasis on Indian knowledge systems and cultural heritage',
        'Development of critical thinking and problem-solving abilities'
      ]
    },
    {
      title: 'Quality Research',
      description: 'Promoting innovative research and academic excellence.',
      icon: <User className="h-6 w-6 text-nep-purple" />,
      colorClass: 'from-purple-50 to-purple-100 border-nep-purple/20',
      detailedInfo: [
        'Establishment of National Research Foundation (NRF)',
        'Enhanced industry-academia collaboration',
        'Focus on interdisciplinary research',
        'Improved research funding mechanisms',
        'Integration of research at undergraduate level'
      ]
    },
    {
      title: 'Digital Integration',
      description: 'Leveraging technology for enhanced learning experiences.',
      icon: <Check className="h-6 w-6 text-green-600" />,
      colorClass: 'from-green-50 to-green-100 border-green-600/20',
      detailedInfo: [
        'Development of digital infrastructure in institutions',
        'Online learning platforms and MOOCs integration',
        'Digital libraries and resource sharing',
        'Technology-enabled assessment systems',
        'Virtual laboratories and simulation-based learning'
      ]
    },
    {
      title: 'Governance Reforms',
      description: 'Enhanced autonomy and accountability in higher education.',
      icon: <Calendar className="h-6 w-6 text-red-600" />,
      colorClass: 'from-red-50 to-red-100 border-red-600/20',
      detailedInfo: [
        'Single regulatory body - Higher Education Commission of India (HECI)',
        'Graded autonomy to institutions',
        'Transparent accreditation system',
        'Focus on outcome-based education',
        'Regular performance assessment of institutions'
      ]
    },
    {
      title: 'Global Standards',
      description: 'Aligning with international education standards.',
      icon: <Square className="h-6 w-6 text-amber-600" />,
      colorClass: 'from-amber-50 to-amber-100 border-amber-600/20',
      detailedInfo: [
        'Internationalization of higher education',
        'Student and faculty exchange programs',
        'Global research collaborations',
        'International quality benchmarking',
        'Cross-border credit transfers'
      ]
    },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 reveal">
          <h2 className="section-title mx-auto">Key Features of NEP 2020 for Higher Education</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            The National Education Policy 2020 introduces transformative changes in higher education through these key initiatives.
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
              detailedInfo={feature.detailedInfo}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;