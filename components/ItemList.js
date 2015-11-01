import React, { Component, PropTypes } from 'react';
import mapValues from 'lodash/object/mapValues';
import Item from './Item';

export default class ItemList extends Component {
  render() {
    var style = {
      margin: "auto",
      marginTop: "10px",
      width: '60%',
      background: "white",
      boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
      borderRadius: "2px"
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
