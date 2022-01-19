import type { GradeSelItems, SemesterSelItems } from '@/components/Tab/tabItemUtils';

export interface CurTabSel{
  gradeSel: keyof GradeSelItems;
  semesterSel: keyof SemesterSelItems;
}

const state: CurTabSel = {
  gradeSel: '大一',
  semesterSel: '上学期',
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
