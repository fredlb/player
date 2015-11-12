import React, { Component, PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './Item.css';

class Item extends Component {
  render() {
    const {id, name, url, selectItem, progress } = this.props;
    return (
      <div styleName="item">
        <div ref="item" styleName="name"
          onClick={() => selectItem(id, progress)}>
            {name} 
        </div>
        <div styleName="progress">
          Progess: {progress}
        </div>
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

export default CSSModules(Item, styles);
