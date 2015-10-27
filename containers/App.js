import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ItemActions from '../actions';
import Progress from '../components/Progress';
import AudioPlayer from '../components/AudioPlayer';
import ItemList from '../components/ItemList';

class App extends Component {
  render() {
    const { actions, selectedItems, currentItem } = this.props;
    return (
        <div>
        {/*<PlaybackControl item={currentItem} actions={actions}/>*/}
          <AudioPlayer item={currentItem} buttonClick={actions.pausePlayback}/>
          <ItemList 
            items={selectedItems}
            actions={actions}/>
        </div>
    );
  }
}

App.propTypes = {
  selectedItems: PropTypes.array.isRequired,
  currentItem: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  console.log(state);
  const { currentItem, items, itemsById } = state.audioItems;
  const selectedItems = items.map(id => itemsById[id]);
  const currentItemById = itemsById[currentItem.id];
  console.log(currentItemById);
  currentItemById.isPlaying = currentItem.isPlaying;
  return {
    selectedItems,
    currentItem: currentItemById
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ItemActions, dispatch)
  };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
