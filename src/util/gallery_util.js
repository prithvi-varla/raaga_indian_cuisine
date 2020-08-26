var bonmunch_endpoint = process.env.REACT_APP_BONMUNCH_END_POINT;
var customer_entityID = process.env.REACT_APP_ENTITY_ID;

export const fetchGalleryImages = restaurantId => {
  
    return fetch(bonmunch_endpoint+'/restaurant/v1/gallery')
              .then(res => res.json())
  };

export const fetchImages = (restaurantId, imageType) => {

  return fetch(bonmunch_endpoint+'/bonmunch/v1/companies/12345678-1234-1234-1234-123456789112/images?page=0&imageType=LANDING_PAGE')
            .then(res => res.json())
};