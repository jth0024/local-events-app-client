import _ from 'lodash';
import * as ActionTypes from '../actions';

export const socketInfo = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.SET_CLIENT_ID:
      return setClientId(state, action.id);
    case ActionTypes.SET_CONNECTION_STATE:
      return setConnectionState(state, action.state, action.connected);
    default:
      return state;
  }
};

function setClientId(state, id) {
  return _.merge({}, state, {
    clientId: id,
  });
}

function setConnectionState(state, connectionState, connected) {
  return _.merge({}, state, {
    conection: {
      state: connectionState,
      connected,
    },
  });
}
