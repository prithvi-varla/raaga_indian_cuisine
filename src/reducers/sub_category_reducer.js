import { merge } from 'lodash';
import { SUB_CATEGORY } from '../actions/menu_item_actions';

const subCategoryReducer = (oldState = {
  success: false,
  failed: false,
  action: null,
  data: null
}, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case SUB_CATEGORY:
        return {
          ...oldState,
          success: true,
          failed: false,
          action: 'FETCH',
          data: action.subCategories
        } 
    default:
      return oldState;
  }
};

export default subCategoryReducer;
