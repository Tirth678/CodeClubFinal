import React from 'react';
import SectionTitle from '../common/SectionTitle';

const AboutSection = () => {
  return (
    <div className="space-y-6">
      <SectionTitle>About Us</SectionTitle>
      <div className="space-y-4 text-gray-300">
        <p>
        Code Club at GSFC University is a vibrant, student-led community dedicated to fostering innovation and skill development in the field of technology. Our primary focus lies in building impactful coding projects and organizing engaging offline events that provide hands-on learning experiences. With a collaborative spirit and a passion for problem-solving, our members work together to turn ideas into reality. Recently, we achieved a significant milestone by developing and launching our club's official website, which showcases our projects, events, and vision. Join us at Code Club, where creativity meets code, and teamwork drives excellence!
        </p>
        <p>
        At Code Club, our core objectives are to nurture technical skills, encourage innovation, and foster a collaborative environment among students. We aim to provide a platform for hands-on learning through coding projects and practical workshops, enabling members to bridge the gap between theoretical knowledge and real-world application. Additionally, we strive to organize impactful events that inspire creativity, teamwork, and problem-solving, empowering students to excel in their tech journeys.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
