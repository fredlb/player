import React, { Component, PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import FontAwesome from 'react-fontawesome';
import styles from './PlayPauseButton.css';

class PlayPauseButton extends Component {
  render() {
    const {isPlaying, onClick} = this.props;
    return(
        <FontAwesome styleName="button"
          name={isPlaying ? "pause" : "play"}
          size="2x" onClick={() => onClick()}
        />
    );
  }
}

PlayPauseButton.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  onClick: PropTypes.func
};

PlayPauseButton.defaultProps = {
  isPlaying: false
};

export default CSSModules(PlayPauseButton, styles);
