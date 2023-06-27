import { Link } from 'react-router-dom';
import restaurantFoodImage from './assets/restaurant-food.jpg';
import './Hero.css';
import pages from '../../../utils/pages';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container grid">
        <div className="hero-information">
          <h1>Little Lemon</h1>
          <h2>Boston</h2>
          <p>
          Proudly independent since 1983, Grill 23 & Bar has been bringing unrivaled steak, seafood and service to Boston for decades, with a Grand Award-winning wine list that is quite literally better every day. When it comes to steakhouses, there's only one Grill 23..
          </p>
          <Link className="button-primary" to={pages.get('bookings').path}>
            Reserve a table
          </Link>
        </div>
        <img 
          className="hero-image" 
          src={restaurantFoodImage} 
          alt="Restaurant food" 
        />
      </div>
    </section>
  );
};

export default Hero;
