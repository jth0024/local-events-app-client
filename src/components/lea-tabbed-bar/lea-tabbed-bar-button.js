// External
import classNames from 'classnames';
import { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { div, h } from 'react-hyperscript-helpers';
// Internal

// Local
import './lea-tabbed-bar-button.less';

export default class LeaTabbedBarButton extends Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    const classDefinitions = getClassDefinitions(this.props);
    const { name, path } = this.props;
    return (
      div('.lea-tabbed-bar-button', {
        className: classDefinitions,
      }, [
        h(Link, '.lea-tabbed-bar-button__link', {
          activeClassName: 'lea-tabbed-bar-button__link--active',
          to: path,
        }, [
          name,
        ]),
      ]));
  }
}
LeaTabbedBarButton.propTypes = {
  active: PropTypes.bool,
  name: PropTypes.string,
  path: PropTypes.string,
};

function getClassDefinitions(props) {
  return classNames(
    'lea-tabbed-bar-button',
    { 'lea-tabbed-bar-button--active': props.active }
  );
}
