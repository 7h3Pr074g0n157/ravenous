'use strict';

const apiKey = 'tqxTmLJXN34qCw_l-SPbJboOxXJw8uSD-_I4YpoOgN1nXyGCrMfLBFRkI6MNf0jGCrXBvDql6TccicDL86_tIxcrj6OlOplDdqu9mdV34JKb5AncO_D-WlMT4RmAW3Yx';
const Yelp = {
  search(term,location,sortBy){
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {Authorization: `Bearer ${apiKey}`}
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if(jsonResponse.businesses){
        return jsonResponse.businesses.map(business => {
          return {
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.address1,
            city: business.location.city,
            state: business.state,
            zipCode: business.location.zip_code,
            category: business.categories,
            rating: business.rating,
            reviewCount: business.review_count
          }
        });
      }
    });
  }
};

export default Yelp;
