import React from 'react';
import styles from './index.module.scss';
import clsx from 'clsx';

const CardInfo = () => {
  return (
    <div className={styles.cardInfo}>
      <div className={styles.cardPercent}>
        <svg className={styles.percentSvg}>
          <defs>
            <radialGradient id="gradient" cx="50%" cy="50%" r="60%" fx="50%" fy="50%">
              <stop offset="30%" stopColor="var(--primary-dark)" />
              <stop offset="100%" stopColor="var(--primary-light)" />
            </radialGradient>
          </defs>
          <circle className={styles.svgCircle} cx="50" cy="50" r="35" stroke="url(#gradient)" id="circle" />
        </svg>
        <div className={styles.circle} />
        <div className={clsx([styles.circle, styles.circleMedium])} />
        <div className={clsx([styles.circle, styles.circleSmall])} />
        <div className={styles.cardNumber}>
          <div className={styles.GPAText}>GPA</div>
          <div className={styles.pointsText}>3.000</div>
        </div>
      </div>
      <div className={styles.nameText}>李清栋</div>
    </div>
  );
};

export default CardInfo;
