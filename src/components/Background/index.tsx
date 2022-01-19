import React from 'react';
import styles from './index.module.scss';
import { animated, useSpring } from 'react-spring';

const Background = () => {
  const blueStyle = useSpring({
    from: { x: -20, y: '70vh' },
    to: { x: 10, y: '68vh' },
    loop: { reverse: true },
    config: { duration: 4000, frequency: 1 },
  });

  const redStyle = useSpring({
    from: { y: '10vh' },
    to: { y: '15vh' },
    loop: { reverse: true },
    config: { duration: 4000, frequency: 1 },
  });

  return (
    <div className={styles.background}>
      <animated.div className={styles.left} style={blueStyle} />
      <animated.div className={styles.right} style={redStyle} />
    </div>
  );
};

export default Background;
