import React, { useState } from 'react';
import { Send } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold">Contact Form</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Full name"
            className="bg-[#2a2a2a] rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email address"
            className="bg-[#2a2a2a] rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
        <textarea
          placeholder="Your Message"
          rows={6}
          className="bg-[#2a2a2a] rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
        <button
          type="submit"
          className="flex items-center gap-2 bg-yellow-400 text-black px-6 py-3 rounded-lg hover:bg-yellow-300 transition-colors ml-auto"
        >
          <Send size={18} />
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;