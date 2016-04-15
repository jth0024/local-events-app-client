import _ from 'lodash';
import * as ActionTypes from '../actions';

export const messaging = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.SET_MESSAGE:
      return _.merge({}, state, {
        message: action.message,
      });
    default:
      return state;
  }
};
