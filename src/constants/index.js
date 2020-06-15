export const PATH_MAP = Object.freeze({
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
});

const BASE_URL = process.env.PUBLIC_URL;

export const API = Object.freeze({
  DISHES: `${BASE_URL}/data/dishes.json`,
  EVENTS: `${BASE_URL}/data/events.json`,
  CHEF: `${BASE_URL}/data/chef.json`,
});

const ALL = "all";
const BREAKFAST_AND_STARTERS = "breakfast and starters";
const MAIN_COURSE = "main course";
const DINNER = "dinner";
const DESSERTS = "desserts";

export const DISHES_FILTER_VALUES = Object.freeze({
  ALL,
  BREAKFAST_AND_STARTERS,
  MAIN_COURSE,
  DINNER,
  DESSERTS,
});
