import React, { Fragment, useEffect, useMemo, useRef, useState } from 'react';
import styles from './index.module.scss';
import clsx from 'clsx';
import SelTab from '@/components/Tab';
import Background from '@/components/Background';
import { emitter } from '@/utils/EventEmiter';
import Emo from '@/components/Header/SelectionTab/emo';

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

  return (
    <>
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
        {
          useMemo(() => {
            return (
              <Fragment>
                <div onClick={handleClick} className={clsx([styles.emo, !showTab && styles.slideDown])}>
                  <div>
                    <Emo />
                  </div>
                </div>
                <div
                  onClick={handleClick}
                  className={clsx([styles.messageText, !showTab && styles.slideDown])}
                >
                  <div>还没有这个学期的成绩哦~</div>
                </div>
                <div
                  style={{ display: !showTab ? 'block' : 'none' }}
                  className={clsx([styles.bg])}
                >
                  <Background />
                </div>
              </Fragment>
            );
          }, [showTab])
        }

      </div>
    </>
  );
};

export default SelectionTab;
