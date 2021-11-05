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
  return scoreRes;
  // TODO
  // return new Promise<ResType>(((resolve) => {
  //   network.fetch({
  //     url: 'https://api.ncuos.com/api/info/scores',
  //     method: 'get',
  //   }).then((res) => {
  //     resolve(res.data);
  //   });
  // }));
};
