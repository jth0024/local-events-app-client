// External
import { Component, PropTypes } from 'react';
import { h } from 'react-hyperscript-helpers';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
// Internal
import { setConnectionState, setClientId, setEvents } from '../actions';
import routes from '../routes';
import { getClientId } from '../utilities';
// Local
const socketEvents = [
  'connect',
  'connect_error',
  'connect_timeout',
  'reconnect',
  'reconnecting',
  'reconnect_error',
  'reconnect_failed',
];

class Root extends Component {
  componentWillMount() {
    const { socket, store } = this.props;

    store.dispatch(setClientId(getClientId()));

    socket.on('state', state => {
      store.dispatch(setEvents(state));
    });

    socketEvents.forEach(ev =>
      socket.on(ev, () => {
        store.dispatch(setConnectionState(ev, socket.connected));
      })
    );
  }
  render() {
    const { store, history } = this.props;
    return (
      h(Provider, { store }, [
        h(Router, { history },
          routes
        ),
      ])
    );
  }
}
Root.propTypes = {
  socket: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};
// Export
export default Root;
