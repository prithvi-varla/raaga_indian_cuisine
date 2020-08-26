var bonmunch_endpoint = process.env.REACT_APP_BONMUNCH_END_POINT;
var customer_entityID = process.env.REACT_APP_ENTITY_ID;

export const fetchGeocode = address => {
  return fetch('https://maps.googleapis.com/maps/api/geocode/json?address="116 John St, New York, NY 10038, USA"&key=AIzaSyAo82B1dCxPWWlLhFr244TV2VPabqEnLc0')
            .then(res => res.json())
};


export const fetchRestaurants = () => {
  return fetch(bonmunch_endpoint+'/bonmunch/v1/companies/'+customer_entityID)
            .then(res => res.json())
};
