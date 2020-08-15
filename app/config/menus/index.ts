import { IMenu } from './interface';

const menuConfig: IMenu[] = [
  {
    title: '架构管理',
    key: 'arch',
    children: [
      {
        title: '岗位管理',
        path: '/positions',
        key: 'positions',
      },
      {
        title: '员工管理',
        path: '/employees',
        key: 'employees',
      },
    ],
  },
  {
    title: '复盘管理',
    key: 'replay',
    children: [
      {
        title: '数据看板',
        path: '/databoard',
        key: 'databoard',
      },
    ],
  },
];

export default menuConfig;
