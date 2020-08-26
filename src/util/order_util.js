var bonmunch_endpoint = process.env.REACT_APP_BONMUNCH_END_POINT;

export const createOrder = payload => {

  return fetch(bonmunch_endpoint+'bonmunch/v1/companies/orders', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(payload)

  })
};
