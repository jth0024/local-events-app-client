// External
import { Component, PropTypes } from 'react';
import { div, h } from 'react-hyperscript-helpers';
// Internal
import LeaTopbar from '../lea-topbar/lea-topbar';
import LeaTabbedBar from '../lea-tabbed-bar/lea-tabbed-bar';
// Local
import './lea-app-shell.less';

export default class LeaAppShell extends Component {
  render() {
    const { children, title, views } = this.props;
    return div('.lea-app-shell', [
      h(LeaTopbar, {
        title,
      }),
      children,
      h(LeaTabbedBar, { views }),
    ]);
  }
}
LeaAppShell.propTypes = {
  children: PropTypes.node,
  events: PropTypes.array,
  title: PropTypes.string,
  views: PropTypes.array,
};
