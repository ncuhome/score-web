import React from 'react';
import styles from './index.module.scss';
import CardInfo from '@/components/Header/CardInfo';
import SelectionTab from '@/components/Header/SelectionTab';


const Header = () => {
  return (
    <div className={styles.headerCon}>
      <CardInfo />
      <SelectionTab />
    </div>
  );
};

export default Header;
