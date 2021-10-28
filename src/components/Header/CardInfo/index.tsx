import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import clsx from 'clsx';
import { useGrades } from '@/hooks/useGrades';
import store from '@/store';

const CardInfo = () => {
  const { getGPA, getUsername } = useGrades();
  const curTabSel = store.useModelState('curTabSel');
  const [gpa, setGpa] = useState('');

  useEffect(() => {
    console.log('render');
    const res = getGPA(curTabSel);
    setGpa(res);
  }, [curTabSel.gradeSel, curTabSel.semesterSel]);
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
          <div className={styles.pointsText}>{gpa}</div>
        </div>
      </div>
      <div className={styles.nameText}>{getUsername()}</div>
    </div>
  );
};

export default CardInfo;
