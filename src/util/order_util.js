export const createOrder = payload => {
  /* return $.ajax({
    method: 'POST',
    url: '/api/orders',
    data: {order: payload}
  }); */

//Test123
  return fetch('http://localhost:9091/bonmunch/v1/companies/orders', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(payload)

  })
            //.then(res => res.json())
};
