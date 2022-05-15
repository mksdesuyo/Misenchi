import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="restaurant__title">${restaurant.name}</h2>
  <img class="restaurant__poster" src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId : 'https://restaurant-api.dicoding.dev/images/large'}" alt="${restaurant.name}">
  <div class="restaurant__info">
    <h3>Information</h3>
      <h4>Address</h4>
      <p>${restaurant.address}</p>
      <h4>City</h4>
      <p>${restaurant.city}</p>
      <h4>Rating</h4>
      <p>⭐️${restaurant.rating}</p>
  </div>
  <div class="restaurant__overview">
    <h3>Description</h3>
    <p>${restaurant.description}</p>
  </div>
  <div class="restaurant__food">
    <h3>Food Menu</h3>
    <ul>${restaurant.menus.foods
      .map(
          (foods) => `
        <li>➼ ${foods.name}</li>
      `,
      ).join('')}</ul>
  </div>
  <div class="restaurant__drink">
    <h3>Drink Menu</h3>
    <ul>${restaurant.menus.drinks
      .map(
          (drinks) => `
        <li>➼ ${drinks.name}</li>
      `,
      ).join('')}</ul>
  </div>
  <div class="restaurant__review">
    <h3>Customer Reviews</h3>
    <p>${restaurant.customerReviews
      .map(
          (reviews) => `
        <div class="review__container">
          <div class="review__body">
            <h4 class="review__customer__name">${reviews.name}</h4>
            <small class="review__date__post">📅 ${reviews.date}</small>
            <p class="review__content">${reviews.review}</p>
          </div>
        </div>
      `).join('')}</p>
  </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
        <img class="restaurant-item__header__poster" alt="${restaurant.name}"
            src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId : 'https://restaurant-api.dicoding.dev/images/large'}">
        <div class="restaurant-item__header__rating">
            <p>⭐️<span class="restaurant-item__header__rating__score">${restaurant.rating}</span></p>
        </div>
    </div>
    <div class="restaurant-item__content">
        <h3 class="restaurant__title"><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h3>
        <h4>City: ${restaurant.city}</h4>
        <p>${restaurant.description}</p>
    </div>
  </div>
  `;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
