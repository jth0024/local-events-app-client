// External
import { Component, PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { h, path } from 'react-hyperscript-helpers';
import SvgIcon from 'material-ui/lib/svg-icon';

// Local
const icons = require('./lea-icon-data.json');

export default class LeaIcon extends Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    const { iconName } = this.props;
    return h(SvgIcon, [
      path('.lea-icon__path', { d: icons[iconName] }),
    ]);
  }
}
LeaIcon.propTypes = {
  iconName: PropTypes.string,
};
