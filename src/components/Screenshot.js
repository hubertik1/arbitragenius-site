import React, { useEffect, useState } from 'react';
import styles from './Screenshot.module.css';

const Screenshot = ({ src }) => {
  const [text, setText] = useState('');

  useEffect(() => {
    fetch(src)
      .then((res) => res.text())
      .then((t) => setText(t))
      .catch(() => setText(''));
  }, [src]);

  return <pre className={styles.screenshot}>{text}</pre>;
};

export default Screenshot;
