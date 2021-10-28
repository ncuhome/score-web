import type { CurTabSel } from '@/models/curTabSel';

export interface GradeSelItems {
  大一;
  大二;
  大三;
  大四;
}

export interface SemesterSelItems{
  上学期;
  下学期;
  小学期;
}

export interface SelProps{
  type: 'gra'|'sem';
  desc: keyof GradeSelItems|keyof SemesterSelItems;
}

export const useTabSelClick = (update: (data: any) => void) => {
  const gradeSelClick = (desc: CurTabSel['gradeSel']) => {
    update({ gradeSel: desc });
  };
  const semesterSelClick = (desc: CurTabSel['semesterSel']) => {
    update({ semesterSel: desc });
  };

  return {
    gradeSelClick,
    semesterSelClick,
  };
};
