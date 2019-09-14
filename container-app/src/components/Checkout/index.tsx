import React, { useState, useEffect } from 'react';
import classes from './index.module.scss';
import { useGlobalState } from '../../store';
import Loader from '../Loader';

const Checkout = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState(false);
  const [currentAppLabel] = useGlobalState('currentAppLabel');
  const [currentAppUrl] = useGlobalState('currentAppUrl');

  useEffect((): void => {
    setIsLoading(true);
  }, [currentAppLabel]);

  function handleLoad(): void {
    setIsLoading(false);
  }

  return (
    <React.Fragment>
      {isLoading && <Loader />}
      <iframe
        onLoad={handleLoad}
        title={currentAppLabel}
        src={currentAppUrl}
        className={classes.container}
      />
    </React.Fragment>
  );
};

export default Checkout;
