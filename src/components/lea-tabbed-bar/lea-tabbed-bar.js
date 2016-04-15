// External
import { merge } from 'lodash';
import { Component, PropTypes } from 'react';
import { div, h } from 'react-hyperscript-helpers';

// Local
import LeaTabbedBarButton from './lea-tabbed-bar-button';
import './lea-tabbed-bar.less';

export default class LeaTabbedBar extends Component {
  render() {
    return div('.lea-tabbed-bar', null,
      this.props.views.map(view =>
        h(LeaTabbedBarButton, merge({}, view, { onClick() {} }))
      )
    );
  }
}
LeaTabbedBar.propTypes = {
  views: PropTypes.array,
};
