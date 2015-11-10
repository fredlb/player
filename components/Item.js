import React, { Component, PropTypes } from 'react';
import Radium from 'radium';

class Item extends Component {
  render() {
    const {id, name, url, selectItem, progress } = this.props;
    return (
      <div style={styles.base}>
        <div onClick={() => selectItem(id, progress)}>
          {name} Progess: {progress}
        </div>
      </div>
    );
  }
}

var styles = {
  base: {
    background: '#fff',
    cursor: "pointer",
    padding: "3%",
    ':hover': {
      background: '#eee'
    }
  }
};

Item.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
  selectItem: PropTypes.func.isRequired
};

export default Radium(Item);
