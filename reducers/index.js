import { combineReducers } from 'redux';
import tracks from './tracks';
import currentTrack from './currentTrack';

const rootReducer = combineReducers({
  tracks,
  currentTrack
});

export default rootReducer;
