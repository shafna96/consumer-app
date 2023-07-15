import images from './images';

const categories = [
  {
    id: 1,
    name: 'Offers',
    icon: images.dealTag,
  },
  {
    id: 2,
    name: 'Ingredients',
    icon: images.ingredients,
  },
  {
    id: 3,
    name: 'Burgers',
    icon: images.burgers,
  },
  {
    id: 4,
    name: 'Biriyani',
    icon: images.biriyani,
  },

  {
    id: 5,
    name: 'Healthy',
    icon: images.healthy,
  },
];

const resturants = [
  {
    id: 1,
    images: images.bakers,
    name: 'Paan Paan Bakery',
    isFavorite: true,
    rating: '4.7 Excellent',
    count: '(500+)',
    items: ['. Bread ', '. Submarines '],
    bonus: 'Earn 1x cash bonus',
  },
  {
    id: 2,
    images: images.burgerHut,
    name: 'Burger Hut',
    isFavorite: true,
    rating: '3.5 Good',
    count: '(500+)',
    items: ['. Submarines ', '. Burgers '],
    bonus: 'Earn 1x cash bonus',
  },
];

const favorites = [
  {
    id: 1,
    images: images.pizza,
    name: 'Pizza Hut',
    isFavorite: true,
    rating: '4.7 Excellent',
    count: '(500+)',
    items: ['. Bread ', '. Submarines '],
  },
  {
    id: 2,
    images: images.burgerHutFav,
    name: 'Burger Hut',
    isFavorite: true,
    rating: '3.5 Good',
    count: '(500+)',
    items: ['. Submarines ', '. Burgers '],
  },
];

const recommended = [
  {
    id: 1,
    images: images.muttonBiriyani,
    name: 'Mutton Biriyani',
    resturant: 'Chettinad Resturant',
    isFavorite: true,
    rating: '4.3',
    count: '(500+)',
  },
  {
    id: 2,
    images: images.smokedSalmon,
    name: 'Smoked Salmon',
    resturant: 'Nihonbashi',
    isFavorite: true,
    rating: '3.5 Good',
    count: '(500+)',
  },
];
const flashDeals = [
  {
    id: 1,
    images: images.avocado,
    name: 'Avocado Toast',
    off: '30%',
    resturant: 'Chettinad Resturant',
    save: 'Save Rs 60',
    valid: 'Valid 2d left',
  },
  {
    id: 2,
    images: images.pancakes,
    name: 'pancakes with Kithul',
    off: '30%',
    resturant: 'Coco Veranda',
    save: 'Save Rs 60',
    valid: 'Valid 2hrs left',
  },
];

const mapCard = [
  {
    id: 1,
    images: images.mapCardImg,
    name: 'Paan Paan Bakery',
    isFavorite: true,
    rating: '3.5 Good',
    distance: '0.5km away',
    duration: 'Ready in 25mins',
    count: '(500+)',
  },
  {
    id: 2,
    images: images.mapCardImg,
    name: 'Paan Paan Bakery',
    isFavorite: true,
    rating: '3.5 Good',
    distance: '0.5km away',
    duration: 'Ready in 25mins',
    count: '(500+)',
  },
];

export default {
  categories,
  resturants,
  favorites,
  recommended,
  flashDeals,
  mapCard,
};
