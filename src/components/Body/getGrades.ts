import type { CurTabSel } from '@/models/curTabSel';


export const useGrades = () => {
  const getGrades = (curTabSel: CurTabSel) => {
    const { gradeSel, semesterSel } = curTabSel;

    return [];
  };

  return {
    getGrades,
  };
};
