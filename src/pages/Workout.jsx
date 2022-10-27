import React from 'react';
import { useParams } from 'react-router-dom';
import workouts from '../assets/db/workouts.json';
import classes from '../layout/pages/_workout.module.scss';

export const Workout = () => {
  const { title } = useParams();
  const filteredWorkout = workouts.find((workout) => workout.title === title);

  return (
    <div className={classes.workout}>
      <div className={classes.workout__centralized}>
        <div className={classes.workout__centralized__videoContent}>
          <h2 className={classes.workout__centralized__videoContent__title}>
            {filteredWorkout.title}
          </h2>

          <video
            className={classes.workout__centralized__videoContent__video}
            poster={filteredWorkout.thumbnail}
            controls
          >
            <source src={filteredWorkout.media} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className={classes.workout__centralized__contentCard}>
          <h3 className={classes.workout__centralized__contentCard__subtitle}>
            About
          </h3>
          <p>{filteredWorkout.description}</p>

          <h3 className={classes.workout__centralized__contentCard__subtitle}>
            Level
          </h3>
          <p> {filteredWorkout.levelTag}</p>

          <h3 className={classes.workout__centralized__contentCard__subtitle}>
            Impact
          </h3>
          <p> {filteredWorkout.impactTag}</p>

          <h3 className={classes.workout__centralized__contentCard__subtitle}>
            Id of trainer
          </h3>
          <p> {filteredWorkout.trainerId}</p>
          <h3 className={classes.workout__centralized__contentCard__subtitle}>
            Duration
          </h3>
          <p> {filteredWorkout.duration}</p>
        </div>
      </div>
    </div>
  );
};
