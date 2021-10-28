import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import store from '@/store';
import { useGrades } from '@/components/Body/getGrades';

const Body = () => {
  const { getGrades } = useGrades();
  const curTabSel = store.useModelState('curTabSel');
  const [grades, setGrades] = useState<any[]>([]);

  useEffect(() => {
    console.log('render');
    const res = getGrades(curTabSel) as any[];
    setGrades(res);
  }, [curTabSel.gradeSel, curTabSel.semesterSel]);

  return (
    <div className={styles.gradesLines}>
      <div className={styles.gradesLineHeader}>
        <div className={styles.subjectTitle}>学科</div>
        <div className={styles.fractionTitle}>成绩</div>
        <div className={styles.creditsTitle}>学分</div>
      </div>
      {
        (grades!.data.grades as any[]).map(({ subject, score, credit }) => {
          return (
            <div className={styles.gradesLineBody} key={subject}>
              <div className={styles.subjectText}>{subject}</div>
              <div className={styles.fractionText}>{score}</div>
              <div className={styles.creditsText}>{credit}</div>
            </div>
          );
        })
      }
      {
        (grades!.data.grades as any[]).map(({ subject, score, credit }) => {
          return (
            <div className={styles.gradesLineBody} key={subject}>
              <div className={styles.subjectText}>{subject}</div>
              <div className={styles.fractionText}>{score}</div>
              <div className={styles.creditsText}>{credit}</div>
            </div>
          );
        })
      }
    </div>
  );
};

export default Body;
