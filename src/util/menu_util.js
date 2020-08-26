var bonmunch_endpoint = process.env.REACT_APP_BONMUNCH_END_POINT;
var customer_entityID = process.env.REACT_APP_ENTITY_ID;


export const fetchMenuItems = () => {

  return fetch(bonmunch_endpoint+'/bonmunch/v1/companies/'+customer_entityID+'/products')
            .then(res => res.json())
};

export const fetchCategories = (categoryType) => {

  return fetch(bonmunch_endpoint+'/bonmunch/v1/companies/'+customer_entityID+'/categories?categoryType='+categoryType)
            .then(res => res.json())
};

