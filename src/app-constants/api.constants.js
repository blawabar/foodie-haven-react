const BASE_URL = process.env.PUBLIC_URL;

export const API = Object.freeze({
  DISHES: `${BASE_URL}/data/dishes.json`,
  EVENTS: `${BASE_URL}/data/events.json`,
  CHEF: `${BASE_URL}/data/chef.json`,
});
