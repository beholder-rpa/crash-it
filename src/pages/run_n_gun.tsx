import type { NextPage } from 'next';
import { observer } from 'mobx-react';

import DefaultLayout from '@layouts/DefaultLayout';
import RunNGun from '@modules/Protos/RunNGun';

const RunNGunTestPage: NextPage = () => {
  return (
    <DefaultLayout>
      <RunNGun />
    </DefaultLayout>
  );
};

export default observer(RunNGunTestPage);
