import React, { useEffect } from 'react';
import styles from './index.module.scss';

import Header from '@/components/Header';
import Body from '@/components/Body';
import clsx from 'clsx';
import { fetchGrades } from '@/request';
import store from '@/store';


/**
 * 建议使用真机调试
 */
const App = () => {
  const scoreDispatchers = store.useModelDispatchers('scores');
  const { update } = scoreDispatchers;

  useEffect(() => {
    (async () => {
      const res = await fetchGrades('/api/grade', 1, 2);
      update({ scores: res });
    }
    )();
  }, []);

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
