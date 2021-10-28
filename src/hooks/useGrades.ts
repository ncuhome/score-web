import type { CurTabSel } from '@/models/curTabSel';
import store from '@/store';
import { tabSelMapping } from '@/utils/tabSelMapping';


export const useGrades = () => {
  const grades = store.useModelState('grades');

  const getGrades = (curTabSel: CurTabSel) => {
    const { gradeSel, semesterSel } = curTabSel;
    const index = tabSelMapping[`${gradeSel}#${semesterSel}`];
    console.log(index);
    return grades.scores[index - 1];
  };

  const getGPA = (curTabSel: CurTabSel) => {
    const { gradeSel, semesterSel } = curTabSel;
    const index = tabSelMapping[`${gradeSel}#${semesterSel}`];
    const gpaKeys = Object.keys(grades.terms_gpa).sort();
    const term = gpaKeys[index - 1];
    return grades.terms_gpa[term];
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
