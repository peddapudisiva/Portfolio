import { forwardRef, useId } from 'react';
import { classes } from '~/utils/style';
import styles from './monogram.module.css';

export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  const id = useId();
  const clipId = `${id}monogram-clip`;

  return (
    <svg
      aria-hidden
      className={classes(styles.monogram, className)}
      width="34"
      height="36"
      viewBox="0 0 34 36"
      ref={ref}
      {...props}
    >
      <defs>
        <clipPath id={clipId}>
          <path d="M 32 0 H 10 C 4.4 0 0 4.4 0 10 C 0 15.6 4.4 20 10 20 H 22 C 24.2 20 26 21.8 26 24 C 26 26.2 24.2 28 22 28 H 0 V 34 H 22 C 27.6 34 32 29.6 32 24 C 32 18.4 27.6 14 22 14 H 10 C 7.8 14 6 12.2 6 10 C 6 7.8 7.8 6 10 6 H 32 V 0 Z" />
        </clipPath>
      </defs>
      <rect clipPath={`url(#${clipId})`} width="100%" height="100%" />
      {highlight && (
        <g clipPath={`url(#${clipId})`}>
          <rect className={styles.highlight} width="100%" height="100%" />
        </g>
      )}
    </svg>
  );
});
