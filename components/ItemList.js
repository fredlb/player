import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import mapValues from 'lodash/object/mapValues';
import Item from './Item';

class ItemList extends Component {
  render() {
    var style = {
    };
    const { tracks, actions } = this.props;
    return (
        <div style={styles.base}>
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

var styles = {
  base: {
    marginTop: "20px",
    width: '60%',
    background: "white",
    boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
    borderRadius: "2px"
  }
};

ItemList.propTypes = {
  tracks: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

export default Radium(ItemList);
