import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import clsx from 'clsx';
import { useGrades } from '@/hooks/useGrades';
import store from '@/store';

// 满分绩点
const MaxGPA = 4;

const CardInfo = () => {
  const { getGPA, getUsername } = useGrades();
  const curTabSel = store.useModelState('curTabSel');
  const [gpa, setGpa] = useState('');
  const [back, setBack] = useState(false);
  const [backText, setBackText] = useState('敬请期待');

  useEffect(() => {
    const res = getGPA(curTabSel);
    if (res.exist) {
      setGpa(res.data as string);
    } else {
      setGpa('');
    }
  }, [curTabSel.gradeSel, curTabSel.semesterSel]);

  // 百分比计算式
  const gpaNum = gpa ? parseFloat(gpa) : 0;
  const strokeDashoffset = 220 - (220 * gpaNum) / MaxGPA;
  useEffect(() => {
    if (!gpa) {
      setBack(true);
      setBackText('暂无绩点');
    } else {
      setBack(false);
      setBackText('敬请期待');
    }
  }, [gpa]);

  return (
    <div className={clsx([styles.panel, back && styles.flip, styles.slideUp])} onClick={() => setBack(!back)}>
      <div className={styles.front}>
        <div className={styles.frontBox}>
          <div className={styles.cardPercent}>
            <svg className={styles.percentSvg}>
              <defs>
                <radialGradient id="gradient" cx="50%" cy="50%" r="60%" fx="50%" fy="50%">
                  <stop offset="30%" stopColor="var(--primary-dark)" />
                  <stop offset="100%" stopColor="var(--primary-light)" />
                </radialGradient>
              </defs>
              <circle
                className={styles.svgCircle}
                style={{ strokeDashoffset }}
                cx="50"
                cy="50"
                r="35"
                stroke="url(#gradient)"
                id="circle"
              />
            </svg>
            <div className={styles.circle} />
            <div className={clsx([styles.circle, styles.circleMedium])} />
            <div className={clsx([styles.circle, styles.circleSmall])} />
            <div className={styles.cardNumber}>
              <div className={styles.GPAText}>GPA</div>
              <div className={styles.pointsText}>{gpa}</div>
            </div>
          </div>
          {/* <div className={styles.nameText}>{getUsername()}</div> */}
        </div>
      </div>
      <div className={styles.back}>
        <div className={styles.backBox}>
          <div>{backText}</div>
        </div>
      </div>
    </div>
  );
};

export default CardInfo;
