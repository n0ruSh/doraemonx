import React from 'react';
import { ListItem, ListItemText, ListSubheader, Avatar, ListItemIcon } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { IMenu } from './interface';

const menuConfig: IMenu[] = [
  {
    title: 'Playgound',
    key: 'playground',
    children: [
      {
        title: 'ramda',
        path: '/playground/ramda',
        key: 'playground-ramda',
      },
      {
        title: 'typescript',
        path: '/playground/typescript',
        key: 'playground-typescript',
      },
      {
        title: 'lodash',
        path: '/playground/lodash',
        key: 'playground-lodash',
      },
    ],
  },
  {
    title: 'Manual',
    key: 'manual',
    children: [
      {
        title: 'Http response code',
        path: '/manual/http-res-code',
        key: 'manual-http-res-code',
      },
    ],
  },
];


const dumpMenu = (menuItem: IMenu) => {
  const { title, children, path } = menuItem;
  if (children != null) {
    return <div>
      <ListSubheader inset>{title}</ListSubheader>
      {children.map(dumpMenu)}
    </div>
  }
  return <ListItem button>
    <ListItemIcon>
      <DashboardIcon />
    </ListItemIcon>
    <ListItemText primary={title} />
  </ListItem>
}

console.log(menuConfig.map(dumpMenu))

export default menuConfig.map(dumpMenu);
