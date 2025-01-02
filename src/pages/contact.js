import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
  const [state, handleSubmit] = useForm("xbllpllo");
  const [alertShown, setAlertShown] = useState(false);

  useEffect(() => {
    if (state.succeeded && !alertShown) {
      alert('Your message has been sent. Thank you!');
      setAlertShown(true);
    }
  }, [state.succeeded, alertShown]); 

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
                type="email"
                name="email"
                placeholder="Email"
                required
              />
              <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
              />
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                required
              />
              <ValidationError 
                field="message"
                errors={state.errors}
              />
              <button type="submit" disabled={state.submitting}>
                Submit
              </button>
            </form>
          </div>
          
          <div className="contact-image">
            <img src="/portfolio/bg.png" alt="Person with laptop" />
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
}
