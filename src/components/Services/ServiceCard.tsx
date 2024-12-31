import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
}

const ServiceCard = ({ title, description, Icon }: ServiceCardProps) => {
  return (
    <div className="bg-[#2a2a2a] rounded-2xl p-6 hover:bg-[#333] transition-colors">
      <div className="w-12 h-12 bg-yellow-400/10 rounded-lg flex items-center justify-center mb-4">
        <Icon size={24} className="text-yellow-400" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default ServiceCard;