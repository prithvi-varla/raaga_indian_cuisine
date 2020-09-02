var bonmunch_endpoint = process.env.REACT_APP_BONMUNCH_END_POINT;
var customer_entityID = process.env.REACT_APP_ENTITY_ID;

export const fetchGalleryImages = restaurantId => {
  
    return fetch(bonmunch_endpoint+'/restaurant/v1/gallery')
              .then(res => res.json())
  };

export const fetchImages = (restaurantId, imageType) => {

  return fetch(bonmunch_endpoint+'/bonmunch/v1/companies/'+restaurantId+'/images?page=0&imageType='+imageType)
            .then(res => res.json())
};