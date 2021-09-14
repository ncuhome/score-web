import React from 'react';
import { WingBlank, Card } from 'antd-mobile';
import dataModule from 'mincu-data';
import network from 'mincu-network';
import store from '@/store';
import get from 'lodash.get';

function Header() {
  const [state, userDispatchers] = store.useModel('common');
  const { initialStatus } = userDispatchers;

  const getName = () => {
    const sex = dataModule.appData.user.profile.entireProfile.base_info.xb.dm ? '👨‍🎓' : '👩‍🎓';
    const { name } = dataModule.appData.user.profile.basicProfile;
    return `${sex} ${name}`;
  };

  React.useEffect(() => {
    network.token = dataModule.appData.user.token;
    initialStatus();
  }, []);

  return (
    <WingBlank size="md">
      <Card full>
        <Card.Header
          style={{ background: '#1874ff' }}
          title={getName()}
          extra={dataModule.appData.user.profile.basicProfile.department}
        />
        <Card.Body>
          点击现场确认之前，请先完成「云家园」中的自助报到，否则无法完成现场确认
          <br />
          学号：{get(state.data, 'base_info.xh') ?? '加载中'}
          <br />
          寝室号：{get(state.data, 'base_info.qsh') ?? '加载中'}
          <br />
        </Card.Body>
        {/* <Card.Footer
          content={
            <>
              当前状态: <span style={{ color: state.labelColor }}>{state.status}</span>
            </>
          }
        /> */}
      </Card>
    </WingBlank>
  );
}

export default Header;
