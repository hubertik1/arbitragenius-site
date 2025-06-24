import React from 'react';
import styles from './PrivacyPolicy.module.css';

const PrivacyPolicy = () => (
  <div className={styles.container}>
    <h1>ArbitraGenius App – Privacy Policy</h1>
    <p><em>Version 1.0 – Last updated: 24 June 2025</em></p>

    {/* 1. Core Principle */}
    <h2>1. Our Core Principle</h2>
    <p>
      We do <strong>not</strong> collect, store, use or share any personal data. The app works entirely on your device and never contacts our servers (we don’t have any).
    </p>

    {/* 2. Data We Do Not Collect */}
    <h2>2. Data We <strong>Do Not</strong> Collect</h2>
    <ul>
      <li><strong>Personal identifiers</strong> (name, email, phone, address)</li>
      <li><strong>Accounts / log-ins</strong> (no registration, passwords or tokens)</li>
      <li><strong>Location information</strong> (GPS, IP, Bluetooth, etc.)</li>
      <li><strong>Device &amp; usage analytics</strong> (no crash or telemetry SDKs)</li>
      <li><strong>Cookies or trackers</strong> (no ads, no third-party SDKs)</li>
    </ul>
    <p>
      Everything the app generates — settings, scores, preferences — stays locally on your device. This means ArbitraGenius is listed in the App&nbsp;Store with the privacy nutrition label <em>“Data Not Collected.”</em>
    </p>

    {/* 3. Voluntary Contact */}
    <h2>3. Voluntary Contact</h2>
    <p>
      If you choose to email <a href="mailto:support@arbitragenius.net">support@arbitragenius.net</a>, we’ll receive your email address and message. We use that data only to reply, keep it in an encrypted mailbox protected by two-factor authentication, and delete it upon request or after <strong>90 days</strong>, whichever comes first.
    </p>

    {/* 4. Use, Sharing & Retention */}
    <h2>4. Use, Sharing &amp; Retention</h2>
    <ul>
      <li>No advertising, profiling or analytics.</li>
      <li>No data shared, sold or rented — ever.</li>
      <li>Nothing retained, because we collect nothing (except email support as described above).</li>
      <li>App stores may collect their own analytics; see their policies.</li>
    </ul>

    {/* 5. Security */}
    <h2>5. Security</h2>
    <p>
      No server storage means virtually no breach risk. Your device’s operating-system security and encryption protect any local data. Email correspondence is handled securely and purged when no longer needed.
    </p>

    {/* 6. User Rights */}
    <h2>6. Your Rights (GDPR, CCPA &amp; Others)</h2>
    <p>
      You retain all legal privacy rights. In practice, we hold no personal data to access, correct or delete unless you emailed us. Contact us any time to review or erase that correspondence.
    </p>

    {/* 7. Children */}
    <h2>7. Children’s Privacy</h2>
    <p>
      The app is <strong>not directed to children under 13</strong> and never knowingly collects their data. Parents or guardians may request deletion of any email a child may send us, in line with COPPA and Apple’s Kids Category rules.
    </p>

    {/* 8. Changes */}
    <h2>8. Changes to This Policy</h2>
    <p>
      We’ll update this document if our practices change and notify you inside the app or on our website. Continued use after an update means you accept the revised policy.
    </p>

    {/* 9. Contact */}
    <h2>9. Contact</h2>
    <p>
      <strong>Email:</strong> <a href="mailto:support@arbitragenius.net">support@arbitragenius.net</a>
    </p>

    {/* 10. Apple Platform Disclosures */}
    <h2>10. Apple Platform Disclosures</h2>

    <h3>10.1 Data Not Collected</h3>
    <p>
      ArbitraGenius is published in the App&nbsp;Store with the privacy label <em>“Data Not Collected.”</em> We do not integrate third‑party SDKs that collect data.
    </p>

    <h3>10.2 Privacy Manifest</h3>
    <p>
      The application bundle includes a <code>privacyManifest.json</code> file declaring no data collection or Required Reason APIs, as required by Apple policy. The file is reviewed by Apple during submission and is not publicly distributed.
    </p>

    {/* 11. App Tracking Transparency */}
    <h2>11. App Tracking Transparency (ATT)</h2>
    <p>
      ArbitraGenius does <strong>not</strong> track users across apps or websites and does not access the IDFA. Therefore, the iOS ATT prompt is never displayed because tracking authorization is unnecessary.
    </p>

    <p>
      <em>
        Thank you for trusting ArbitraGenius. The best way to protect your privacy is not to collect your data in the first place — and that’s exactly what we do.
      </em>
    </p>
  </div>
);

export default PrivacyPolicy;