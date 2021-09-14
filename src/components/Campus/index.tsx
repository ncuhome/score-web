import React from 'react';
import { Radio, List } from 'antd-mobile';
import { campusData } from '@/utils/data';
import store from '@/store';

function Campus() {
  const [state, userDispatchers] = store.useModel('common');
  const { campus } = state;
  const { setData } = userDispatchers;

  return (
    <List renderHeader={() => '🏝 选择校区'}>
      {campusData.map((i) => (
        <Radio.RadioItem key={i.value} checked={campus === i.value} onChange={() => setData({ campus: i.value })}>
          {i.label}
        </Radio.RadioItem>
      ))}
    </List>
  );
}

export default Campus;
