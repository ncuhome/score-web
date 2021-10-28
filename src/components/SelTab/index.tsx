import React from 'react';
import styles from './index.module.scss';
import clsx from 'clsx';
import { SelProps } from '@/components/SelTab/tabItemUtils';
import type { CurTabSel } from '@/models/curTabSel';

interface SelTabProps {
  desc: SelProps['desc'];
  type?: 'gra'|'sem';
  curTabSel: CurTabSel;
  onClick?: () => void;
}

const SelTab: React.FC<SelTabProps> = ({ desc, type = 'gra', curTabSel, onClick }) => {

  let active;
  if (type === 'gra') {
    active = curTabSel.gradeSel === desc;
  } else {
    active = curTabSel.semesterSel === desc;
  }

  return (
    <div className={clsx([styles.selTab, active && styles.selTabActive])} onClick={onClick}>
      {desc}
    </div>
  );
};

export default React.memo(SelTab);
