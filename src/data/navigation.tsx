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
    url: '/',
    children: [{ title: `Run 'n Gun Test`, icon: <FontAwesomeIcon icon={faPersonRunning} />, url: '/run_n_gun' }],
  },
  {
    title: 'Sprite Editor',
    icon: <FontAwesomeIcon icon={faGrid5} />,
    current: true,
    url: '/sprite_editor',
  },
  { title: 'Tile Editor', icon: <FontAwesomeIcon icon={faGameBoard} />, current: true, url: '/tile_editor' },
  {
    title: 'Character Editor',
    icon: <FontAwesomeIcon icon={faSnowman} />,
    current: true,
    url: '/character_editor',
  },
  { title: 'Mob Editor', icon: <FontAwesomeIcon icon={faAlienMonster} />, current: true, url: '/mob_editor' },
  { title: 'Sound Manager', icon: <FontAwesomeIcon icon={faFolderMusic} />, current: true, url: '/sound_manager' },
];

export default navigation;
