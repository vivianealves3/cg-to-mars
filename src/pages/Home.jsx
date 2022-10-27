import React from 'react';
import { WorkoutCard } from '../components/WorkoutCard';
import classes from '../layout/pages/_home.module.scss';

export const Home = () => {
  return (
    <div className={classes.home}>
      <h1 className={classes.home__title}>Camp Gladiator</h1>
      <WorkoutCard />
    </div>
  );
};
