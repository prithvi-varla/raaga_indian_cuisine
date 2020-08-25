export const fetchReviews = restaurantId => {
  /*
  return $.ajax({
    method: 'GET',
    url: `/api/restaurants/${restaurantId}/reviews`
  });
  */
};

export const createReview = review => {
  /* return $.ajax({
    method: 'POST',
    url: `/api/restaurants/${review.restaurant_id}/reviews`,
    data: { review }
  }); */

  //Test123
  //Test123
  return fetch('http://localhost:9091/restaurant/v1/reviews', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(review)

  })
};

export const fetchReviewable = restaurantId => {
  /*
  return $.ajax({
    method: 'GET',
    url: `/api/restaurants/${restaurantId}`
  });
  */
};
