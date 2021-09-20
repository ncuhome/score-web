import React from 'react';
import Loading from '../Loading';
import { useAppReady } from 'mincu-react';

const MincuProvider: React.FC = ({ children = null }) => {
  const isReady = useAppReady(() => {
    // eslint-disable-next-line no-alert
    alert('请使用南大家园打开');
  });

  // return <>{children}</>;
  // pc测试

  if (isReady) {
    return <>{children}</>;
  }

  return (
    <>
      <Loading />
    </>
  );
};

export default MincuProvider;
