import React from 'react';
import styles from './loader.module.css';

interface LoaderProps {
  count: number;
}

const Loader: React.FC<LoaderProps> = ({ count }) => {
  return (
    <div>
      {Array.from({ length: count }).map((_, index) => (
        <div className={styles.cardDiv} key={index}>
          <div className={styles.cardUpperDiv}>
            <div className={styles.upperLoader}></div>
          </div>
          <div className={styles.lowerLoader}></div>
        </div>
      ))}
    </div>
  );
};

export default Loader;