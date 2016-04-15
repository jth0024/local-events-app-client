import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import { events } from './events';
import { socketInfo } from './socketInfo';

export default combineReducers({
  events,
  socketInfo,
  routing,
});
