import * as MenuUtil from '../util/menu_util';

export const MENU_ITEMS = 'MENU_ITEMS';
export const CATEGORY = 'CATEGORY';
export const SUB_CATEGORY = 'SUB_CATEGORY';
export const RECEIVE_QUANTITY_ERRORS = 'RECEIVE_QUANTITY_ERRORS';
export const RECEIVE_ITEM_INSTRUCTIONS_ERRORS = 'RECEIVE_ITEM_INSTRUCTIONS_ERRORS';
export const RECEIVE_REQUIRED_OPTIONS_ERRORS = 'RECEIVE_REQUIRED_OPTIONS_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const receiveMenuItems = menuItems => {
  return ({
    type: MENU_ITEMS,
    menuItems
  });
};

export const receiveCategories = categories => {
  return ({
    type: CATEGORY,
    categories
  });
};

export const receiveSubCategories = subCategories => {
  return ({
    type: SUB_CATEGORY,
    subCategories
  });
};

export const receiveQuantityErrors = () => ({
  type: RECEIVE_QUANTITY_ERRORS,
  error: "Easy big fella! The maximum quantity is 99!"
});

export const receiveItemInstructionsErrors = () => ({
  type: RECEIVE_ITEM_INSTRUCTIONS_ERRORS,
  error: "The maximum length of instructions is 255 characters!"
});

export const receiveRequiredOptionsErrors = () => ({
  type: RECEIVE_REQUIRED_OPTIONS_ERRORS,
  error: "Some required options are missing! Please make a selection!"
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const fetchMenuItems = restaurantId => dispatch => {
  return (
    MenuUtil.fetchMenuItems(restaurantId)
    .then((menuItems) => dispatch(receiveMenuItems(menuItems)))
  );
};

export const fetchCategories = (companyId, categoryType) => dispatch => {
  return (
    MenuUtil.fetchCategories("12345678-1234-1234-1234-123456789116", categoryType)
    .then((categories) => dispatch(receiveCategories(categories)))
  );
};

export const fetchSubCategories = (companyId, categoryType) => dispatch => {
  return (
    MenuUtil.fetchCategories("12345678-1234-1234-1234-123456789116", categoryType)
    .then((categories) => dispatch(receiveSubCategories(categories)))
  );
};
