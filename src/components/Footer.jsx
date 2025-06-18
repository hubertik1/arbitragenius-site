import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} ArbitraGenius</p>
      <Link to="/legal">Legal</Link>
    </footer>
  );
}
