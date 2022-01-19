import type { ScoreType } from '@/utils/data';

export interface UserGrades{
  username: string;
  terms: string[];
  terms_gpa: {
    [time: string]: string;
  };
  scores: ScoreType[][];
}

const state: UserGrades = {
  username: '',
  terms_gpa: {},
  scores: [],
};

export default {
  // 定义 model 的初始 state
  state,
  // 定义改变该模型状态的纯函数
  reducers: {
    update(prevState, payload) {
      return {
        ...prevState,
        ...payload,
      };
    },
  },
};
