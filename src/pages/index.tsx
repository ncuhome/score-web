import React from 'react';
import { WhiteSpace, Button, WingBlank } from 'antd-mobile';
import store from '@/store';
import { useHistory } from 'ice';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

import './index.scss';

/**
 * 建议使用真机调试
 */
const App = () => {
  const [, userDispatchers] = store.useModel('common');
  const { submit } = userDispatchers;
  const history = useHistory();

  return (
    <>
      {/* 状态指示栏 */}
      <>
        <WhiteSpace />
        <Header />
        <WhiteSpace />
      </>

      {/* 提交 */}
      <>
        <WhiteSpace size="lg" />
        <WhiteSpace size="lg" />

        <WingBlank>
          {/* <Button
            type="primary"
            style={{ background: '#1874ff' }}
            onClick={() => {
              submit();
            }}
          >
            点击确认
          </Button> */}
        </WingBlank>
      </>

      {/* LOGO */}
      <Footer />
    </>
  );
};

export default App;
