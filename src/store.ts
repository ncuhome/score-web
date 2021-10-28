import { createStore } from '@ice/store';
import common from '@/models/common';
import curTabSel from '@/models/curTabSel';
import grades from '@/models/grades';

const store = createStore({
  common,
  curTabSel,
  grades,
});

export default store;
