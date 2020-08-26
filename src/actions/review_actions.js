import * as ReviewUtil from '../util/review_util';

export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REVIEWABLE = 'REVIEWABLE';

export const receiveReviews = reviews => ({
  type: RECEIVE_REVIEWS,
  reviews
});

export const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review
});

export const receiveReviewable = bool => ({
  type: REVIEWABLE,
  bool
});

export const fetchReviews = () => dispatch => {
  return(
    ReviewUtil.fetchReviews()
    .then(reviews => dispatch(receiveReviews(reviews)))
  );
};

export const createReview = review => dispatch => {
  return(
    //Test123
    ReviewUtil.createReview(review)
    /* .then(review => dispatch(receiveReview(review))) */
  );
};

export const fetchReviewable = () => dispatch => {
  return(
    ReviewUtil.fetchReviewable()
    .then(bool => dispatch(receiveReviewable(bool)))
  );
};
