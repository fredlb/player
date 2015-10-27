export const PAUSE_PLAYBACK = 'PAUSE_PLAYBACK';
export const SELECT_ITEM = 'SELECT_ITEM';

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
