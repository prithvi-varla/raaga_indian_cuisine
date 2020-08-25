export const signup = (user) => {
  //return $.ajax({
  //  method: 'POST',
  //  url: '/api/users',
  //  data: { user }
  //});
  //Test123
  return fetch('http://localhost:9091/bonmunch/v1/companies/12345678-1234-1234-1234-123456789116/users', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(user)

  })
            .then(res => res.json())
};

export const login = (user) => {
  /* return $.ajax({
    method: 'POST',
    url: '/api/session',
    data: { user }
  }); */

  return fetch('http://localhost:9091/bonmunch/v1/companies/login', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(user)

  })
            .then(res => res.json())


};

export const logout = () => {
  /* return $.ajax({
    method: 'DELETE',
    url: '/api/session'
  }); */

  return fetch('http://localhost:9091/restaurant/v1/users/session', {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json'
    }

  })

};
