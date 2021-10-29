import type { CurTabSel } from '@/models/curTabSel';
import store from '@/store';
import { tabSelMapping } from '@/utils/tabSelMapping';
import type { ScoreType } from '@/utils/data';

export interface GetGradesRes{
  exist: boolean;
  data: ScoreType[]|null;
}

export interface GetGPARes{
  exist: boolean;
  data: string|null;
}


export const useGrades = () => {
  const grades = store.useModelState('grades');

  const getGrades = (curTabSel: CurTabSel): GetGradesRes => {
    const { gradeSel, semesterSel } = curTabSel;
    const index = tabSelMapping[`${gradeSel}#${semesterSel}`];
    const scores = grades.scores[index - 1];
    let res: GetGradesRes;
    if (scores) {
      res = { exist: true, data: scores };
    } else {
      res = { exist: false, data: null };
    }
    return res;
  };

  const getGPA = (curTabSel: CurTabSel): GetGPARes => {
    const { gradeSel, semesterSel } = curTabSel;
    const index = tabSelMapping[`${gradeSel}#${semesterSel}`];
    const gpaKeys = Object.keys(grades.terms_gpa).sort();
    const term = gpaKeys[index - 1];
    let res: GetGPARes;
    const gpa = grades.terms_gpa[term];
    if (gpa) {
      res = { exist: true, data: gpa };
    } else {
      res = { exist: false, data: null };
    }
    return res;
  };

  const getUsername = () => {
    return grades.username;
  };

  return {
    getGrades,
    getGPA,
    getUsername,
  };
};
