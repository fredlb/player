import mapValues from 'lodash/object/mapValues';
import { PAUSE_PLAYBACK, SELECT_ITEM } from '../actions';

const initialState = {
  items: [1, 2],
  itemsById: {
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
  },
  currentItem: {
    id: 1,
    progress: 0,
    isPlaying: false
  }
};

export default function audioItems(state = initialState, action) {
  switch (action.type) {
    case PAUSE_PLAYBACK:
      // This is stupid, use the id array
      console.log("PAUSE_PLAYBACK");
      return {
        ...state,
        itemsById: mapValues(state.itemsById, (item) => {
          return item.id === action.id ?
            Object.assign({}, item, { progress: action.progress}) :
            item
        }),
        currentItem: {
          id: action.id,
          progress: action.progress,
          isPlaying: action.isPlaying
        }
      };
    case SELECT_ITEM:
      console.log("SELECT_ITEM");
      return {
        ...state,
        itemsById: mapValues(state.itemsById, (item) => {
          return item.id === action.id ?
            Object.assign({}, item, { progress: action.progress}) :
            item
        }),
        currentItem: {
          id: action.id,
          isPlaying: true, 
          progress: action.progress,
        }
      };
    default:
      return state;
  }
}
