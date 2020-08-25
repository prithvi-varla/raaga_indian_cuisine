export const fetchGalleryImages = restaurantId => {
    /* return $.ajax({
      method: 'GET',
      url: `/api/restaurants/${restaurantId}/menu_items`
    }); */
  
    return fetch('http://localhost:9091/restaurant/v1/gallery')
              .then(res => res.json())
  };

export const fetchImages = (restaurantId, imageType) => {
  /* return $.ajax({
    method: 'GET',
    url: `/api/restaurants/${restaurantId}/menu_items`
  }); */

  return fetch('http://localhost:9091/bonmunch/v1/companies/12345678-1234-1234-1234-123456789112/images?page=0&imageType=LANDING_PAGE')
            .then(res => res.json())
};