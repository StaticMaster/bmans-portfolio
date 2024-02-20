import React, {useRef} from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';


function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_3i7kgtb', 'template_v2xg8j7', form.current, {
          publicKey: 'WaT8kSB0ZDcsi8-vU',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
  return (
    <div className="container">
    <h1>Please Email for Serious Inquiries</h1>
    <form className="contact-form" ref={form} onSubmit={sendEmail}>
      <label htmlFor="email">Your Email:</label>
      <input
        type="text"
        className="input-field"
        name="email"
        placeholder="person@example.com"
      />
      <label htmlFor="message">Message:</label>
      <textarea name="message" className="message-box" placeholder="Message..."></textarea>
      <div className="send-button">
        <button type="submit" value="Send">Send</button>
      </div>
    </form>
  </div>
);
}
export default Contact
