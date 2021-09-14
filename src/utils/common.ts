import { uiModule } from 'mincu-react';
import dayjs from 'dayjs';

export const open = (str: string) => {
  uiModule.toScreen({
    screen: 'Webview',
    params: {
      url: str,
    },
  });
};

export const getCalcTime = (
  time: Date | undefined,
  mode: 'subtract' | 'add',
  value: number,
  unit: dayjs.OpUnitType,
): Date | undefined => {
  if (!time) return undefined;

  const now = dayjs(time as any);
  const changed = now[mode](value, unit);

  const down = now.set('hour', 19);

  if (now.isAfter(down)) {
    return new Date(now.set('hour', 23).set('minute', 59).valueOf());
  }

  // eslint-disable-next-line @iceworks/best-practices/recommend-polyfill
  return new Date(changed.valueOf());
};

const statusMap = {
  [-2]: {
    label: '暂时不入校',
    color: '#FF6356',
  },
  [-1]: {
    label: '延迟入校',
    color: '#FF6356',
  },
  0: {
    label: '未申请',
    color: '#1874ff',
  },
  1: {
    label: '已申请并审核中',
    color: '#faac1c',
  },
  2: {
    label: '审批通过',
    color: '#10C53E',
  },
  3: {
    label: '已入校',
    color: '#13C8A2',
  },
};

export const getStatus = (code: number) => {
  return statusMap[code];
};
