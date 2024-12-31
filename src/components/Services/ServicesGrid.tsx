import React from 'react';
import { Palette, Monitor, Wifi, Brain } from 'lucide-react';
import ServiceCard from './ServiceCard';

const ServicesGrid = () => {
  const services = [
    {
      title: 'Design & Branding',
      description: 'Crafting visually compelling and cohesive brand identities that captivate and engage audiences.',
      Icon: Palette
    },
    {
      title: 'Digital Marketing',
      description: 'Implementing strategic online campaigns to boost brand visibility and drive targeted traffic.',
      Icon: Monitor
    },
    {
      title: 'IoT & Hardware',
      description: 'Developing innovative hardware solutions integrated with the Internet of Things for enhanced connectivity.',
      Icon: Wifi
    },
    {
      title: 'Computer Vision & AI',
      description: 'Leveraging advanced algorithms to interpret visual data and automate complex tasks.',
      Icon: Brain
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {services.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
    </div>
  );
};

export default ServicesGrid;