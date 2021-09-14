import { runApp, IAppConfig } from 'ice';
import React from 'react';
import 'antd-mobile/dist/antd-mobile.css';

import MincuProvider from '@/components/MincuProvider';
import { GaProvider } from '@/components/GaProvider';

if (process.env.NODE_ENV === 'development') {
  import('mincu-debug').then(({ default: debugModule }) => {
    debugModule.applyConsole();
  });
}

const appConfig: IAppConfig = {
  app: {
    rootId: 'ice-container',
    addProvider: ({ children }) => <MincuProvider><GaProvider>{children}</GaProvider></MincuProvider>,
  },
  router: {
    type: 'browser',
  },
};

runApp(appConfig);
