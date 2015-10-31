import { SELECT_ITEM, PAUSE_PLAYBACK } from '../actions';

export default function currentTrack(state = {}, action) {
  switch (action.type) {
    case SELECT_ITEM:
      return {
          id: action.id,
          isPlaying: true
        };
    case PAUSE_PLAYBACK:
      return {
        ...state, 
          isPlaying: action.isPlaying
      };
    default:
      return state;
  }
}
