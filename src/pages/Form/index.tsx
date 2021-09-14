import React from 'react';
import { WhiteSpace } from 'antd-mobile';
import Time from '@/components/Time';
import Basic from '@/components/Basic';
import Transport from '@/components/Transport';
import Campus from '@/components/Campus';

function Form() {
  return (
    <div>
      {/* 入校时间 */}
      <Time />

      {/* 基本信息 */}
      <Basic />
      <WhiteSpace />

      {/* 交通信息 */}
      <Transport />

      {/* 选择校区 */}
      <Campus />
    </div>
  );
}

export default Form;
