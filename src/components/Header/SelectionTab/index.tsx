import React, { useEffect, useMemo, useRef, useState } from 'react';
import styles from './index.module.scss';
import clsx from 'clsx';
import SelTab from '@/components/Tab';
import Background from '@/components/Background';
import { emitter } from '@/utils/EventEmiter';

const SelectionTab = () => {
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
    setShow(true);
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  };

  const renderEmpty = useMemo(() => {
    return (
      <>
        <div onClick={handleClick} className={clsx([styles.emo, !showTab && styles.slideDown])}>
          <div>
            <img src='/public/thinking.svg' style={{width:50}} alt={'sad'}/>
          </div>
        </div>
        <div onClick={handleClick} className={clsx([styles.messageText, !showTab && styles.slideDown])}>
          <div>还没有出成绩吗?</div>
        </div>
        <div style={{ display: !showTab ? 'block' : 'none' }} className={clsx([styles.bg])}>
          <Background />
        </div>
      </>
    );
  }, [showTab]);

  return (
    <>
      <div className={clsx([styles.slideUp, styles.selection])}>
        <div className={clsx([styles.tabWrapper, !showTab && styles.slideDown])}>
          <div className={styles.gradeSel}>
            <SelTab desc={'大一'} type={'gra'} />
            <SelTab desc={'大二'} type={'gra'} />
            <SelTab desc={'大三'} type={'gra'} />
            <SelTab desc={'大四'} type={'gra'} />
          </div>
          <div className={styles.semesterSel}>
            <SelTab desc={'小学期'} type={'sem'} />
            <SelTab desc={'上学期'} type={'sem'} />
            <SelTab desc={'下学期'} type={'sem'} />
          </div>
        </div>
        {renderEmpty}
      </div>
    </>
  );
};

export default SelectionTab;
