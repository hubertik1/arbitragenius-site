import React from 'react';

export default function Toast({ message, onClose }) {
  if (!message) return null;
  return (
    <div role="alert" className="toast">
      {message}
      <button aria-label="Close" onClick={onClose}>x</button>
    </div>
  );
}
