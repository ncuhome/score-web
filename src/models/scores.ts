export interface CurTabSel{
  scores: [];
}

const state: CurTabSel = {
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
