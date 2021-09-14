import React from 'react';
import { DatePicker, List } from 'antd-mobile';
import { getCalcTime } from '@/utils/common';
import store from '@/store';

const now = new Date(Date.now());

function Time() {
  const [state, userDispatchers] = store.useModel('common');
  const { reachDate, reachStartTime, reachEndTime } = state;
  const { setData } = userDispatchers;

  return (
    <List renderHeader={() => '⏰ 入校时间'} renderFooter={() => '时间段最长为五个小时'}>
      <DatePicker
        mode="date"
        title={'入校日期'}
        value={reachDate}
        onChange={(e: any) => setData({ reachDate: e })}
        minDate={now}
      >
        <List.Item arrow="horizontal">入校日期</List.Item>
      </DatePicker>
      <DatePicker
        mode="time"
        title={'开始时间'}
        value={reachStartTime}
        onChange={(e: any) => setData({ reachStartTime: e })}
      >
        <List.Item arrow="horizontal">开始时间</List.Item>
      </DatePicker>
      <DatePicker
        mode="time"
        title={'结束时间'}
        value={reachEndTime}
        onChange={(e: any) => setData({ reachEndTime: e })}
        minDate={reachStartTime}
        maxDate={getCalcTime(reachStartTime, 'add', 5, 'hours')}
      >
        <List.Item arrow="horizontal">结束时间</List.Item>
      </DatePicker>
    </List>
  );
}

export default Time;
