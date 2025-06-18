import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import emailjs from 'emailjs-com';
import Toast from '../components/Toast';
import Button from '../components/Button';

export default function Contact() {
  const [message, setMessage] = useState('');
  const [toast, setToast] = useState('');

  const send = (e) => {
    e.preventDefault();
    emailjs.send('service_id', 'template_id', { message })
      .then(() => setToast('Sent!'))
      .catch(() => (window.location.href = 'mailto:support@example.com'));
  };

  return (
    <main>
      <Helmet>
        <title>Contact - ArbitraGenius</title>
        <meta name="description" content="Contact support." />
        <link rel="canonical" href="/contact" />
      </Helmet>
      <form onSubmit={send}>
        <label>
          Message
          <textarea aria-label="Message" value={message} onChange={e => setMessage(e.target.value)} />
        </label>
        <Button type="submit">Send</Button>
      </form>
      <Toast message={toast} onClose={() => setToast('')} />
    </main>
  );
}
