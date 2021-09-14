import network from 'mincu-network';
import ui from 'mincu-ui';

export default {
  state: {
    status: '加载中...',
    labelColor: '#7B7B7B',

    data: {} as any,
  },

  reducers: {
    setData(pre, payload) {
      return { ...pre, ...payload };
    },
  },
  effects: () => ({
    async initialStatus() {
      const loadingTip = await ui.loading('加载中', 0);

      try {
        const { data } = await network.fetch.get('https://os.ncuos.com/api/user/profile/basic');
        (this as any).setData({ data });
      } catch (e) {
        ui.fail('未知错误，请重试');
      } finally {
        loadingTip();
      }
    },
    async submit() {
      const loadingTip = await ui.loading('加载中', 0);

      try {
        const { data } = await network.fetch.post('https://os.ncuos.com/api/freshman/xcqr', {});

        const { status, message } = data;

        if (status) {
          ui.success(message);
        } else {
          ui.fail(message);
        }
      } catch (e) {
        ui.fail('未知错误，请重试');
      } finally {
        loadingTip();
      }
    },
  }),
};
