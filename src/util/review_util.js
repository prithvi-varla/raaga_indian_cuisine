var bonmunch_endpoint = process.env.REACT_APP_BONMUNCH_END_POINT;



export const fetchReviews = () => {
  /*
  return $.ajax({
    method: 'GET',
    url: `/api/restaurants/${restaurantId}/reviews`
  });
  */
};

export const createReview = review => {

  return fetch(bonmunch_endpoint+'/restaurant/v1/reviews', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(review)

  })
};

export const fetchReviewable = () => {
  /*
  return $.ajax({
    method: 'GET',
    url: `/api/restaurants/${restaurantId}`
  });
  */
};
