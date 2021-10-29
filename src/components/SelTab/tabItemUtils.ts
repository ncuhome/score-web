import type { CurTabSel } from '@/models/curTabSel';
import { useGrades } from '@/hooks/useGrades';
import store from '@/store';
import { emitter } from '@/utils/EventEmiter';

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


export const useTabSelClick = () => {
  const { getGrades } = useGrades();
  const [curTabSel, tabSelDispatchers] = store.useModel('curTabSel');
  const { update } = tabSelDispatchers;

  const gradeSelClick = (desc: CurTabSel['gradeSel']) => {
    const res = getGrades({ gradeSel: desc, semesterSel: curTabSel.semesterSel });
    if (res.exist) {
      update({ gradeSel: desc });
    } else {
      emitter.emit<boolean>('showTab', false);
    }
  };

  const semesterSelClick = (desc: CurTabSel['semesterSel']) => {
    const res = getGrades({ gradeSel: curTabSel.gradeSel, semesterSel: desc });
    if (res.exist) {
      update({ semesterSel: desc });
    } else {
      emitter.emit<boolean>('showTab', false);
    }
  };


  return {
    gradeSelClick,
    semesterSelClick,
  };
};
