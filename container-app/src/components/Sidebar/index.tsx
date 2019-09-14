import React, { useEffect, useState } from 'react';
import classes from './index.module.scss';
import LogoImage from '../LogoImage';
import Menu from '../Menu';

const Sidebar = (): JSX.Element => {
  const [newClassName, setNewClassName] = useState('#3232F8');
  const listener = (event: MessageEvent) => {
    setNewClassName(event.data);
  };
  useEffect(() => {
    window.parent.addEventListener('message', listener);

    return () => window.parent.removeEventListener('message', listener);
  }, []);


  return (
    <div
      style={{
        backgroundColor: newClassName,
      }}
      className={classes.container}>
      <LogoImage />
      <Menu />
    </div>
  );
}

export default Sidebar;
