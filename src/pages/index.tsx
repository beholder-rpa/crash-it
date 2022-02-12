import type { NextPage } from 'next';
import { observer } from 'mobx-react';

import DefaultLayout from '@layouts/DefaultLayout';
import CrashIt from '@modules/CrashIt';

const Home: NextPage = () => {
  return (
    <DefaultLayout>
      <CrashIt />
    </DefaultLayout>
  );
};

export default observer(Home);
