var bonmunch_endpoint = process.env.REACT_APP_BONMUNCH_END_POINT;
var customer_entityID = process.env.REACT_APP_ENTITY_ID;

export const signup = (user) => {

  return fetch(bonmunch_endpoint+'/bonmunch/v1/companies/'+customer_entityID+'/users', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(user)

  })
            .then(res => res.json())
};

export const login = (user) => {

  return fetch(bonmunch_endpoint+'/bonmunch/v1/companies/login', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(user)

  })
            .then(res => res.json())


};

export const logout = () => {

  return fetch(bonmunch_endpoint+'/restaurant/v1/users/session', {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json'
    }

  })

};
