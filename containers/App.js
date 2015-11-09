import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TrackActions from '../actions';
import Progress from '../components/Progress';
import AudioPlayer from '../components/AudioPlayer';
import ItemList from '../components/ItemList';

class App extends Component {
  render() {
    var style = {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    };
    const { actions, tracks, currentTrack } = this.props;
    return (
        <div style={style}>
          <AudioPlayer track={currentTrack} 
            buttonClick={actions.pausePlayback}
            setTrackProgress={actions.setTrackProgress} />
          <ItemList 
            tracks={tracks}
            actions={actions}/>
        </div>
    );
  }
}

App.propTypes = {
  tracks: PropTypes.array.isRequired,
  currentTrack: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  const { currentTrack, tracks} = state;
  const { ids, tracksById } = tracks;
  const tracksArray = ids.map(id => tracksById[id]);
  const currentTrackById = Object.assign({}, tracksById[currentTrack.id]);
  currentTrackById.isPlaying = currentTrack.isPlaying;
  console.log(state);
  return {
    tracks: tracksArray,
    currentTrack: currentTrackById
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TrackActions, dispatch)
  };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
