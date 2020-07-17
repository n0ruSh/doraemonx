import React, { ComponentType, ReactNode } from 'react';
import Home from '@/pages/home';
import { RouteProps, Route } from 'react-router-dom';

const MAP: {
  [key: string]: ComponentType | RouteProps;
} = {
  '/': Home,
};

const dumpConfig = () => {
  const result: ReactNode[] = [];
  Object.keys(MAP).forEach((path: string) => {
    const config = MAP[path];
    let _cfg = config;
    if (typeof config === 'function') {
      _cfg = {
        component: config,
      };
    }
    const routeConfig: RouteProps = {
      ..._cfg,
      path,
    };
    result.push(<Route exact key={path} {...routeConfig} />);
  });
  return result;
};

export default dumpConfig();
