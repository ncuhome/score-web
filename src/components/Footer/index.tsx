import React from 'react';
import logo from '@/image/logo.svg';
import { useSafeArea } from 'mincu-react';

function Footer() {
  const { bottom } = useSafeArea();

  return (
    <>
      <div style={{ height: 60 }} />
      <div style={{ textAlign: 'center' }}>
        <img src={logo} alt={'logo'} width={140} />
        <div style={{ color: '#a5a5a5', marginTop: 5 }}>南昌大学家园工作室</div>
      </div>
      <div style={{ height: bottom + 30 }} />
    </>
  );
}

export default Footer;
