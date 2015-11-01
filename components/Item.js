import React, { Component, PropTypes } from 'react';

export default class Item extends Component {
  render() {
    const {id, name, url, selectItem, progress } = this.props;
    return (
      <div>
        <p onClick={() => selectItem(id, progress)}>
          {name} Progess: {progress}
        </p>
      </div>
    );
  }
}

Item.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
  selectItem: PropTypes.func.isRequired
};
