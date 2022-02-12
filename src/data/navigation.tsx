import {
  faSnowman,
  faPlay,
  faPersonRunning,
  faGrid5,
  faGameBoard,
  faAlienMonster,
  faFolderMusic,
} from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface Navigation {
  title: string;
  icon?: JSX.Element;
  defaultOpen?: boolean;
  current?: boolean;
  url?: string;
  target?: string;
  children?: Navigation[];
}

const navigation: Navigation[] = [
  {
    title: 'Game',
    icon: <FontAwesomeIcon icon={faPlay} />,
    current: true,
    defaultOpen: true,
    url: '{{foo}}/',
    children: [
      {
        title: `Run 'n Gun Test`,
        icon: <FontAwesomeIcon icon={faPersonRunning} />,
        url: '{{foo}}/run_n_gun',
      },
    ],
  },
  {
    title: 'Sprite Editor',
    icon: <FontAwesomeIcon icon={faGrid5} />,
    current: true,
    url: '{{foo}}/sprite_editor',
  },
  {
    title: 'Tile Editor',
    icon: <FontAwesomeIcon icon={faGameBoard} />,
    current: true,
    url: '{{foo}}/tile_editor',
  },
  {
    title: 'Character Editor',
    icon: <FontAwesomeIcon icon={faSnowman} />,
    current: true,
    url: '{{foo}}/character_editor',
  },
  {
    title: 'Mob Editor',
    icon: <FontAwesomeIcon icon={faAlienMonster} />,
    current: true,
    url: '{{foo}}/mob_editor',
  },
  {
    title: 'Sound Manager',
    icon: <FontAwesomeIcon icon={faFolderMusic} />,
    current: true,
    url: '{{foo}}/sound_manager',
  },
];

export default navigation;
