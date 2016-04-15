// External
import { h } from 'react-hyperscript-helpers';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import io from 'socket.io-client';
// Internal
import Root from './containers/Root';
import configureStore from './store';
import './styles/global/index.less';
// Local
const socket = io(`${location.protocol}//${location.hostname}:8090`);
const store = configureStore(socket);
const history = syncHistoryWithStore(browserHistory, store);

render(
  h(Root, { socket, store, history }),
  document.getElementById('app')
);
