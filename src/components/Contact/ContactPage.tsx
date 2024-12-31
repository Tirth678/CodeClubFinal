import React from 'react';
import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';
import Map from './Map';
import ContactForm from './ContactForm';

const ContactPage = () => {
  return (
    <div className="pt-24 pb-32">
      <Container>
        <div className="max-w-3xl mx-auto space-y-8">
          <SectionTitle>Contact</SectionTitle>
          <Map />
          <ContactForm />
        </div>
      </Container>
    </div>
  );
};

export default ContactPage;