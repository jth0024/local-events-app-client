// External
import merge from 'lodash/merge';
// Internal
import { getLocation } from '../utilities/location';
// Local
const api = socket => store => next => action => {
  if (action.meta && action.meta.remote) {
    const { clientId } = store.getState();
    const location = getLocation();
    console.log(location);
    socket.emit('action', merge({}, action, { clientId }));
  }
  return next(action);
};
// Export
export default api;
