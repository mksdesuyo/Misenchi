const assert = require('assert');

Feature('Unliking Restaurant');

Before(({I}) => {
  I.amOnPage('/#/like');
});

Scenario('showing empty liked menu restaurant', ({I}) => {
  I.dontSeeElement('.restaurant-item');
});

Scenario('unliking one restaurant', async ({I}) => {
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
  I.waitForElement('.restaurant-item');
  I.seeElement('.restaurant-item');
  const unlikedRestaurantsTitles = await I.grabTextFrom('.restaurant__title a');

  assert.strictEqual(firstRestaurantTitle, unlikedRestaurantsTitles);

  I.seeElement('.restaurant__title a');
  await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.waitForElement('#likeButton');
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.dontSeeElement('.restaurant-item');
});
