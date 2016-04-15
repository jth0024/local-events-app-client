// External
import AppBar from 'material-ui/lib/app-bar';
import { Component, PropTypes } from 'react';
import { h } from 'react-hyperscript-helpers';
// Internal
import LeaIcon from '../lea-icon/lea-icon';
// Local
import './lea-topbar.less';

export default class LeaTopbar extends Component {
  render() {
    const { title } = this.props;
    return h(AppBar, {
      className: 'lea-topbar',
      showMenuIconButton: false,
      title,
    });
  }
}
LeaTopbar.propTypes = {
  title: PropTypes.string,
};
