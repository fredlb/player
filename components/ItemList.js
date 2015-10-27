import React, { Component, PropTypes } from 'react';
import mapValues from 'lodash/object/mapValues';
import Item from './Item';

export default class ItemList extends Component {
  render() {
    var style = {
      marginTop: '5%',
      padding: '5px',
      width: '80%',
      border: 'solid 1px black'
    };
    const { items, actions } = this.props;
    return (
        <div style={style}>
          { items.map((item) =>
                <Item
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  url={item.url}
                  progress={item.progress}
                  {...actions} />
            )}
        </div>
    );
  }
}

ItemList.propTypes = {
  items: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};
