import React, { Component, PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';

export default class AudioPlayer extends Component {
  componentDidMount() {
    var node = this.refs.audioPlayerNode;
    node.addEventListener('progress', this.handleProgress());
    node.addEventListener('timeupdate', this.handleTimeUpdate());
    node.addEventListener('ended', this.handleMediaEnd());

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
    var style = {
      margin: "auto",
      width: "60%",
      background: "white",
      borderRadius: "2px",
      boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)"
    };
    var buttonStyle = {
      padding: "5px",
      color: "rgba(150,30,30,1)"
    };
    var trackTitleStyle = {
      backgroundColor: "rgba(150,30,30,1)",
      overflow: "hidden"
    };
    var trackNameStyle = {
      margin: "3px",
      color: "white"
    };

    var playerComponents = {
      padding: "3%"
    };

    var progressBar = {
      width: "75%"
    };

    const { track, buttonClick } = this.props;

    return (
        <div style={style}>
          <audio preload="none" ref="audioPlayerNode">
            <source src={track.url}
              type="audio/mpeg" />
          </audio>
          <div style={trackTitleStyle}>
            <h5 style={trackNameStyle}>
              {track.name ? track.name : "No track selected"}
            </h5>
          </div>
          <div style={playerComponents}>
          <FontAwesome style={buttonStyle} name={this.props.track.isPlaying ? "pause" : "play"}
          size="2x" onClick={() => this.handlePlayPauseButton()}/>
          </div>
        </div>
    );
  }

  handleTimeUpdate() {
    var node = this.refs.audioPlayerNode;
    var currentTime = node.currentTime.toString();
  }

  handleProgress() {
    var node = this.refs.audioPlayerNode;
    var currentTime = node.currentTime.toString();
  }

  handleMediaEnd() {

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
  //defaultTime: PropTypes.number,
  //onProgress: PropTypes.func.isRequired,
  //onTimeUpdate: PropTypes.func.isRequired,
  //onEnd: PropTypes.func.isRequired
};

AudioPlayer.defaultProps = {
  track: {}
};
