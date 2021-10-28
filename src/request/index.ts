import network from 'mincu-network';
import { scoreRes } from '@/utils/data';

/**
 * 获取基础信息
 */
export const getBasic = async (): Promise<any> => {
  return network.fetch({
    url: 'https://os.ncuos.com/api/user/profile/basic',
    method: 'get',
  });
};

export const fetchGrades = () => {
  const fetchRes = scoreRes;
  return fetchRes;
  // return new Promise(((resolve) => {
  //   network.fetch({
  //     url,
  //     method: 'get',
  //     params: {
  //       grade,
  //       semester,
  //     },
  //   }).then((res) => {
  //     resolve(res.data);
  //   });
  // }));
};
