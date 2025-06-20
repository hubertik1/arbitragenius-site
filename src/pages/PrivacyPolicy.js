import React from 'react';
import styles from './PrivacyPolicy.module.css';

const PrivacyPolicy = () => {
  return (
    <div className={styles.container}>
      <h1>Privacy Policy</h1>
      <p>Last updated: 19.06.2025</p>

      <h2>1. Information We Collect</h2>
      <p>
        We do not require registration or sign-ups. The only personal data we collect is what you voluntarily provide
        in the Contact form: your name, email address, and any message you submit. We also automatically gather
        non-identifying usage information—such as device type, OS version, and screen views—via third-party analytics
        solely to monitor app performance and improve features. No personal identifiers are linked to this data.
      </p>

      <h2>2. How We Use Your Information</h2>
      <p>
        We use the name and email you provide in the Contact form solely to respond to your inquiries or support
        requests. Aggregated usage data helps us understand which features are most used and where crashes or bugs occur,
        so we can enhance stability and user experience.
      </p>

      <h2>3. Data Sharing and Disclosure</h2>
      <p>
        We do not sell, rent, or share your personal data with third parties for their own marketing purposes. We may
        share anonymized, aggregated usage data with our analytics provider under strict confidentiality. If required by
        law or to protect our rights, we may disclose data in response to legal requests (e.g., subpoenas).
      </p>

      <h2>4. Security</h2>
      <p>
        We implement industry-standard safeguards (encryption in transit, secure servers) to protect your data. However,
        no method of transmission over the Internet is completely secure.
      </p>

      <h2>5. Your Choices</h2>
      <p>
        You may choose not to provide your name or email; in that case, we cannot respond to your inquiry. If you wish
        to disable analytics collection, please contact us for opt-out instructions.
      </p>

      <h2>6. Children’s Privacy</h2>
      <p>
        We do not knowingly collect personal information from children under 13. If you believe a child under 13 has
        submitted personal data, please contact us for deletion.
      </p>

      <h2>7. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy to reflect changes in our practices or legal requirements. The “Last updated”
        date will indicate when it was revised.
      </p>

      <h2>8. Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us at:<br />
        Email: support@arbitragenius.net
      </p>
    </div>
  );
};

export default PrivacyPolicy;