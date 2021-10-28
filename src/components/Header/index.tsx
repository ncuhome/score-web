import React, { useMemo } from 'react';
import styles from './index.module.scss';
import CardInfo from '@/components/Header/CardInfo';
import SelTab from '@/components/SelTab';
import store from '@/store';
import { useTabSelClick } from '@/components/SelTab/tabItemUtils';

const Header = () => {
  const [curTabSel, tabSelDispatchers] = store.useModel('curTabSel');
  const { update } = tabSelDispatchers;
  const { semesterSelClick, gradeSelClick } = useTabSelClick(update);

  return (
    <div className={styles.headerCon}>
      <CardInfo />
      <div className={styles.selection}>
        {
          useMemo(() => {
            return (
              <div className={styles.gradeSel}>
                <SelTab desc={'大一'} type={'gra'} onClick={() => gradeSelClick('大一')} curTabSel={curTabSel} />
                <SelTab desc={'大二'} type={'gra'} onClick={() => gradeSelClick('大二')} curTabSel={curTabSel} />
                <SelTab desc={'大三'} type={'gra'} onClick={() => gradeSelClick('大三')} curTabSel={curTabSel} />
                <SelTab desc={'大四'} type={'gra'} onClick={() => gradeSelClick('大四')} curTabSel={curTabSel} />
              </div>);
          }, [curTabSel.gradeSel])
        }
        {
          useMemo(() => {
            return (
              <div className={styles.semesterSel}>
                <SelTab desc={'上学期'} type={'sem'} onClick={() => semesterSelClick('上学期')} curTabSel={curTabSel} />
                <SelTab desc={'下学期'} type={'sem'} onClick={() => semesterSelClick('下学期')} curTabSel={curTabSel} />
                <SelTab desc={'小学期'} type={'sem'} onClick={() => semesterSelClick('小学期')} curTabSel={curTabSel} />
              </div>
            );
          }, [curTabSel.semesterSel])
        }
      </div>
    </div>
  );
};

export default Header;
