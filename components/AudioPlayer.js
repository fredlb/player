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
    if (prevProps.item.url !== this.props.item.url) {
      this.updateSource();
    }

    if (prevProps.item.isPlaying !== this.props.item.isPlaying) {
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
    const { item, buttonClick } = this.props;

    return (
        <div style={style}>
          <audio preload="none" ref="audioPlayerNode">
            <source src={item.url}
              type="audio/mpeg" />
          </audio>
          <p>
            {item.name}
          </p>
          <input type="button" value={item.isPlaying ? "Pause" : "Play"}
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
    console.log("updateIsPlaying");
    var node = this.refs.audioPlayerNode,
        isPlaying  = this.props.item.isPlaying;

    if (isPlaying) {
      node.play();
    } else {
      node.pause();
    }
  }

  handlePlayPauseButton() {
    var node = this.refs.audioPlayerNode,
        item  = this.props.item;
    this.props.buttonClick(item.id,
        node.currentTime, item.isPlaying);
  }

  updateSource() {
    console.log("updateSource");
    var node = this.refs.audioPlayerNode,
        isPlaying  = this.props.item.isPlaying,
        progress  = this.props.item.progress;
    node.pause();
    node.load();
    if (isPlaying) {
      node.currentTime = progress;
      node.play();
    }
  }
}

AudioPlayer.propTypes = {
  item: PropTypes.object.isRequired,
  buttonClick: PropTypes.func.isRequired
  //defaultTime: PropTypes.number,
  //onProgress: PropTypes.func.isRequired,
  //onTimeUpdate: PropTypes.func.isRequired,
  //onEnd: PropTypes.func.isRequired
};

AudioPlayer.defaultProps = {
  item: {}
};
