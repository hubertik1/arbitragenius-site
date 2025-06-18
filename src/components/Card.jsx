import React from 'react';
import { Link } from 'react-router-dom';

export default function Card({ title, to, children }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{children}</p>
      <Link to={to}>Open</Link>
    </div>
  );
}
