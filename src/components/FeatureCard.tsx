
import React from 'react';
import { cn } from '@/lib/utils';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface FeatureCardProps {
  title: string;
  description: string;
  detailedInfo: string[];
  icon: React.ReactNode;
  delay?: number;
  colorClass?: string;
}

const FeatureCard = ({
  title,
  description,
  detailedInfo,
  icon,
  delay = 0,
  colorClass = 'from-blue-50 to-blue-100 border-nep-blue/20',
}: FeatureCardProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div 
          className={`reveal gradient-card border ${colorClass} cursor-pointer transition-all hover:scale-105 hover:shadow-lg`}
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
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 text-2xl">
            <span className="rounded-full p-2 bg-white shadow-sm">
              {icon}
            </span>
            {title}
          </DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <p className="text-gray-700 mb-4">{description}</p>
          <div className="space-y-3">
            {detailedInfo.map((info, index) => (
              <div key={index} className="flex items-start gap-2">
                <div className="min-w-[24px] h-6 flex items-center justify-center">
                  <div className="w-2 h-2 bg-nep-purple rounded-full"></div>
                </div>
                <p className="text-gray-600">{info}</p>
              </div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FeatureCard;