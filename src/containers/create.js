// External
import { Component } from 'react';
import { div } from 'react-hyperscript-helpers';
import { connect } from 'react-redux';
// Local
class Create extends Component {
  render() {
    return (
      div(
        ['Create']
      )
    );
  }
}

function mapStateToProps() {
  return {};
}
// Export
export default connect(mapStateToProps)(Create);
