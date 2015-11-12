import React, { Component, PropTypes } from 'react';
import moment from 'moment';
import CSSModules from 'react-css-modules';
import FontAwesome from 'react-fontawesome';
import { secondsToMMSS } from '../util';
import ProgressBar from './ProgressBar';
import PlayPauseButton from './PlayPauseButton';
import cssStyles from './AudioPlayer.css';

class AudioPlayer extends Component {
  componentDidMount() {
    var node = this.refs.audioPlayerNode;
    node.addEventListener('timeupdate', (() => this.handleTimeUpdate()));

    this.updateIsPlaying();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.track.url !== this.props.track.url) {
      this.props.setTrackProgress(prevProps.track.id, this.getCurrentTime());
      this.updateSource();
    }

    if (prevProps.track.isPlaying !== this.props.track.isPlaying) {
      this.updateIsPlaying();
    }
  }

  render() {
    const { track, buttonClick } = this.props;

    return (
        <div styleName="container">
          <audio preload="none" ref="audioPlayerNode">
            <source src={track.url}
              type="audio/mpeg" />
          </audio>
          <div styleName="track-title">
              {track.name ? track.name : "No track selected"}
          </div>
          <div styleName="player-components">
            <div styleName="button">
              <PlayPauseButton isPlaying={track.isPlaying}
                onClick={() => this.handlePlayPauseButton()}
              />
            </div>
            <div styleName="progress-bar">
              <ProgressBar progress ref={"progressBar"}/>
            </div>
            <div ref={"progressTime"} styleName="progress-time"/>
          </div>
        </div>
    );
  }

  handleTimeUpdate() {
    var node = this.refs.audioPlayerNode;
    var value = 0;
    if (node.currentTime > 0) {
      value = Math.floor((100 / node.duration) * node.currentTime);
    }
    this.refs.progressBar.setProgress(value);
    this.refs.progressTime.innerHTML = secondsToMMSS(node.currentTime);
  }

  updateIsPlaying() {
    var node = this.refs.audioPlayerNode,
        isPlaying  = this.props.track.isPlaying;

    if (isPlaying) {
      node.play();
    } else {
      node.pause();
    }
  }

  getCurrentTime() {
    var node = this.refs.audioPlayerNode;
    return node.currentTime;
  }

  handlePlayPauseButton() {
    var node = this.refs.audioPlayerNode,
        track  = this.props.track;
    this.props.buttonClick(track.id,
        node.currentTime, track.isPlaying);
  }

  updateSource() {
    var node = this.refs.audioPlayerNode,
        isPlaying  = this.props.track.isPlaying,
        progress  = this.props.track.progress;
    node.pause();
    node.load();
    if (isPlaying) {
      node.currentTime = progress;
      node.play();
    }
  }
}

AudioPlayer.propTypes = {
  track: PropTypes.object.isRequired,
  buttonClick: PropTypes.func.isRequired,
  setTrackProgress: PropTypes.func.isRequired
};

AudioPlayer.defaultProps = {
  track: {}
};

export default CSSModules(AudioPlayer, cssStyles);
