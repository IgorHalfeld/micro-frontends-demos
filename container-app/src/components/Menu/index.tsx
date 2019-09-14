import React, { useEffect, useState } from 'react';
import cx from 'classnames';
import classes from './index.module.scss';
import config, { App } from '../../config';
import { setCurrentApplication } from '../../store/actions';


const removeSlashs = (route: string): string => route.replace(/\//g, '');

const Menu = (): JSX.Element => {
  const [currentApp, setCurrentApp] = useState('audio');
  useEffect(() => {
    const { pathname }: { pathname: string } = window.location;
    const currentApp: App | undefined = config.apps.find(
      (app) => removeSlashs(app.route) === removeSlashs(pathname),
    );
    defineCurrentApplication(currentApp);

    window.parent.addEventListener('message', (event) => {
      console.log('Receive message', event);
      if (event.data.location) {
        window.history.pushState(null, event.data.location.pathname);
      }
    });
  }, []);

  function defineCurrentApplication(menuItem: App | undefined): void {
    if (!menuItem) return;
    setCurrentApplication({ currentAppLabel: menuItem.label, currentAppUrl: menuItem.url });
    setCurrentApp(menuItem.route);
    window.history.pushState(null, '', menuItem.route);
  }

  return (
    <ul className={classes.menu}>
      {config.apps.map((menuItem): JSX.Element => (
        <li
          key={menuItem.url}
          className={
            cx(
              classes.menuItem,
              currentApp === menuItem.route && classes.active,
            )
          }
          onClick={(): void => defineCurrentApplication(menuItem)}
        >
          <img
            className={classes.menuItemIcon}
            src={require(`../../assets/icons/${menuItem.icon}`)}
            alt="icon"
          />
          <span className={classes.menuItemLabel}>
            {menuItem.label}
          </span>
          <img
            className={classes.chevronIcon}
            src={require('../../assets/icons/chevron-right.svg')}
            alt="icon"
          />
        </li>
      ))}
    </ul>
  );
};

export default Menu;
