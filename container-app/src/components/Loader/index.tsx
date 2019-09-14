import React from 'react';
import classes from './index.module.scss';

const Loader = (): JSX.Element => (
  <div className={classes.loading}>
    <div className={classes.loadingSpinner} />
  </div>
);

export default Loader;
