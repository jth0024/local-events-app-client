import { Component, PropTypes } from 'react';
import { h } from 'react-hyperscript-helpers';
import { connect } from 'react-redux';

import LeaEventsList from '../components/lea-events-list/lea-events-list';


class Home extends Component {
  render() {
    const { events } = this.props;
    return (
      h(LeaEventsList, {
        events,
      })
    );
  }
}
Home.propTypes = {
  events: PropTypes.array,
};

function mapStateToProps(state) {
  const summary = `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
    ut aliquip ex ea commodo consequat. Duis aute irure dolor in
    reprehenderit in voluptate velit esse cillum dolore eu
    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
    sunt in culpa qui officia deserunt mollit anim id est laborum`;
  return {
    events: [
      {
        id: 1,
        name: 'Event 1',
        summary,
      },
      {
        id: 2,
        name: 'Event 2',
        summary,
      },
      {
        id: 3,
        name: 'Event 3',
        summary,
      },
      {
        id: 4,
        name: 'Event 4',
        summary,
      },
      {
        id: 5,
        name: 'Event 5',
        summary,
      },
    ],
  };
}

export default connect(mapStateToProps)(Home);
