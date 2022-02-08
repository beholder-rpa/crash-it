import type { NextPage } from 'next';
import { observer } from 'mobx-react';
import dynamic from 'next/dynamic';

import DefaultLayout from '@layouts/DefaultLayout';

const Game = dynamic(() => import('@components/Game'), {
  ssr: false,
});

const Home: NextPage = () => {
  return (
    <DefaultLayout>
      <Game />
    </DefaultLayout>
  );
};

export default observer(Home);
