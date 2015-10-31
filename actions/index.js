export const PAUSE_PLAYBACK = 'PAUSE_PLAYBACK';
export const SELECT_ITEM = 'SELECT_ITEM';
export const SET_TRACK_PROGRESS = 'SET_TRACK_PROGRESS';

export function pausePlayback(id, progress, isPlaying) {
  if (isPlaying) {
    return { 
      type: PAUSE_PLAYBACK, 
      id, progress, isPlaying: false
    };
  } else {
    return {
      type: PAUSE_PLAYBACK,
      id, progress, isPlaying: true
    };
  }
}

export function selectItem(id, progress) {
  return { 
    type: SELECT_ITEM,
    id, progress };
}

export function setTrackProgress(id, progress) {
  return {
    type: SET_TRACK_PROGRESS,
    id, progress
  };
}
