import React from 'react';
import workouts from '../assets/db/workouts.json';
import { useNavigate } from 'react-router-dom';
import classes from '../layout/components/_workoutCard.module.scss';

export const WorkoutCard = () => {
  const navigate = useNavigate();

  return (
    <div className={classes.workoutCard}>
      {workouts.map((workout) => (
        <div
          className={classes.workoutCard__card}
          onClick={() => navigate(`/${workout.title}`)}
          key={workout.id}
        >
          <img
            className={classes.workoutCard__card__imgWrapper}
            src={workout.thumbnail}
            alt={workout.title}
          />
          <div className={classes.workoutCard__card__description}>
            <h4 className={classes.workoutCard__card__description__cardTitle}>
              {workout.title}
            </h4>
            <h5>
              Level: {workout.levelTag}
              <br />
              Impact: {workout.impactTag}
              <br />
              Duration: {workout.duration}min
            </h5>
          </div>
        </div>
      ))}
    </div>
  );
};
