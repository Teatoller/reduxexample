import {FETCH_POSTS, NEW_POST} from '../actions/types';

const initialState = {
    items: [],
    item: {}
}

export default function(state = initialState, action) {
    switch(action.types) {
        case FETCH_POSTS:
          // code block
          break;
        case NEW_POST:
          // code block
          break;
        default:
          return state;
      }
}
