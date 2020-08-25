import React from 'react';
import RestaurantShow from './restaurant_show';
import { fetchMenuItems } from '../../../actions/menu_item_actions';
import { fetchCategories,fetchSubCategories } from '../../../actions/menu_item_actions';
import { fetchReviews, fetchReviewable } from '../../../actions/review_actions';
import { toggleMenuItemModal, toggleReviewModal } from '../../../actions/modal_actions';
import { fetchRestaurants } from '../../../actions/restaurant_actions';
import { deleteAllItems } from '../../../actions/order_item_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
  menuItems: state.entities.menuItems,
  categories: state.entities.categories,
  subCategories: state.entities.subCategories,
  menuItemModal: state.ui.modals.menuItemModal,
  orderRestaurantId: state.entities.order.restaurantId,
  reviews: state.entities.reviews,
  reviewModal: state.ui.modals.reviewModal,
  currentUser: state.session.currentUser,
  reviewable: state.session.reviewable,
  restaurant: state.entities.restaurants
});

const mapDispatchToProps = dispatch => ({
  fetchCategories: (restaurantId,categoryType) => dispatch(fetchCategories(restaurantId, categoryType)),
  fetchSubCategories: (restaurantId,categoryType) => dispatch(fetchSubCategories(restaurantId, categoryType)),
  fetchMenuItems: restaurantId => dispatch(fetchMenuItems(restaurantId)),
  fetchReviews: restaurantId => dispatch(fetchReviews(restaurantId)),
  fetchReviewable: restaurantId => dispatch(fetchReviewable(restaurantId)),
  toggleMenuItemModal: () => dispatch(toggleMenuItemModal()),
  toggleReviewModal: () => dispatch(toggleReviewModal()),
  deleteAllItems: () => dispatch(deleteAllItems()),
  fetchRestaurantInfo: restaurantId => dispatch(fetchRestaurants(restaurantId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RestaurantShow));
