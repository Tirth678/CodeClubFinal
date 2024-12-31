import React from 'react';
import Container from '../components/common/Container';
import AboutSection from '../components/About/AboutSection';
import ServicesGrid from '../components/Services/ServicesGrid';
import SectionTitle from '../components/common/SectionTitle';

const HomePage = () => {
  return (
    <section className="pt-24 pb-32">
      <Container>
        <div className="space-y-16">
          <AboutSection />

          <div className="space-y-8">
            <SectionTitle>What We're Doing</SectionTitle>
            <ServicesGrid />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HomePage;
