import network from 'mincu-network';
import { ResType } from '@/utils/data';

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
  return new Promise<ResType>(((resolve) => {
    network.fetch({
      url: 'http://api.ncuos.com/api/info/scores',
      method: 'get',
    }).then((res) => {
      resolve(res.data);
    });
  }));
};
