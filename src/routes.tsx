import React from 'react';

interface RouteType {
  path: string;
  name: string;
  exact: boolean;
  component: React.FunctionComponent;
}

const Shop = React.lazy(() => import('./views/shop/Shop'));
const Basket = React.lazy(() => import('./views/basket/Basket'));

const routes: Array<RouteType> = [
  { path: '/', name: 'Shop Main', component: Shop, exact: true },
  { path: '/basket', name: 'Basket', component: Basket, exact: true },
];

export default routes;
