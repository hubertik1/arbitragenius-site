import React, { useState, useRef, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './Contact.module.css';

const Contact = () => {
  const formRef = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [emailValue, setEmailValue] = useState('');

  useEffect(() => {
    emailjs.init(process.env.REACT_APP_EMAILJS_USER_ID);
  }, []);

  const handleAnonymousChange = (e) => {
    const anon = e.target.checked;
    setIsAnonymous(anon);
    setEmailValue(anon ? 'Anonymous' : '');
  };

  const handleEmailChange = (e) => {
    setEmailValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    const toastId = toast.loading('Sending message...');

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        () => {
          toast.update(toastId, {
            render: 'Message sent successfully!',
            type: 'success',
            isLoading: false,
            autoClose: 3000
          });
          setIsSubmitted(true);
        },
        (error) => {
          toast.update(toastId, {
            render: 'Error sending message. Please try again.',
            type: 'error',
            isLoading: false,
            autoClose: 5000
          });
          console.error('EmailJS error:', error.text);
          setIsSending(false);
        }
      );
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>Support</span>
        <h1>Contact Us</h1>
        <p>
          Questions about the app, a feature idea, or something that feels unclear? Send a message and we will get back to you.
        </p>
      </div>
      <ToastContainer position="top-right" />

      <div className={styles.layout}>
        <aside className={styles.infoPanel}>
          <h2>What we can help with</h2>
          <ul className={styles.infoList}>
            <li>Questions about bonus bets, arbitrage flows, or margin calculations.</li>
            <li>Bug reports, UX feedback, and ideas for improving the app.</li>
            <li>Privacy questions or support requests related to your App Store install.</li>
          </ul>
          <a className={styles.contactLink} href="mailto:support@arbitragenius.net">
            support@arbitragenius.net
          </a>
        </aside>

        <section className={styles.formCard}>
          <h2>Send a message</h2>
          <p className={styles.formIntro}>
            Fill out the form below. If you prefer, you can also write anonymously.
          </p>

          {isSubmitted ? (
            <p className={styles.thanks}>Thanks for your message!</p>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.field}>
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="user_name"
                  required
                  disabled={isSending}
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="user_email"
                  type="email"
                  required
                  disabled={isSending || isAnonymous}
                  value={emailValue}
                  onChange={handleEmailChange}
                />
                <label className={styles.checkboxLabel}>
                  <input
                    type="checkbox"
                    checked={isAnonymous}
                    onChange={handleAnonymousChange}
                    disabled={isSending}
                  />
                  Anonymous
                </label>
              </div>

              <div className={styles.field}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  disabled={isSending}
                />
              </div>

              <button
                type="submit"
                className={styles.button}
                disabled={isSending}
              >
                {isSending ? 'Sending...' : 'Submit'}
              </button>
            </form>
          )}
        </section>
      </div>
    </div>
  );
};

export default Contact;
