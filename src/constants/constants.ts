import type { IIngredient } from '../type';
import meatImage from '../assets/icons/ic-cutlet.png';
import cheeseImage from '../assets/icons/ic-cheese.svg';
import baconImage from '../assets/icons/ic-bacon.svg';
import saladImage from '../assets/icons/ic-salad.svg';

const INGREDIENTS: IIngredient[] = [
  {
    name: 'Meat',
    price: 80,
    image: meatImage,
  },
  {
    name: 'Cheese',
    price: 50,
    image: cheeseImage,
  },
  {
    name: 'Bacon',
    price: 60,
    image: baconImage,
  },
  {
    name: 'Salad',
    price: 10,
    image: saladImage,
  },
];

export { INGREDIENTS };
