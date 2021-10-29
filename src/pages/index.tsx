import React, { useEffect } from 'react';
import styles from './index.module.scss';

import Header from '@/components/Header';
import Body from '@/components/Body';
import clsx from 'clsx';
import { fetchGrades } from '@/request';
import store from '@/store';
import type { UserGrades } from '@/models/grades';
import Loading from '@/components/Loading';


/**
 * 建议使用真机调试
 */
const App = () => {
  const [grades, gradesDispatchers] = store.useModel('grades');
  const { update } = gradesDispatchers;

  // 拿到所有成绩数据
  useEffect(() => {
    (async () => {
      const res = await fetchGrades();
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      update({ scores: res.scores, username: res.xm, terms_gpa: res.terms_gpa } as UserGrades);
    }
    )();
  }, []);

  if (grades.scores.length === 0) {
    return <Loading />;
  }

  return (
    <div className={clsx([styles.rootCon, styles.fade])}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={clsx([styles.body])} >
        <Body />
      </div>
    </div>
  );
};

export default App;
