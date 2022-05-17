const assert = require('assert');

Feature('Liking Restaurant');

Before(({I}) => {
  I.amOnPage('/#/like');
});

Scenario('showing empty liked menu restaurant', ({I}) => {
  I.dontSeeElement('.restaurant-item');
});

Scenario('liking one restaurant', async ({I}) => {
  I.dontSeeElement('.restaurant-item');
  I.amOnPage('/');
  I.waitForElement('.restaurant-item');
  I.seeElement('.restaurant__title a');

  const firstRestaurant = locate('.restaurant__title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.waitForElement('#likeButton');
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.restaurant-item');
  const likedRestaurantTitle = await I.grabTextFrom('.restaurant__title a');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});
