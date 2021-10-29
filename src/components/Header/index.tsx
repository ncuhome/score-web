import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import CardInfo from '@/components/Header/CardInfo';
import SelTab from '@/components/SelTab';
import { emitter } from '@/utils/EventEmiter';
import clsx from 'clsx';
import Background from '@/components/Background';


const Header = () => {
  const [showTab, setShow] = useState(true);

  useEffect(() => {
    emitter.on<boolean>('showTab', (data) => {
      console.log(data);
      setShow(data);
      setTimeout(() => {
        setShow(true);
      }, 8000);
    });
  }, []);

  return (
    <div className={styles.headerCon}>
      <CardInfo />
      <div className={styles.selection} >
        <div className={clsx([styles.tabWrapper, !showTab && styles.slideDown])}>
          <div className={styles.gradeSel} >
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
        <div className={clsx([styles.messageText, !showTab && styles.slideDown])}>
          <div>没有这个学期的成绩哦~</div>
        </div>
        <div style={{ display: !showTab ? 'flex' : 'none' }} className={clsx([styles.messageText, !showTab && styles.slideDown])}>
          <Background />
        </div>
      </div>
    </div>
  );
};

export default Header;
