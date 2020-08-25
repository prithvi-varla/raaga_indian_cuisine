import * as GalleryUtil from '../util/gallery_util';

export const SESSION_MODAL = 'SESSION_MODAL';
export const SIGNUP_MODAL = 'SIGNUP_MODAL';
export const MENU_ITEM_MODAL = 'MENU_ITEM_MODAL';
export const ORDER_PLACED_MODAL = 'ORDER_PLACED_MODAL';
export const REVIEW_MODAL = 'REVIEW_MODAL';
export const GALLERY_MODAL = 'GALLERY_MODAL';

export const toggleSessionModal = () => ({
  type: SESSION_MODAL
});

export const toggleSignupModal = () => ({
  type: SIGNUP_MODAL
});

export const toggleMenuItemModal = () => ({
  type: MENU_ITEM_MODAL
});

export const toggleOrderPlacedModal = () => ({
  type: ORDER_PLACED_MODAL
});

export const toggleReviewModal = () => ({
  type: REVIEW_MODAL
});

export const toggleGalleryModal = () => ({
  type: GALLERY_MODAL
});

export const receiveImages = images => {
  return ({
    type: GALLERY_MODAL,
    images
  });
};

export const fetchGalleryImages = restaurantId => dispatch => {
  return (
    GalleryUtil.fetchGalleryImages(restaurantId)
    .then((images) => dispatch(receiveImages(images)))
  );
};

export const fetchImages = (restaurantId, imageType) => dispatch => {
  return (
    GalleryUtil.fetchImages(restaurantId, imageType)
    .then((images) => dispatch(receiveImages(images)))
  );
};