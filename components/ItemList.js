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
    const { tracks, actions } = this.props;
    return (
        <div style={style}>
          { tracks.map((track) =>
                <Item
                  key={track.id}
                  id={track.id}
                  name={track.name}
                  url={track.url}
                  progress={track.progress}
                  {...actions} />
            )}
        </div>
    );
  }
}

ItemList.propTypes = {
  tracks: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};
