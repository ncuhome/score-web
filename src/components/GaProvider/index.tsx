import React, { useEffect } from 'react';
import ga from 'ga-lite';

export const GaProvider: React.FC = ({ children = null }) => {
  useEffect(() => {
    if (typeof navigator !== 'undefined') {
      ga('create', 'UA-80324378-21', 'auto');
      ga('send', 'pageview');
    }
  }, []);
  return (
    <>
      {children}
    </>
  );
};

