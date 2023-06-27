import { Link } from 'react-router-dom';
import bruschettaImage from './assets/bruschetta.jpg';
import greekSaladImage from './assets/greek-salad.jpg';
import lemonDessertImage from './assets/lemon-dessert.jpg';
import './WeekSpecials.css';
import pages from '../../../utils/pages';
import MealCard from './MealCard';

const meals = [
  {
    name: 'Pizza',
    image: greekSaladImage,
    price: '$12.99',
    description: `Ta pizza that gives you the freedom to choose your toppings - from paneer, crisp capsicum, onion, grilled
     mushroom, golden corn, black olives, fresh tomato, red paprika,  paneer tikka and extra cheese to
     non-veg toppings such as pepper barbeque chicken, peri-peri chicken, grilled chicken rasher, chicken sausage or.`,
  },
  {
    name: 'KFC',
    image: bruschettaImage,
    price: '$5.99',
    description: `1 PC FREE CHICKEN ZINGER ON A CART VALUE OF 499 OR ABOVE ON FIRST ORDER. ONLY FOR REGISTERED USERS..`,
  },
  {
    name: 'bURGERS',
    image: lemonDessertImage,
    price: '$5.00',
    description: `These seven layer sliders have everything you'd ever want in a burger - a rich flavorful burger served in Hawaiian 
    rolls topped with homemade grilled pico, crunchy lettuce, jalapenos, guacamole, and cheese..`,
  },
];

const WeekSpecials = () => {
  return (
    <section className="container grid week-specials">
      <div className="week-specials-header">
        <h2>This week specials!</h2>
        <Link className="button-primary" to={pages.get('orderOnline').path}>
          Online Menu
        </Link>
      </div>
      {meals.map((meal, index) => 
        <MealCard key={index} meal={meal} />
      )}
    </section>
  );
};

export default WeekSpecials;
