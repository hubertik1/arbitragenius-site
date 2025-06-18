import React from 'react';
import { Helmet } from 'react-helmet-async';
import Section from '../components/Section';

const eula = `APPLE STANDARD EULA\n\nThis Application is licensed to you, not sold,\nby {CompanyName} for use strictly under the terms of this license.\n{AppName} is bound by Apple's Standard End User License Agreement.`;

export default function Legal() {
  return (
    <main>
      <Helmet>
        <title>Legal - ArbitraGenius</title>
        <meta name="description" content="Legal information" />
        <link rel="canonical" href="/legal" />
      </Helmet>
      <Section id="privacy-policy" title="Privacy Policy">
        <p>No personal data is collected. All features work offline.</p>
      </Section>
      <Section id="terms-of-service" title="Terms of Service">
        <p>Users must be 18+ and comply with all local wagering laws.</p>
      </Section>
      <Section id="eula" title="End User License Agreement">
        <pre>{eula}</pre>
      </Section>
    </main>
  );
}
