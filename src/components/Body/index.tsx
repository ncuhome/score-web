import React, { useEffect, useMemo, useState } from 'react';
import styles from './index.module.scss';
import store from '@/store';
import { useGrades } from '@/hooks/useGrades';
import type { ScoreType } from '@/utils/data';
import clsx from 'clsx';

const Body = () => {
  const { getGrades } = useGrades();
  const curTabSel = store.useModelState('curTabSel');
  const [grades, setGrades] = useState<ScoreType[]>([]);
  const [ani, setAni] = useState(false);

  useEffect(() => {
    const res = getGrades(curTabSel);
    if (res.exist) {
      setGrades(res.data as ScoreType[]);
      setAni(true);
      setTimeout(() => {
        setAni(false);
      }, 500);
    }
  }, [curTabSel.gradeSel, curTabSel.semesterSel]);

  return (
    <div className={styles.gradesLines}>
      {
        useMemo(() => {
          return (
            <div className={styles.gradesLineHeader}>
              <div className={styles.subjectTitle}>学科</div>
              <div className={styles.fractionTitle}>成绩</div>
              <div className={styles.creditsTitle}>学分</div>
            </div>
          );
        }, [])
      }
      <div className={clsx([styles.gradesArea, ani && styles.scaleUp])} >
        {
          grades && grades.map(({ lesson_name, score, credit }) => {
            return (
              <div
                className={clsx([styles.gradesLineBody])}
                key={lesson_name + score}
              >
                <div className={styles.subjectText}>{lesson_name}</div>
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
