import images from './images';

const hotDrinks = [
  {
    title: 'Tea',
    price: '$56',
    tags: 'AU | Glass',
  },
  {
    title: 'Green tea',
    price: '$59',
    tags: 'AU | Cup',
  },
  {
    title: 'Hot lemon',
    price: '$44',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Coffee',
    price: '$31',
    tags: 'CA | Cup',
  },
  {
    title: 'Hot chocolate',
    price: '$26',
    tags: 'IE | 750 ml',
  },
];

const coldDrinks = [
  {
    title: 'Coca-Cola',
    price: '$20',
    tags: 'AL | 30 ml',
  },
  {
    title: "Sprite",
    price: '$16',
    tags: 'LA | Cold',
  },
  {
    title: 'Red Bull',
    price: '$10',
    tags: 'Sugar',
  },
  {
    title: 'Nescafé',
    price: '$31',
    tags: 'Caffein',
  },
  {
    title: 'Monster',
    price: '$26',
    tags: 'Energetic',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { hotDrinks, coldDrinks, awards };
