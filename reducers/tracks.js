import { combineReducers } from 'redux';
import { PAUSE_PLAYBACK } from '../actions';

const initialState = {
  ids: [1, 2],
  tracksById: {
    1: {
      id: 1,
      name: "Comedy Button Ep. 199",
      url: "http://traffic.libsyn.com/comedybutton/ComedyButton_Ep199.mp3",
      progress: 0
    },
    2: {
      id: 2,
      name: "Comedy Button Ep. 74",
      url: "http://traffic.libsyn.com/comedybutton/ComedyButton_Ep074.mp3",
      progress: 0
    }
  }
};

function tracksById(
    state = initialState.tracksById, action) {
  switch (action.type) {
    case PAUSE_PLAYBACK:
      const trackId = action.id;
      console.log(trackId);
      return { 
        ...state,
        [trackId]:
        Object.assign({}, state[trackId],
            { progress: action.progress })
      };
    default:
      return state;
  }
}

function ids(state = initialState.ids, action) {
  return state;
}

const tracks = combineReducers({
  ids,
  tracksById
});

export default tracks;
