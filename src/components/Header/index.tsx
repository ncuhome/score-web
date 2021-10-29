import React from 'react';
import styles from './index.module.scss';
import CardInfo from '@/components/Header/CardInfo';
import SelTab from '@/components/SelTab';


const Header = () => {
  return (
    <div className={styles.headerCon}>
      <CardInfo />
      <div className={styles.selection}>
        <div className={styles.gradeSel}>
          <SelTab desc={'大一'} type={'gra'} />
          <SelTab desc={'大二'} type={'gra'} />
          <SelTab desc={'大三'} type={'gra'} />
          <SelTab desc={'大四'} type={'gra'} />
        </div>
        <div className={styles.semesterSel}>
          <SelTab desc={'上学期'} type={'sem'} />
          <SelTab desc={'下学期'} type={'sem'} />
          <SelTab desc={'小学期'} type={'sem'} />
        </div>
      </div>
    </div>
  );
};

export default Header;
