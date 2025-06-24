import React from 'react';
import styles from './PrivacyPolicy.module.css';

const PrivacyPolicy = () => (
  <div className={styles.container}>
    <h1>ArbitraGenius App – Privacy Policy</h1>
    <p><em>Last updated: 24 June 2025</em></p>

    <h2>1. Our Core Principle</h2>
    <p>
      We do <strong>not</strong> collect, store, use or share any personal data. The app works entirely on your device and never contacts our servers (we don’t have any).
    </p>

    <h2>2. Data We <strong>Do Not</strong> Collect</h2>
    <ul>
      <li><strong>Personal identifiers</strong> (name, email, phone, address)</li>
      <li><strong>Accounts / log‑ins</strong> (no registration, passwords or tokens)</li>
      <li><strong>Location information</strong> (GPS, IP, Bluetooth, etc.)</li>
      <li><strong>Device &amp; usage analytics</strong> (no crash or telemetry SDKs)</li>
      <li><strong>Cookies or trackers</strong> (no ads, no third‑party SDKs)</li>
    </ul>
    <p>
      Everything the app generates settings, scores, preferences-stays locally on your device.
    </p>

    <h2>3. Voluntary Contact</h2>
    <p>
      If you choose to email <a href="mailto:support@arbitragenius.net">support@arbitragenius.net</a>, we’ll receive your email address and message. We’ll use that data only to reply, keep it confidential, and delete it on request.
    </p>

    <h2>4. Use, Sharing &amp; Retention</h2>
    <ul>
      <li>No advertising, profiling or analytics.</li>
      <li>No data shared, sold or rented ever.</li>
      <li>Nothing retained, because we collect nothing.</li>
      <li>App stores may collect their own analytics; see their policies.</li>
    </ul>

    <h2>5. Security</h2>
    <p>
      No server storage means virtually no breach risk. Your device’s security protects any local data. Email correspondence is handled securely and purged when no longer needed.
    </p>

    <h2>6. Your Rights (GDPR, CCPA &amp; Others)</h2>
    <p>
      You retain all legal privacy rights. In practice, we hold no personal data to access, correct or delete unless you emailed us. Contact us any time to review or erase that correspondence.
    </p>

    <h2>7. Children’s Privacy</h2>
    <p>
      The app is not aimed at children under 13 and never knowingly collects their data. Parents can request deletion of any email a child may send.
    </p>

    <h2>8. Changes to This Policy</h2>
    <p>
      We’ll update this document if our practices change and notify you inside the app or on our website. Continued use after an update means you accept the revised policy.
    </p>

    <h2>9. Contact</h2>
    <p>
      <strong>Email:</strong> <a href="mailto:support@arbitragenius.net">support@arbitragenius.net</a>
    </p>

    <p>
      <em>
        Thank you for trusting ArbitraGenius. The best way to protect your privacy is not to collect your data in the first place and that’s exactly what we do.
      </em>
    </p>
  </div>
);

export default PrivacyPolicy;