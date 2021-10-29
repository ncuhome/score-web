import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import store from '@/store';
import { useGrades } from '@/hooks/useGrades';
import type { ScoreType } from '@/utils/data';

const Body = () => {
  const { getGrades } = useGrades();
  const curTabSel = store.useModelState('curTabSel');
  const [grades, setGrades] = useState<ScoreType[]>([]);

  useEffect(() => {
    const res = getGrades(curTabSel);
    if (res.exist) {
      setGrades(res.data as ScoreType[]);
    }
  }, [curTabSel.gradeSel, curTabSel.semesterSel]);

  return (
    <div className={styles.gradesLines}>
      <div className={styles.gradesLineHeader}>
        <div className={styles.subjectTitle}>学科</div>
        <div className={styles.fractionTitle}>成绩</div>
        <div className={styles.creditsTitle}>学分</div>
      </div>
      <div className={styles.gradesArea}>
        {
          grades && grades.map(({ lesson_name, score, credit }) => {
            return (
              <div className={styles.gradesLineBody} key={lesson_name + score}>
                <h5 className={styles.subjectText}>{lesson_name}</h5>
                <div className={styles.fractionText}>{score}</div>
                <div className={styles.creditsText}>{credit}</div>
              </div>
            );
          })
        }
      </div>

    </div>
  );
};

export default Body;
