import { Component, PropTypes } from 'react';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';
import { div, h } from 'react-hyperscript-helpers';

import './lea-events-list.less';

export default class LeaEventsList extends Component {
  render() {
    const { events } = this.props;
    return div({ className: 'lea-events-list' }, [
      events.map(event =>
        h(Card, { key: event.id, className: 'lea-events-list__card' }, [
          h(CardTitle, { title: event.name, subtitle: 'Event date' }),
          h(CardText, [event.summary]),
          h(CardActions, [
            h(FlatButton, { label: 'save' }),
            h(FlatButton, { label: 'view' }),
          ]),
        ])
      ),
    ]);
  }
}
LeaEventsList.propTypes = {
  events: PropTypes.array,
};
