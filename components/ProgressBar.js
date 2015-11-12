import React, { Component, PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './ProgressBar.css';

class ProgressBar extends Component {
  render() {
    return(
        <div styleName="container">
          <div styleName="bar" ref={"bar"}/>
        </div>
    );
  }

  setProgress(value) {
    this.refs.bar.style.width = value + "%";
  }
}

export default CSSModules(ProgressBar, styles);
