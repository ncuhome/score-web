import React, {useEffect, useState} from 'react';
import styles from './index.module.scss';
import clsx from 'clsx';
import { useGrades } from '@/hooks/useGrades';
import store from '@/store';

// 满分绩点
const MaxGPA = 4;

const CardInfo = () => {
  const { getGPA } = useGrades();
  const curTabSel = store.useModelState('curTabSel');
  const [gpa, setGpa] = useState('');
  const [back, setBack] = useState(false);
  const [down,setDown] = useState(false);

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
    } else {
      setBack(false);
    }
  }, [gpa]);

  const handleClickCard = ()=>{
    setDown(!down)
  }

  const renderEmpty = () => {
    return (
      <>
        <div className={clsx([styles.rank,down && styles.slideDown])}>
          <div>排名</div>
          <div>12</div>
        </div>
      </>
    );
  };


  return (
    <div className={clsx([styles.panel,back && styles.flip, styles.slideUp])}>
      <div className={clsx([styles.front])} onClick={handleClickCard}>
        <div className={clsx([styles.frontBox])}>
          <div className={clsx([styles.progressBox,down&&styles.slideDown])}>
            <svg className={styles.progress}>
              <defs>
                <radialGradient id="gradient" cx="50%" cy="50%" r="60%" fx="50%" fy="50%">
                  <stop offset="40%" stopColor="var(--primary-dark)" />
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
          {renderEmpty()}
        </div>
      </div>
      <div className={styles.back}>
        <div className={clsx([styles.backBox])}>
          <img className={styles.emo} src='/public/sad.svg' alt={'sad'}/>
          <div>暂无绩点</div>
        </div>
      </div>
    </div>
  );
};

export default CardInfo;
