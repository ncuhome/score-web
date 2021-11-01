import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';

import Header from '@/components/Header';
import Body from '@/components/Body';
import clsx from 'clsx';
import { fetchGrades } from '@/request';
import store from '@/store';
import type { UserGrades } from '@/models/grades';
import Loading from '@/components/Loading';
import { tabSelMapping } from '@/utils/tabSelMapping';
import type { CurTabSel } from '@/models/curTabSel';

/**
 * 建议使用真机调试
 */
const App = () => {
  const [grades, gradesDispatchers] = store.useModel('grades');
  const tabDispatchers = store.useModelDispatchers('curTabSel');
  const { update } = gradesDispatchers;
  const [isShow, setShow] = useState(false);

  const changeCurTab = ({ gradeSel, semesterSel }: CurTabSel) => {
    tabDispatchers.update({ gradeSel, semesterSel });
    setTimeout(() => {
      setShow(true);
    }, 0);
  };

  // 拿到所有成绩数据
  useEffect(() => {
    (async () => {
      const res = await fetchGrades();
      update({ scores: res.scores, username: res.xm, terms_gpa: res.terms_gpa } as UserGrades);
      const key = Object.keys(tabSelMapping)[res.total - 1];
      const gradeSel = key.slice(0, 2);
      const semesterSel = key.slice(3);
      changeCurTab({ gradeSel, semesterSel } as CurTabSel);
    }
    )();
  }, []);

  if (grades.scores.length === 0) {
    return <Loading />;
  }

  return (
    <div className={clsx([styles.rootCon])} style={{ opacity: isShow ? 1 : 0 }} >
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
