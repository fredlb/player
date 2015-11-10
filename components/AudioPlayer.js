import React, { Component, PropTypes } from 'react';
import moment from 'moment';
import FontAwesome from 'react-fontawesome';
import { secondsToMMSS } from '../util';

export default class AudioPlayer extends Component {
  componentDidMount() {
    var node = this.refs.audioPlayerNode;
    node.addEventListener('progress', this.handleProgress());
    node.addEventListener('timeupdate', (() => this.handleTimeUpdate()));
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
      flexGrow: "1",
      cursor: "pointer",
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
      padding: "3%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    };

    var progressBar = {
      backgroundColor: "#aaa",
      display: "inline-block",
    };

    var progressContainer = {
      flexGrow: "7",
      backgroundColor: "#eee",
      display: "inline-block"
    };

    var progressTime = {
      flexGrow: "1",
      display: "inline-block",
      textAlign: "right",
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
            <FontAwesome style={buttonStyle}
              name={this.props.track.isPlaying ? "pause" : "play"}
              size="2x" onClick={() => this.handlePlayPauseButton()}/>
              <div style={progressContainer}>
                <span style={progressBar} ref={"progress"}/>
              </div>
              <div ref={"progressTime"} style={progressTime}></div>
          </div>
        </div>
    );
  }

  handleTimeUpdate() {
    var node = this.refs.audioPlayerNode;
    var value = 0;
    console.log(Math.floor(node.currentTime));
    if (node.currentTime > 0) {
      value = Math.floor((100 / node.duration) * node.currentTime);
    }
    this.refs.progress.style.width = value + "%";
    this.refs.progressTime.innerHTML = secondsToMMSS(node.currentTime);
  }

  handleProgress() {
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
