import React, { useEffect, useState } from 'react';
import type { UserGrades } from '@/models/grades';
import type { CurTabSel } from '@/models/curTabSel';

import Body from '@/components/Body';
import Header from '@/components/Header';
import clsx from 'clsx';
import store from '@/store';
import Loading from '@/components/Loading';
import Background from '@/components/Background';
import useTitle from '@/hooks/useTitle';
import { fetchGrades } from '@/request';
import { tabSelMapping } from '@/utils/tabSelMapping';
import { useSafeArea } from 'mincu-react';
import styles from './index.module.scss';

/**
 * 建议使用真机调试
 */
const App = () => {
  const [grades, gradesDispatchers] = store.useModel('grades');
  const tabDispatchers = store.useModelDispatchers('curTabSel');
  const { update } = gradesDispatchers;
  const [isShow, setShow] = useState(false);
  const { bottom } = useSafeArea();

  const changeCurTab = ({ gradeSel, semesterSel }: CurTabSel) => {
    tabDispatchers.update({ gradeSel, semesterSel });
    // 避免闪现默认成绩
    setTimeout(() => {
      setShow(true);
    }, 100);
  };

  useTitle('李清栋的成绩');

  // 拿到所有成绩数据
  useEffect(() => {
    (async () => {
      const res = await fetchGrades();
      update({ scores: res.scores, username: res.xm, terms_gpa: res.terms_gpa_split, terms: res.terms } as UserGrades);
      const key = Object.keys(tabSelMapping)[res.total - 1];
      const gradeSel = key.slice(0, 2);
      const semesterSel = key.slice(3);
      changeCurTab({ gradeSel, semesterSel } as CurTabSel);
    })();
  }, []);

  if (isShow && grades.scores.length !== 0) {
    return (
      <div className={clsx([styles.root])}>
        <div className={styles.header}>
          <Header />
        </div>
        <div className={clsx([styles.body, styles.slideUp])} style={{ marginBottom: bottom || 16 }}>
          <Body />
        </div>
        <Background />
      </div>
    );
  }

  return <Loading />;
};

export default App;
