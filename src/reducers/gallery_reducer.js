import { merge } from 'lodash';

import { GALLERY_MODAL} from '../actions/modal_actions';

const galleryReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case GALLERY_MODAL:
      return action.images;
    default:
      return oldState;
  }
};

export default galleryReducer;
