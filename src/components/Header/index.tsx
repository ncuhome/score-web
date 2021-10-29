import React, { useEffect, useRef, useState } from 'react';
import styles from './index.module.scss';
import CardInfo from '@/components/Header/CardInfo';
import SelTab from '@/components/SelTab';
import { emitter } from '@/utils/EventEmiter';
import clsx from 'clsx';
import Background from '@/components/Background';


const Header = () => {
  const [showTab, setShow] = useState(true);
  const timerRef = useRef<NodeJS.Timeout>();
  useEffect(() => {
    emitter.on<boolean>('showTab', (data) => {
      setShow(data);
      timerRef.current = setTimeout(() => {
        setShow(true);
      }, 2000);
    });
  }, []);

  const handleClick = () => {
    console.log('handleClick');
    setShow(true);
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  };

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
        <div
          onClick={handleClick}
          className={clsx([styles.messageText, !showTab && styles.slideDown])}
        >
          <div>还没有这个学期的成绩哦~</div>
        </div>
        <div
          onClick={handleClick}
          style={{ display: !showTab ? 'flex' : 'none' }}
          className={clsx([styles.messageText, !showTab && styles.slideDown])}
        >
          <Background />
        </div>
      </div>
    </div>
  );
};

export default Header;
