import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { observer } from 'mobx-react';

import DefaultLayout from '@layouts/DefaultLayout';

const CrashIt = dynamic(() => import('@modules/CrashIt'), {
  ssr: false,
});

const Home: NextPage = () => {
  return (
    <DefaultLayout>
      <CrashIt />
    </DefaultLayout>
  );
};

export default observer(Home);
