import { createStore } from '@ice/store';
import common from '@/models/common';
import curTabSel from '@/models/curTabSel';
import scores from '@/models/scores';

const store = createStore({
  common,
  curTabSel,
  scores,
});

export default store;
