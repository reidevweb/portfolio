import React, { useState } from 'react';

import Footer from '../components/Footer';
import { type } from '@testing-library/user-event/dist/type';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Your message has been sent. Thank you!');
  };

  return (
    <>
      <main>
      <h2>Contact</h2>
        <div className="contact-container">
          <div className="contact-form">
            <h1>Let's talk!</h1>
            <p>
              Whether you need a custom web solution, mobile app, or design expertise, I'm here to help. Feel free to reach out for project inquiries, collaboration opportunities, 
              or even just to chat about your next creative vision. I look forward to connecting with you!
            </p>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
              />
              <button type="submit">Send Message</button>
            </form>
          </div>
          
          <div className="contact-image">
            <img src="/bg.png" alt="Person with laptop" />
          </div>
        </div>

      </main>
      
      <Footer/>
    </>
    
    
  );
}
