// External
import { h } from 'react-hyperscript-helpers';
import { IndexRedirect, Route } from 'react-router';
// Internal
import App from './containers/app';
import Create from './containers/create';
import Explore from './containers/explore';
import Home from './containers/home';
// Local
const routes = [
  h(Route, { path: '/', component: App }, [
    h(IndexRedirect, { to: '/home' }),
    h(Route, { path: '/home', component: Home }),
    h(Route, { path: '/explore', component: Explore }),
    h(Route, { path: '/me', component: Explore }),
  ]),
  h(Route, { path: '/create', component: Create }),
];
// Export
export default routes;
