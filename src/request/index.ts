// import network from 'mincu-network';
// import type { ResType } from '@/utils/data';
import {scoreRes} from "@/utils/data";

export const fetchGrades = async () => {
  // const res = await network.fetch.get<ResType>('https://api.ncuos.com/api/info/scores')
  // // return res.data
  return scoreRes
};
