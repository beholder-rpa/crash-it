import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { observer } from 'mobx-react';

import DefaultLayout from '@layouts/DefaultLayout';

const RunNGun = dynamic(() => import('@modules/Protos/RunNGun'), {
  ssr: false,
});

const RunNGunTestPage: NextPage = () => {
  return (
    <DefaultLayout>
      <RunNGun />
    </DefaultLayout>
  );
};

export default observer(RunNGunTestPage);
