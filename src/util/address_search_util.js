const $ = window.$;

var data = {
  "restaurants": [{
    "id": 1,
    "name": "Indian Palace",
    "address": "171 E Broadway, New York, NY 10002",
    "phone": "806-392-5555",
    "img_url": "https://res.cloudinary.com/grubhub/d_search:browse-images:default.jpg/dpr_auto,f_auto,q_auto,g_auto,w_106,h_106,c_fill,e_improve/search/browse-images/indian.jpg",
    "cuisine": "Indian",
    "delivery_minimum": "1",
    "delivery_fee": "2",
    "distance": "3",
    "rating_avg": "4",
    "rating_count": "5",

  }
]
};

export const fetchGeocode = address => {
  /* return $.ajax({
    method: 'GET',
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyAo82B1dCxPWWlLhFr244TV2VPabqEnLc0`
  }); */

  return fetch('https://maps.googleapis.com/maps/api/geocode/json?address="116 John St, New York, NY 10038, USA"&key=AIzaSyAo82B1dCxPWWlLhFr244TV2VPabqEnLc0')
            .then(res => res.json())
};


export const fetchRestaurants = addressId => {
  return fetch('http://localhost:9091/bonmunch/v1/companies/'+addressId)
            .then(res => res.json())
};

/* export const fetchRestaurants = address => {
  return $.ajax({
    method: 'GET',
    url: '/api/restaurants',
    data: { address }
  });
}; */



/* export const fetchRestaurants = address => {
return data;

}; */
