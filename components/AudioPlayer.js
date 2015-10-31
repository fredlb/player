import React, { Component, PropTypes } from 'react';

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
      marginTop: '5%',
      padding: '5px',
      width: '80%',
      border: 'solid 1px black'
    };
    const { track, buttonClick } = this.props;

    return (
        <div style={style}>
          <audio preload="none" ref="audioPlayerNode">
            <source src={track.url}
              type="audio/mpeg" />
          </audio>
          <p>
            {track.name}
          </p>
          <input type="button" value={track.isPlaying ? "Pause" : "Play"}
            onClick={() => this.handlePlayPauseButton()}/>
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
