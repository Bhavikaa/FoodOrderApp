import { Fragment } from 'react';

import MealsSummary from './MealsSummary';
import AvailableMeals from './AvailableMeals';

const Meals = () => {
  return (
    <Fragment>
      <h1>This build is automatic</h1>
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  );
};

export default Meals;
