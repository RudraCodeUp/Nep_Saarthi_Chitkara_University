
import React from 'react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
  colorClass?: string;
}

const FeatureCard = ({
  title,
  description,
  icon,
  delay = 0,
  colorClass = 'from-blue-50 to-blue-100 border-nep-blue/20',
}: FeatureCardProps) => {
  return (
    <div 
      className={`reveal gradient-card border ${colorClass}`}
      style={{ animationDelay: `${delay * 0.1}s` }}
    >
      <div className="flex items-start gap-4">
        <div className="rounded-full p-3 bg-white shadow-md">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
