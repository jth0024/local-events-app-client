import _ from 'lodash';
import * as ActionTypes from '../actions';

export const events = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.SET_STATE:
      return setEvents(state, action.state);
    default:
      return state;
  }
};

function setEvents(state, eventsList) {
  return _.merge({}, state, eventsList);
}
