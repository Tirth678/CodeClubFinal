import React from 'react';
import { Palette, Monitor, Wifi, Brain } from 'lucide-react';
import ServiceCard from './ServiceCard';

const ServicesGrid = () => {
  const services = [
    {
      title: 'Developing Innovative Projects',
      description: 'We focus on creating impactful coding projects that solve real-world problems and help members enhance their technical skills.',
      Icon: Palette
    },
    {
      title: 'Organizing Offline Events',
      description: 'We host hackathons, workshops, and interactive sessions to foster collaboration and practical learning among students.',
      Icon: Monitor
    },
    {
      title: 'Showcasing Achievements',
      description: 'With the launch of our official website, we highlight our projects, events, and initiatives, reflecting our dedication to innovation and community.',
      Icon: Wifi
    },
    {
      title: 'Building a Collaborative Community',
      description: 'We aim to provide a platform where students can connect, share knowledge, and grow together in the field of technology.',
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