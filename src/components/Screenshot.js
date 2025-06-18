// src/components/Screenshot.jsx
import React, { useEffect, useState } from "react";
import styles from "./Screenshot.module.css";

export default function Screenshot({ src, alt = "screenshot" }) {
  const isText = src.endsWith(".txt");

  const [text, setText] = useState("");
  useEffect(() => {
    if (isText) {
      fetch(src)
        .then((res) => res.text())
        .then(setText)
        .catch(() => setText("Failed to load placeholder"));
    }
  }, [src, isText]);

  return isText ? (
    <pre className={styles.placeholder}>{text}</pre>
  ) : (
    <img src={src} alt={alt} className={styles.screenshot} />
  );
}