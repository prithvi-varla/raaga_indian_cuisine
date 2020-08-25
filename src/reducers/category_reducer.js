import { merge } from 'lodash';
import { CATEGORY } from '../actions/menu_item_actions';

const categoryReducer = (oldState = {
  success: false,
  failed: false,
  action: null,
  data: null
}, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case CATEGORY:
        return {
          ...oldState,
          success: true,
          failed: false,
          action: 'FETCH',
          data: action.categories
        } 
    default:
      return oldState;
  }
};

export default categoryReducer;
