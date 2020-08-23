import React from 'react';
import Navigation from '../Navigation/Navigation';
import logo from '../../images/logo.svg';
import eye from '../../images/eye.svg';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className={styles.root}>
        <div className={styles.menuWrapper}>
          <div className={styles.wrapper}>
              <Link to="/">
                <img src={logo} className={styles.logo} alt="logo Svetlana Lebedeva"></img>
              </Link>
              <Link to="/" className={styles.link}>
                <span>Svetlana Lebedeva</span>
              </Link>
            </div>
            <Link to="/">
              <img src={eye} alt="logo Svetlana Lebedeva" className={styles.eye}/>
            </Link>

            <Navigation />
        </div>
    </div>
  );
}
export default Header;