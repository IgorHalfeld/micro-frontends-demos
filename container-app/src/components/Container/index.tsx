import React from 'react';
import cx from 'classnames';
import Sidebar from '../Sidebar';
import { useGlobalState } from '../../store';
import classes from './index.module.scss';

interface OwnProps {
  children: JSX.Element | boolean,
}

const Container = ({ children }: OwnProps): JSX.Element => {
  const [hasCurrentAppActive] = useGlobalState('hasCurrentAppActive');

  return (
    <div className={cx(classes.container, hasCurrentAppActive ? classes.open : null)}>
    <Sidebar />
      {children}
    </div>
  );
};

export default Container;
