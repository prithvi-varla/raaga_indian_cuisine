// Test123

/*
export const fetchMenuItems = restaurantId => {
  // return $.ajax({
  //  method: 'GET',
  //  url: `/api/restaurants/${restaurantId}/menu_items`
 // }); 

  return fetch('http://localhost:9091/restaurant/v1/restaurants/1/menu_items')
            .then(res => res.json())
};
*/

export const fetchMenuItems = restaurantId => {
  /* return $.ajax({
    method: 'GET',
    url: `/api/restaurants/${restaurantId}/menu_items`
  }); */

  return fetch('http://localhost:9091/bonmunch/v1/companies/12345678-1234-1234-1234-123456789116/products')
            .then(res => res.json())
};

export const fetchCategories = (companyId,categoryType) => {

  return fetch('http://localhost:9091/bonmunch/v1/companies/12345678-1234-1234-1234-123456789116/categories?categoryType='+categoryType)
            .then(res => res.json())
};

