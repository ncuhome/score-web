import network from 'mincu-network';

/**
 * 获取基础信息
 */
export const getBasic = async (): Promise<any> => {
  return network.fetch({
    url: 'https://os.ncuos.com/api/user/profile/basic',
    method: 'get',
  });
};

export const fetchGrades = (url: string, grade: number, semester: number) => {
  return new Promise(((resolve) => {
    network.fetch({
      url,
      method: 'get',
      params: {
        grade,
        semester,
      },
    }).then((res) => {
      resolve(res.data);
    });
  }));
};
