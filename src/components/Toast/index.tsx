import * as React from 'react';
import styles from './index.module.scss';
import clsx from 'clsx';

interface Props {
  type: 'normal' | 'success' | 'warning' | 'error';
  visible: boolean;
  closeToast?: () => void;
  desc?: string;
  ref?: any;
}

const getInfoColor = (type: string): string => {
  let color: string;
  switch (type) {
    case 'success':
      color = 'green';
      break;
    case 'warning':
      color = 'yellow';
      break;
    case 'error':
      color = 'red';
      break;
    default:
      color = '#2FCBF3';
  }
  return color;
};

const Toast: React.FC<Props> = React.forwardRef(({ type, desc, closeToast, visible }, ref: any) => {

  return (
    <div className={clsx(styles.container, visible ? styles.show : styles.hide)} ref={ref}>
      <div className={styles.background} onClick={() => closeToast && closeToast()} />
      <div className={styles.content}>
        {desc && <div className={styles.desc}>{desc}</div>}
      </div>
    </div>
  );
});

export default Toast;
