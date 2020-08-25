import { combineReducers } from 'redux';
import modalsReducer from './modals_reducer';
import galleryReducer from './gallery_reducer'

const uiReducer = combineReducers({
  modals: modalsReducer,
  gallery: galleryReducer
});

export default uiReducer;
