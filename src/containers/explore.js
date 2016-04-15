// External
import { Component } from 'react';
import { div } from 'react-hyperscript-helpers';
import { connect } from 'react-redux';
// Local
class Explore extends Component {
  render() {
    return (
      div(
        ['Explore']
      )
    );
  }
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Explore);
