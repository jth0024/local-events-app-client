// External
import { applyMiddleware, createStore } from 'redux';
// Internal
import api from './middleware/api';
import rootReducer from './reducers';
// Local
export default function configureStore(socket, initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(api(socket))
  );
}
