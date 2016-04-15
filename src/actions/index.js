export const GET_EVENTS = 'GET_EVENTS';

export function getEvents() {
  return {
    meta: { remote: true },
    type: GET_EVENTS,
  };
}


export const SET_CLIENT_ID = 'SET_CLIENT_ID';

export function setClientId(id) {
  return {
    type: SET_CLIENT_ID,
    id,
  };
}


export const SET_CONNECTION_STATE = 'SET_CONNECTION_STATE';

export function setConnectionState(state, connected) {
  return {
    type: SET_CONNECTION_STATE,
    connected,
    state,
  };
}


export const SET_EVENTS = 'SET_EVENTS';

export function setEvents(state) {
  return {
    type: SET_EVENTS,
    state,
  };
}
