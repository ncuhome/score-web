import React from 'react';
import styles from './index.module.scss';

const Background = () => {
  return (
    <div className={styles.background}>
      {
        Array(30).fill(1).map((item, index) => {
          return <div key={index} className={styles.particle} />;
        })
      }
    </div>
  );
};

export default Background;
