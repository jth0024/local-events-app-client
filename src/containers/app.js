import { Component, PropTypes } from 'react';
import { h } from 'react-hyperscript-helpers';
import { connect } from 'react-redux';
import { getEvents } from '../actions';
import LeaAppShell from '../components/lea-app-shell/lea-app-shell';

class App extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    const currentRouteName = getNameFromPath(this.props.location.pathname);
    const views = getViews(this.props.route.childRoutes);
    this.setState({
      currentRouteName,
      views,
    });
  }
  componentWillUpdate() {
  }
  render() {
    const { currentRouteName, views } = this.state;
    return (
      h(LeaAppShell, {
        title: currentRouteName,
        views,
      }, [
        this.props.children,
      ])
    );
  }
}

App.propTypes = {
  children: PropTypes.node,
  location: PropTypes.object,
  socketInfo: PropTypes.object,
  route: PropTypes.object,
};

function getNameFromPath(pathname) {
  return pathname.split('/')[1].toLowerCase();
}

function getViews(routes) {
  return routes
    .map(route => {
      const name = getNameFromPath(route.path);
      return {
        name,
        path: route.path,
      };
    });
}

function mapStateToProps(state) {
  return {
    socketInfo: state.socketInfo,
  };
}

export default connect(mapStateToProps, { getEvents })(App);
