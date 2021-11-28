import React, { useEffect, useMemo, useRef, useState } from 'react';
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
  const aniRef = useRef<NodeJS.Timeout>();

  // 切换tab重新获取成绩
  useEffect(() => {
    const res = getGrades(curTabSel);
    if (res.exist) {
      setGrades(res.data as ScoreType[]);
      setAni(true);
      if (aniRef.current) {
        clearTimeout(aniRef.current);
      }
      aniRef.current = setTimeout(() => {
        setAni(false);
        aniRef.current = undefined;
      }, 400);
    }
  }, [curTabSel.gradeSel, curTabSel.semesterSel]);

  const renderHeader = useMemo(() => {
    return (
      <div className={clsx([styles.gradesLineHeader])}>
        <div className={styles.subjectTitle}>学科</div>
        <div className={styles.fractionTitle}>成绩</div>
        <div className={styles.creditsTitle}>学分</div>
      </div>
    );
  }, []);

  return (
    <div className={styles.gradesLines}>
      {renderHeader}
      <div className={clsx([styles.gradesArea, ani && styles.scaleUp])}>
        {grades &&
          grades.map(({ lesson_name, score, credit, course_type }) => {
            return (
              <div className={clsx([styles.gradesLineBody])} key={lesson_name + score}>
                <div style={{ flex: 1 }}>
                  <div className={styles.courseTitle}>{lesson_name}</div>
                  <div className={styles.typeTitle}>{course_type}</div>
                </div>
                <div className={styles.fractionText}>{score}</div>
                <div className={styles.creditsText}>{credit}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Body;
