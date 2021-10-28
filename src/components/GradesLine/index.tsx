import React from 'react';
import styles from './index.module.scss';

interface GradesLineProps {
  subjectText: string|number;
  fractionText: string|number;
  creditsText: string|number;
}

const GradesLine: React.FC<GradesLineProps> = ({ subjectText = '', fractionText = '', creditsText = '' }) => {
  return (
    <div className={styles.gradesLine}>
      <div className={styles.subjectText}>{subjectText}</div>
      <div className={styles.fractionText}>{fractionText}</div>
      <div className={styles.creditsText}>{creditsText}</div>
    </div>
  );
};

export default GradesLine;
