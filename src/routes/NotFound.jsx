import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <main>
      <Helmet>
        <title>404 - ArbitraGenius</title>
      </Helmet>
      <h1>Page Not Found</h1>
      <Link to="/">Go Home</Link>
    </main>
  );
}
