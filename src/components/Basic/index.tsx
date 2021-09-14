import React from 'react';
import { Picker, List } from 'antd-mobile';
import { destinationsData } from '@/utils/data';
import { data as placeData } from '@/utils/third-level-address';
import store from '@/store';

function Basic() {
  const [state, userDispatchers] = store.useModel('common');
  const { origin, destination } = state;
  const { setData } = userDispatchers;

  return (
    <List renderHeader={() => '📄 基本信息'}>
      <Picker
        extra="请选择"
        title={'始发地'}
        data={placeData}
        value={origin}
        onChange={(e: any) => setData({ origin: e })}
      >
        <List.Item arrow="horizontal">始发地</List.Item>
      </Picker>
      <Picker
        extra="请选择"
        title={'目的地'}
        data={destinationsData}
        cols={1}
        value={destination}
        onChange={(e: any) => setData({ destination: e })}
      >
        <List.Item arrow="horizontal">目的地</List.Item>
      </Picker>
    </List>
  );
}

export default Basic;
