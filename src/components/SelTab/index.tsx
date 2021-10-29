import React from 'react';
import styles from './index.module.scss';
import clsx from 'clsx';
import { useTabSelClick } from '@/components/SelTab/tabItemUtils';
import type { CurTabSel } from '@/models/curTabSel';
import store from '@/store';

interface SelTabProps {
  desc: CurTabSel['gradeSel']|CurTabSel['semesterSel'];
  type?: 'gra'|'sem';
}

const SelTab: React.FC<SelTabProps> = ({ desc, type = 'gra' }) => {
  const curTabSel = store.useModelState('curTabSel');
  const { semesterSelClick, gradeSelClick } = useTabSelClick();

  const onClick = type === 'gra' ? () => gradeSelClick(desc as CurTabSel['gradeSel']) : () => semesterSelClick(desc as CurTabSel['semesterSel']);
  const active = type === 'gra' ? curTabSel.gradeSel === desc : curTabSel.semesterSel === desc;
  return (
    <div
      className={clsx([styles.selTab, active && styles.selTabActive])}
      onClick={onClick}
    >
      {desc}
    </div>
  );
};

export default React.memo(SelTab);
