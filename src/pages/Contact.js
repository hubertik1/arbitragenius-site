import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import styles from './Contact.module.css';


const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form, 'YOUR_USER_ID')
      .then(
        (result) => {
          console.log(result.text);
          setIsSubmitted(true);
        },
        (error) => {
          console.error(error.text);
        }
      );
  };

  return (
    <div className={styles.container}>
      <h1>Contact Us</h1>
      {isSubmitted ? (
        <p>Thanks for your message!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name</label>
            <input name="name" value={form.name} onChange={handleChange} />
          </div>
          <div>
            <label>Email</label>
            <input name="email" value={form.email} onChange={handleChange} />
          </div>
          <div>
            <label>Message</label>
            <textarea name="message" value={form.message} onChange={handleChange} />
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default Contact;