import React from 'react';
import Loadable from 'react-loadable';

const Loading = () => <div></div>
const timeout = 1000

export const Home = Loadable({
    loader: () => import('CONTAINERS/home/index'),
    loading: Loading,
    timeout: timeout
})

export const List = Loadable({
    loader: () => import('CONTAINERS/list/index'),
    loading: Loading,
    timeout: timeout
})

const routerConfig = [{
    path: '/',
    component: Home,
    exact: true
}, {
    path: '/list',
    component: List,
    exact: true
}]

export default routerConfig