// src/components/Title/Title.jsx
import { useMemo } from 'react';
import styles from './Title.module.css';

const randomAngles = (len) => {
  // stable but varied angles between -8 and +8 degrees
  const base = [ -7, 5, -6, 8, -3, 6, -5, 7, -4, 4, -2, 3, -1, 2, 1 ];
  return Array.from({ length: len }, (_, i) => `${base[i % base.length]}deg`);
};

export default function Title({ debug = false }) {
  const stacker = 'STACKER';
  const letters = stacker.split('');

  const angles = useMemo(() => randomAngles(letters.length), [letters.length]);

  return (
    <h1 className={styles.title} aria-label="Burger Stacker">
      {/* Keep existing heading styles from App.css on h1 */}
      <span className={styles.burger}>
        <span className={styles.burgerInitial} aria-hidden="true">B</span>
        <span className={styles.burgerSpacer} aria-hidden="true"></span>
        <span aria-hidden="true">urger</span>
      </span>{' '}
      <span className={`${styles.stacker} ${debug ? styles.debug : ''}`} aria-hidden="true">
        {letters.map((ch, i) => (
          <span
            key={`${ch}-${i}`}
            className={styles.letter}
            data-i={i}
            style={{ ['--i']: i, ['--angle']: angles[i] }}
          >
            {ch}
          </span>
        ))}
      </span>
    </h1>
  );
}
