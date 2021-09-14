import React, { useEffect, useState } from 'react';
import Loading from '../Loading';
import dataModule from 'mincu-data';
import * as md5 from 'blueimp-md5';
import * as get from 'lodash.get';
import { useAppReady } from 'mincu-react';
import uiModule from 'mincu-ui';

const MincuProvider: React.FC = ({ children = null }) => {
  const isReady = useAppReady(() => {
    // eslint-disable-next-line no-alert
    alert('请使用南大家园打开');
  });

  const [isMine, setIsMine] = useState(false);

  useEffect(() => {
    if (!isReady) return;

    const url = new URL(location.href);
    const id = url.searchParams.get('id');
    const xh = get(dataModule.appData, 'user.profile.entireProfile.base_info.xh');

    const expectKey = md5(xh, 'incu');

    if (id === expectKey) {
      setIsMine(true);
    } else {
      uiModule.fail('请不要扫描他人的报到单', 1);
      uiModule.exit();
    }
  }, [isReady]);

  if (isReady && isMine) {
    // 展示个人信息与招新广告
    return <>{children}</>;
  }

  return (
    <>
      <Loading />
    </>
  );
};

export default MincuProvider;
