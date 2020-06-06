export const PATH_MAP = {
  home: {
    phrase: "Delicious recipes and wide option of choice",
  },
  menu: {
    phrase: "Check our meals",
  },
  events: {
    phrase: "Our events and news",
  },
  chef: {
    phrase: "Meet our chef",
  },
  gallery: {
    phrase: "Check our gallery",
  },
  contact: {
    phrase: "How to get in touch with us",
  },
};

const BASE_URL = process.env.PUBLIC_URL;

export const API = {
  DISHES: `${BASE_URL}/data/dishes.json`,
  EVENTS: `${BASE_URL}/data/events.json`,
  CHEF: `${BASE_URL}/data/chef.json`,
};
